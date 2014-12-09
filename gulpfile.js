var browserify = require('browserify');
var es6ify = require('es6ify');
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var ghPages = require('gulp-gh-pages');

gulp.task('build', function() {
  return browserify({ debug: true })
    .add(es6ify.runtime)
    .transform(es6ify)
    .require(require.resolve('./src/main.js'), {entry: true})
    .bundle()
    .pipe(fs.createWriteStream('./www/app.js'));
});

gulp.task('watch', ['build'], function () {
  return gulp.watch('src/**/*.js', ['build']);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src(['./www/index.html', './www/style.css', './www/app.js'])
    .pipe(ghPages());
});
