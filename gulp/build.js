let gulp = require('gulp');
let exec = require('child_process').exec;
let del = require('del');
let webpack = require('webpack');
let gulpFile = require('gulp-file');


module.exports = (config) => {

    gulp.task('ngc', (cb) => {
        var executable = path.join(__dirname, config.platformPath('/node_modules/.bin/ngc'));
        exec(`${executable} -p ${config.tsConfigES2015}`, (e) => {
            if (e) console.log(e);
            del('./dist/waste');
            cb();
        }).stdout.on('data', (data) => {
            console.log(data);
        });
    });

    gulp.task('umd', function (cb) {
        function ngExternal(ns) {
            var ng2Ns = `@angular/${ns}`;
            return {
                root: ['ng', ns],
                commonjs: ng2Ns,
                commonjs2: ng2Ns,
                amd: ng2Ns
            };
        }

        function rxjsExternal(context, request, cb) {
            if (/^rxjs\/add\/observable\//.test(request)) {
                return cb(null, {
                    root: ['Rx', 'Observable'],
                    commonjs: request,
                    commonjs2: request,
                    amd: request
                });
            } else if (/^rxjs\/add\/operator\//.test(request)) {
                return cb(null, {
                    root: ['Rx', 'Observable', 'prototype'],
                    commonjs: request,
                    commonjs2: request,
                    amd: request
                });
            } else if (/^rxjs\//.test(request)) {
                return cb(null, {
                    root: ['Rx'],
                    commonjs: request,
                    commonjs2: request,
                    amd: request
                });
            }
            cb();
        }

        webpack({
            entry: './temp/index.js',
            output: {
                filename: 'dist/bundles/ng-mcmp.js',
                library: 'ngb',
                libraryTarget: 'umd'
            },
            devtool: 'source-map',
            externals: [{
                '@angular/core': ngExternal('core'),
                '@angular/common': ngExternal('common'),
                '@angular/forms': ngExternal('forms')
            },
                rxjsExternal
            ]
        },
            webpackCallBack('webpack', cb));
    });

    gulp.task('npm', () => {
        var pkgJson = require('./package.json');
        var targetPkgJson = {};
        var fieldsToCopy = ['version', 'description', 'keywords', 'author', 'repository', 'license', 'bugs', 'homepage'];

        targetPkgJson['name'] = '@ng-mcmp/ng-mcmp';

        fieldsToCopy.forEach((field) => {
            targetPkgJson[field] = pkgJson[field];
        });

        targetPkgJson['main'] = 'bundles/ng-mcpm.js';
        targetPkgJson['module'] = 'index.js';
        targetPkgJson['typings'] = 'index.d.ts';

        targetPkgJson.peerDependencies = {};
        Object.keys(pkgJson.dependencies).forEach((dependency) => {
            targetPkgJson.peerDependencies[dependency] = `^${pkgJson.dependencies[dependency]}`;
        });

        return gulp.src('README.md')
            .pipe(gulpFile('package.json', JSON.stringify(targetPkgJson, null, 2)))
            .pipe(gulp.dest('dist'));
    });
}