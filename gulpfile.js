'use strict';

var gulp   = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('webpack:dev', function() {
  return gulp.src('app/client.js')
    .pipe(webpack({
      watch: true,
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('copy', function() {
  return gulp.src(['app/**/*.html', 'app/**/*.css'])
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(['app/**/*.html', 'app/**/*.css'], ['copy'])
});

gulp.task('build', ['webpack:dev', 'copy', 'watch']);
gulp.task('default', ['build']);
