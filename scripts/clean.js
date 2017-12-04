/* 
MIT License
Copyright (c) akameco <akameco.t@gmail.com> (akameco.github.io)
from https://github.com/akameco/s2s/blob/master/scripts/clean.js
*/

const rimfaf = require('rimraf')

function clean(files /* : string */ = 'packages/**/lib') {
  rimfaf.sync(files)
}

module.exports = clean
