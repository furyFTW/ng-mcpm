'use strict';

let gulp = require('gulp');
let del = require('del');


module.exports = (config) => {
    gulp.task('clean:tests', () => {
        return del(['temp/', 'coverage/']);
    });

    gulp.task('clean:build', () => {
        return del('dist/');
    });

    gulp.task('clean:demo', () => {
        return del('demo/dist');
    });

    gulp.task('clean:demo-cache', () => {
        return del('.publish/');
    });
}
