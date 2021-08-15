const {src, dest} = require("gulp");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");
const browserSync  = require('browser-sync')

module.exports = function images() {
  return src(['src/images/src/**/*'])
    .pipe(newer('src/images/dist'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: true}
        ]
      })
    ]))
    .pipe(dest('src/images/dist'))
    .pipe(browserSync.stream())
}