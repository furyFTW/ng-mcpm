'use strict';
// Load modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');

gulp.task('lint', function () {
    return gulp.src([PATHS.src, PATHS.demo, '!demo/src/api-docs.ts'])
        .pipe(tslint({
            configuration: require('./tslint.json'),
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});