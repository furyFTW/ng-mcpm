'use strict';
let gulp = require('gulp');
let runSequence = require('run-sequence');
let shell = require('gulp-shell');

module.exports = (config) => {

    gulp.task('clean', ['clean:build', 'clean:tests', 'clean:demo', 'clean:demo-cache']);

    gulp.task('build', function (done) {
        runSequence('lint', 'test', 'clean:build', 'ngc', 'umd', 'npm', done);
    });

    gulp.task(
        'demo-server', ['generate-docs'],
        shell.task([`webpack-dev-server --port ${config.docsConfig.port} --config webpack.demo.js --inline --progress`]));


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