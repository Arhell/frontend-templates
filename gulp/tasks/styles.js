const {src, dest} = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const browserSync  = require('browser-sync')
const sassGlob     = require('gulp-sass-glob')
const sass         = require('gulp-sass')(require('sass'))

module.exports = function styles() {
  return src(['src/styles/*.*', '!src/styles/_*.*'])
    .pipe(eval(sassGlob)())
    .pipe(eval(sass)())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(cleanCss({
      level: {
        1: { specialComments: 0 }},
      // format: 'beautify'
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}