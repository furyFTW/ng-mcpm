'use strict';
// Load modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');

module.exports = (config) => {
    gulp.task('lint', function () {

        console.log(__dirname + config.PATHS.src);
        return gulp.src([config.PATHS.src, config.PATHS.demo, '!demo/src/api-docs.ts'])
            .pipe(tslint({
                configuration: require('../tslint.json'),
                formatter: 'prose'
            }))
            .pipe(tslint.report({
                summarizeFailureOutput: true
            }));
    });
}