
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('gulp-rimraf');

var paths = {
	css: {
		src: 'src/css/*.css',
		dest: 'public/css'
	},
	js: {
		src: 'src/js/*.js',
		dest: 'public/js'
	}
};

gulp.task('default', ['css', 'js'])

gulp.task('watch', function() {
	gulp.watch(paths.css.src, ['css']);
	gulp.watch(paths.js.src, ['js']);
});

gulp.task('css', ['clean-css'], function () {
	return gulp.src(paths.css.src)
		.pipe(minifyCss())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest(paths.css.dest))
});

gulp.task('js', ['clean-js'], function () {
	return gulp.src(paths.js.src)
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest(paths.js.dest))
});

gulp.task('clean-css', function () {
	return gulp.src(paths.css.dest, { read: false })
		.pipe(rimraf());
});

gulp.task('clean-js', function () {
	return gulp.src(paths.js.dest, { read: false })
		.pipe(rimraf());
});