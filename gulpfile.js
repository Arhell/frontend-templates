'use strict';

global.$ = {
  gulp: require('gulp'),
  glp:  require('gulp-load-plugins')(),
  bs:   require('browser-sync').create()
};




gulp.task('default', gulp.series(
  gulp.parallel('pug', 'stylus', 'scripts', 'img'),
  gulp.parallel('watch', 'bs')
));