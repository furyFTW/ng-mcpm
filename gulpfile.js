'use strict';

// Load modules
var requireDir = require('require-dir');

// Load tasks
var gulpFiles = requireDir('./gulp');

var config = require('./gulp/_config');

for (var index in gulpFiles) {
    if (index.indexOf('_config') < 0) {
        gulpFiles[index](config);
    }
}