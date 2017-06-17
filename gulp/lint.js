let gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task('lint', () => {
    return gulp.src([PATHS.src, PATHS.demo, '!demo/src/api-docs.ts'])
        .pipe(tslint({
            configuration: require('./tslint.json'),
            formatter: 'prose'
        }))
        .pipe(tslint.report({
            summarizeFailureOutput: true
        }));
});