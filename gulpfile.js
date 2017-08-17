var gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify"),
		imagemin       = require('gulp-imagemin'),
		pug            = require("gulp-pug") ;


gulp.task('common-js', function() {
	return gulp.src([
		'src/js/common.js',
		])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'srс/libs/jquery/dist/jquery.min.js',
		'src/js/common.min.js',
		])
	.pipe(concat('scripts.min.js'))
	//.pipe(uglify()) 
	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'srс'
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
	//.pipe(cleanCSS())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('pug', function() {
	return gulp.src('src/pug/**/*.pug')
	.pipe(pug({
		pretty: true // Not inline html
	}))
	.pipe(gulp.dest('src'))
});

gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});

gulp.task('watch', ['sass', 'js', 'pug', 'browser-sync'], function() {
	gulp.watch('src/sass/**/*.sass', ['sass']);
	gulp.watch(['src/pug/**/*.pug'], ['pug']);
	gulp.watch(['libs/**/*.js', 'srs/js/common.js'], ['js']);
	gulp.watch('srs/*.html', browserSync.reload);
});


gulp.task('build', ['removedist','sass','pug', 'js'], function() {

	var buildFiles = gulp.src([
		'srs/*.html',
		]).pipe(gulp.dest('dist'));

	var buildCss = gulp.src([
		'srs/css/main.min.css',
		]).pipe(gulp.dest('dist/css'));

	var buildJs = gulp.src([
		'srs/js/scripts.min.js',
		]).pipe(gulp.dest('dist/js'));

	var buildFonts = gulp.src([
		'srs/fonts/**/*',
		]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
