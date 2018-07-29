module.exports = function () {
  gulp.task('img', function () {
    return gulp.src('src/img/*.{png, jpg, gif}')
      .pipe(glp.imagemin())
      .pipe(gulp.dest('dist/img'));
  });
}