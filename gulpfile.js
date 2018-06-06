var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('copy', function() {
	return gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist/'))
});

gulp.task('sass', function() {
	return gulp.src('app/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/'))
});

gulp.task('watch', function() {
	gulp.watch('app/**/*', ['copy', 'sass'])
});