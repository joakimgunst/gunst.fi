
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
//var rimraf = require('gulp-rimraf');

var paths = {
	//scripts: 'public/scripts/*.jsx',
	css: 'content/css/*.css'
};

gulp.task('default', ['css'])

gulp.task('css', function () {
	return gulp.src(paths.css)
		.pipe(minifyCss())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('public/css'))
});

/*gulp.task('scripts', function () {
	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public/build'))
});
*/
/*gulp.task('watch', function() {
	//gulp.watch(paths.scripts, ['scripts']);
});*/