let register = require('@babel/register');

module.exports = register({
  extensions: ['.js'],
  babelrc: true,
  compact: true,
});
