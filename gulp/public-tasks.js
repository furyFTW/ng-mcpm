'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');


module.exports = (config) => {

    gulp.task('clean', ['clean:build', 'clean:tests', 'clean:demo', 'clean:demo-cache']);

    gulp.task('build', function (done) {
        runSequence('lint', 'clean:build', 'ngc', 'umd', 'npm', done);
    });

    gulp.task(
        'deploy-demo',
        function (done) {
            runSequence('clean:demo', 'build:demo', 'demo-push', 'clean:demo-cache', done);
        });

    gulp.task('default', function (done) {
        runSequence('lint', 'test', done);
    });

    gulp.task('ci', function (done) {
        runSequence('default', 'build:demo', done);
    });
}