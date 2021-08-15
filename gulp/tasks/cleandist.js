const del = require("del");

module.exports = function cleanDist() {
  return del('dist/**/*', { force: true })
}