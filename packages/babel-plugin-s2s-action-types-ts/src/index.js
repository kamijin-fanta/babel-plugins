import syntaxTypeScript from '@babel/plugin-syntax-typescript';
import {relative, join, dirname} from 'path';
import slash from 'slash';
import * as types from '@babel/types';
import template from '@babel/template';

const babylonOpts = {sourceType: 'module', plugins: ['typescript']};
const wrapTemp = (tmpl) => template(tmpl, babylonOpts);
const assert = require('assert');

// ///// templates

const COMMENTS = '**** Do not edit below this line ****';

const builders = {
  typeAlias: wrapTemp(`export type NAME = typeof VALUE;`),
  comments: (str) => ({
    type: 'CommentBlock',
    value: str,
  }),
  actions: wrapTemp(`export const Actions = IN;`),
};

function getPrefix({opts: {filename}}, removePrefix) {
  const file = relative(join(process.cwd(), removePrefix), filename);
  return `${dirname(slash(file))}/`;
}


// ///// gen AST helper

function interfaceGen(name, fields) {
  // output ike: export interface Fuga { type: hoge; }

  assert(Array.isArray(fields), 'expect fields is array');

  let sigs = fields.map(([key, typeName]) =>
    types.TSPropertySignature(
      types.Identifier(key),
      types.TSTypeAnnotation(
        types.TSTypeReference(
          types.TSQualifiedName(
            types.Identifier('Actions'),
            types.Identifier(typeName)
          )
        )
      )
    )
  );

  let interfaceDeclaration = types.TSInterfaceDeclaration(
    types.Identifier(name),
    undefined,
    undefined,
    types.TSInterfaceBody(sigs),
  );

  return types.ExportNamedDeclaration(
    interfaceDeclaration,
    [],
  );
}

// ///// plugin

export default (babel) => {
  return {
    inherits: syntaxTypeScript,
    name: 'babel-plugin-s2s-action-types-ts',
    visitor: {
      Program: {
        exit(programPath, state) {
          const {file, opts: {usePrefix = true, removePrefix = ''}} = state;

          const imports = [];
          const typeNameSet = new Set();
          const intMap = new Map(); // has interfaces
          const prefix = usePrefix ? getPrefix(file, removePrefix) : '';

          function addTypes(typeName) {
            const name = typeName.name;
            typeNameSet.add(name);
            if (name.endsWith('Request')) {
              typeNameSet.add(name.replace(/Request$/, 'Success'));
              typeNameSet.add(name.replace(/Request$/, 'Failure'));
            }
          }

          // collect exist type infomation
          programPath.traverse({
            ImportDeclaration(path) {
              imports.push(path.node);
            },
            TSTypeAliasDeclaration(path) { // Like: export type hoge = Fuga; or typeof FUGA
              if (path.node.id.name === 'Action') {
                switch (path.node.typeAnnotation.type) {
                  case 'TSUnionType':
                    path.node.typeAnnotation.types
                      .map((n) => n.typeName)
                      .forEach(addTypes);
                    break;
                  case 'TSTypeReference':
                    addTypes(path.node.typeAnnotation.typeName);
                    break;
                }
              } else {
                // ignore
              }
            },
            TSInterfaceDeclaration(path) { // Like: export interface Fuga {}
              intMap.set(path.node.id.name, path.parent);
              if (path.parent.trailingComments) {
                path.parent.trailingComments = path.parent.trailingComments
                  .filter((c) => c.value !== COMMENTS);
              }
            },
            TSEnumDeclaration(path) {
              // ignore const enum
            },
          });

          // replace actionNode
          const actionsNode = types.ExportNamedDeclaration(
            types.TSTypeAliasDeclaration(
              types.Identifier('Action'),
              undefined,
              types.TSUnionType(
                Array.from(typeNameSet).map((type) => types.TSTypeReference(types.Identifier(type)))
              )
            ),
            []
          );

          // add additionalInterfaces to interfaces map
          const notFoundInterfaces = Array.from(typeNameSet).filter((name) => !intMap.has(name));
          const additionalInterfaces = notFoundInterfaces.map((name) =>
            [name, interfaceGen(name, [
              ['type', name],
            ])]
          );
          additionalInterfaces.forEach(([name, int]) => intMap.set(name, int));

          const interfaces = Array.from(typeNameSet).map((name) => intMap.get(name));

          const enumMembers = Array.from(typeNameSet).map((name) => {
            return types.TSEnumMember(types.Identifier(name), types.StringLiteral(prefix + name));
          });
          const constEnum = types.TSEnumDeclaration(
            types.Identifier('Actions'),
            enumMembers,
          );
          constEnum.const = true;
          const exportEnum = types.ExportNamedDeclaration(constEnum, []);
          exportEnum.leadingComments = [
            builders.comments(COMMENTS),
          ];

          if (imports.length) {
            imports.push(types.Noop());
          }

          // modify node tree
          programPath.node.body = [
            ...imports,
            actionsNode,
            types.noop(),
            ...interfaces,
            exportEnum,
          ];
        },
      },
    },
  };
};
