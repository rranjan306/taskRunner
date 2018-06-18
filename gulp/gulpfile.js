var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['concat']);
});

gulp.task('copy', function() {
  gulp.src('src/**')
      .pipe(gulp.dest('dest'));
});

gulp.task('concat', function() {
  gulp.src('src/**/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public'));
});
