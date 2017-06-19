'use strict';

const docsConfig = Object.assign({
    port: 9090
}, getLocalConfig());

var rootDir = '.';
var appDir = rootDir + '/src';
var gulpDir = './gulp';

var PATHS = {
    src: 'src/**/*.ts',
    srcIndex: 'src/index.ts',
    specs: 'src/**/*.spec.ts',
    testHelpers: 'src/test/**/*.ts',
    demo: 'demo/**/*.ts',
    demoDist: 'demo/dist/**/*',
    typings: 'typings/index.d.ts',
    jasmineTypings: 'typings/globals/jasmine/index.d.ts',
    demoApiDocs: 'demo/src',
    coverageJson: 'coverage/json/coverage-final.json'
};

function platformPath(path) {
    return /^win/.test(os.platform()) ? `${path}.cmd` : path;
}