var babel = require("../package.json").babel;
var register = require("@babel/register");
var path = require("path");

module.exports = register({
  extensions: [".js"],
  babelrc: true,
  compact: true,
});
