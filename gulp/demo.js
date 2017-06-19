let gulp = require('gulp');
let exec = require('child_process').exec;
let del = require('del');
let webpack = require('webpack');
let gulpFile = require('gulp-file');

module.exports = (config) => {

    gulp.task('generate-docs', () => {
        var getApiDocs = require('../misc/get-doc');
        var docs = `const API_DOCS = ${JSON.stringify(getApiDocs(), null, 2)};\n\nexport default API_DOCS;`;

        return gulpFile('api-docs.ts', docs, {
            src: true
        }).pipe(gulp.dest(PATHS.demoApiDocs));
    });

    gulp.task('generate-plunks', function () {
        var getPlunker = require('../misc/plunk-gen');
        var demoGenUtils = require('../misc/demo-gen-utils');
        var plunks = [];

        demoGenUtils.getDemoComponentNames().forEach(function (componentName) {
            plunks = plunks.concat(demoGenUtils.getDemoNames(componentName).reduce(function (soFar, demoName) {
                soFar.push({
                    name: `${componentName}/demos/${demoName}/plnkr.html`,
                    source: getPlunker(componentName, demoName)
                });
                return soFar;
            }, []));
        });

        return gulpFile(plunks, {
            src: true
        }).pipe(gulp.dest('demo/src/public/app/components'));
    });
}