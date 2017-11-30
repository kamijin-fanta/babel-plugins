var babel = require("../package.json").babel;
var register = require("babel-register");
var path = require("path");

module.exports = register({
  extensions: [".js"],
  // only: [
  //   /packages\/.+\/(test\/(?!fixtures\/)|src\/).+\.js$/,
  // ],
  babelrc: true,
  compact: true,
});
