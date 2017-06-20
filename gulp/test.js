var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
let gulp = require('gulp');
let path = require('path');
let exec = require('child_process').exec;
let asyncDone = require('async-done');

function startKarmaServer(isTddMode, isSaucelabs, done) {
    var karmaServer = require('karma').Server;
    var travis = process.env.TRAVIS;
    var dirname = __dirname.replace('gulp', '');
    var config = {
        configFile: `${dirname}/karma.conf.js`,
        singleRun: !isTddMode,
        autoWatch: isTddMode
    };

    new karmaServer(config, done).start();
}

module.exports = (config) => {

    gulp.task('build:tests', ['clean:tests'], (cb) => {
        exec(path.join(__dirname.replace('gulp', ''), config.platformPath('/node_modules/.bin/tsc')), (e) => {
            if (e) console.log(e);
            cb();
        }).stdout.on('data', function(data) {
            console.log(data);
        });
    });


    gulp.task('test', ['build:tests'], function(done) {
        startKarmaServer(false, false, () => {
            asyncDone(
                () => {
                    return gulp.src(config.PATHS.coverageJson).pipe(remapIstanbul({
                        reports: {
                            'html': 'coverage/html'
                        }
                    }));
                }, done);
        });
    });

    gulp.task('remap-coverage', function() {
        return gulp.src(PATHS.coverageJson).pipe(remapIstanbul({
            reports: {
                'html': 'coverage/html'
            }
        }));
    });

    gulp.task('tdd', ['clean:tests'], (cb) => {
        var executable = path.join(__dirname.replace('gulp', ''), platformPath('/node_modules/.bin/tsc'));
        var startedKarma = false;

        exec(`${executable} -w`, (e) => {
            cb(e && e.signal !== 'SIGINT' ? e : undefined);
        }).stdout.on('data', function(data) {

            console.log(data);

            // starting karma in tdd as soon as 'tsc -w' finishes first compilation
            if (!startedKarma) {
                startedKarma = true;
                startKarmaServer(true, false, function(err) {
                    process.exit(err ? 1 : 0);
                });
            }
        });
    });

}