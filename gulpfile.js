'use strict';

var gulp = reguire('gulp'),
		glp  = reguire('gulp-load-plugins');

gulp.task('pug', function () {
	return gulp.src('src/pug/*.pug')
		.pipe(glp.pug({
			pretty:true
		}))
		.pipe(gulp.dest('dist'));
});