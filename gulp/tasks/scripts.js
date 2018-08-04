module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src(['src/js/libs.js',
      'src/js/common.js'
    ])
      .pipe($.glp.concat('scripts.min.js'))
      .pipe($.gulp.dest('dist/js'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
};