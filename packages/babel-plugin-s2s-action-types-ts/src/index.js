import syntaxTypeScript from '@babel/plugin-syntax-typescript';

export default (babel) => {
  console.log('plugin enabled');
  return {
    inherits: syntaxTypeScript,
    name: 'babel-plugin-s2s-action-types-ts',
    visitor: {
      Program: {
        exit(path, state) {
          console.log('#Program exit', path.node.body)
        }
      }
    }
  };
}
