const del = require("del");
const ssi = require('ssi')

module.exports = async function buildHtml() {
  const includes = new ssi('src/', 'dist/', '/**/*.html')
  includes.compile()
  del('dist/parts', { force: true })
}