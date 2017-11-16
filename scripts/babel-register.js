var babel = require("../package.json").babel;
var register = require("babel-register");
var path = require("path");

register({
  extensions: [".js"],
  // Only js files in the test folder but not in the subfolder fixtures.
  only: /packages\/.+\/(test\/(?!fixtures\/)|src\/).+\.js$/,
  babelrc: true,
  compact: true,
});

module.exports = register;
