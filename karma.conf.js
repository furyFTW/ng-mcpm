module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            // For travis
            'node_modules/core-js/client/shim.js',
            'node_modules/ie-shim/index.js',
            // paths loaded by Karma
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            {
                pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false
            },
            {
                pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false
            },
            {
                pattern: 'karma-test-shim.js', included: true, watched: true
            },
            {
                pattern: 'node_modules/@angular/**/*.js', included: false, watched: true
            },
            {
                pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true
            },
            // paths loaded via module imports
            {
                pattern: 'temp/**/*.js', included: false, watched: true
            },
            // paths to support debugging with source maps in dev tools
            {
                pattern: 'src/**/*.ts', included: false, watched: false
            },
            {
                pattern: 'temp/**/*.js.map', included: false, watched: false
            }
        ],

        preprocessors: {
            'temp/**/*.js': 'sourcemap',
            'temp/**/!(*.spec|*.module).js': 'coverage'
        },

        reporters: ['progress', 'coverage'],

        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'json',
                    dir: 'coverage',
                    subdir: 'json',
                    file: 'coverage-final.json'
                }
            ]
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        captureTimeout: 60000,
        browserDisconnectTimeout: 60000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000
    });
};