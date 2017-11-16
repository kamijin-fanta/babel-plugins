const testRunner = require("babel-helper-transform-fixture-test-runner");
const path = require("path");

const loc = __dirname;
const name = path.basename(path.dirname(loc));
testRunner(loc + "/fixtures", name);
