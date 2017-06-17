

const docsConfig = Object.assign({
    port: 9090
}, getLocalConfig());

function platformPath(path) {
    return /^win/.test(os.platform()) ? `${path}.cmd` : path;
}

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