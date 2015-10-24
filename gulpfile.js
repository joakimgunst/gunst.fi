
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rimraf = require('gulp-rimraf');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
	css: {
		src: [
			'libs/bootstrap-custom/css/bootstrap.min.css',
			'src/css/*.css'
		],
		dest: 'public/css'
	},
	js: {
		src: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/bootstrap/dist/js/bootstrap.min.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'src/js/*.js'
		],
		dest: 'public/js'
	}
};

gulp.task('default', ['css', 'js'])

gulp.task('watch', ['default'], function () {
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
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(sourcemaps.write())
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