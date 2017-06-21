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
        }).pipe(gulp.dest(config.PATHS.demoApiDocs));
    });
}