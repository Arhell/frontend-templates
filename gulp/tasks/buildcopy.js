const {src, dest} = require("gulp");

module.exports = function buildCopy() {
  return src([
    '{src/js,src/css}/*.min.*',
    'src/images/**/*.*',
    '!src/images/src/**/*',
    'src/fonts/**/*'
  ], { base: 'src/' })
    .pipe(dest('dist'))
}