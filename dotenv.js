const path = require('node:path');
const dotenv = require('dotenv');
const { existsSync, lstatSync } = require('node:fs');

var BOOTSTRAP4_BUNDLE_LIBS_BASEPATH = undefined;

const PWD = process.env.PWD
if (PWD && existsSync(PWD) && lstatSync(PWD).isDirectory()) {
    var libsPath = path.join(PWD, 'libs')
    if (existsSync(libsPath) && lstatSync(libsPath).isDirectory()) {
        BOOTSTRAP4_BUNDLE_LIBS_BASEPATH = libsPath
    }
}

const packageNamePath = path.join(__dirname, '@vigihdev', 'bootstrap4-bundle-compact', 'libs')
if (existsSync(packageNamePath) && lstatSync(packageNamePath).isDirectory()) {
    BOOTSTRAP4_BUNDLE_LIBS_BASEPATH = packageNamePath
}

module.exports.DotEnv = {
    boot: function () {
        dotenv.populate(process.env, {
            BOOTSTRAP4_BUNDLE_BASEPATH: __dirname,
            BOOTSTRAP4_BUNDLE_LIBS_BASEPATH: BOOTSTRAP4_BUNDLE_LIBS_BASEPATH,
        })
    }
}