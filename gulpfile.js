var gulp = require('gulp')
var zip = require('gulp-zip')
path = require('path')

gulp.task('zip', function() {
	return gulp
		.src(
			['./src/css/hemterest.css', './src/js/hemterest.js', 'manifest.json'],
			{
				base: '.'
			}
		)
		.pipe(zip('hemterest.zip'))
		.pipe(gulp.dest('./ship'))
})
