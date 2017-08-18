var gulp = require('gulp')
var zip = require('gulp-zip')
path = require('path')

gulp.task('zip', function() {
	return gulp
		.src(['./src/css/**/*', './src/js/**/*', 'manifest.json'], {
			base: '.'
		})
		.pipe(zip('hemterest.zip'))
		.pipe(gulp.dest('./ship'))
})
