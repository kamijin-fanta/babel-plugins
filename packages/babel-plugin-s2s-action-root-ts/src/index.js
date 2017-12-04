import syntaxTypeScript from '@babel/plugin-syntax-typescript';
import * as types from '@babel/types';
import template from '@babel/template';
import globby from 'globby';
import upperCamelCase from 'uppercamelcase';
import {getImportPath, getParentDirName} from 's2s-utils';

const babylonOpts = {sourceType: 'module', plugins: ['typescript']};
const wrapTemp = (tmpl) => template(tmpl, babylonOpts);

// ///// templates

const builders = {
  imports: wrapTemp(`import { Action as ALIAS } from "IMPORT";`),
};

function createActionName(filename) {
  return `${upperCamelCase(getParentDirName(filename))}Action`;
}

export default (babel) => {
  return {
    inherits: syntaxTypeScript,
    name: 'babel-plugin-s2s-action-root-ts',
    visitor: {
      Program: {
        exit(programPath, state) {
          const {opts: {input, output}} = state;
          const globOptions = Object.assign(
            {absolute: true},
            state.opts.globOptions,
          );

          if (!input) {
            throw new Error('require input option');
          }
          if (!output) {
            throw new Error('require output option');
          }

          const files = globby.sync(input, globOptions);
          const importPathList = files.map((f) => {
            const path = getImportPath(output, f);
            return [
              path,
              createActionName(path),
            ];
          });

          const imports = importPathList.map(([path, action]) =>
            builders.imports({
              ALIAS: types.Identifier(action),
              IMPORT: types.StringLiteral(path),
            })
          );

          const action = types.ExportNamedDeclaration(
            types.TSTypeAliasDeclaration(
              types.Identifier('Action'),
              undefined,
              types.TSUnionType(
                importPathList.map(([_, action]) => types.TSTypeReference(types.Identifier(action)))
              )
            ),
            [],
          );

          programPath.node.body = [
            ...imports,
            types.Noop(),
            action,
          ];
        },
      },
    },
  };
};
