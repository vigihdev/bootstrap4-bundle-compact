// themes-bootstrap.js
'use strict';

const path = require('node:path');
const fs = require('node:fs');
const { Paths } = require('../config/paths');
const { AssetsPaths } = require('../config/assets-paths');

const BASEPATH = Paths.LIBRARIES.THEMES_BOOTSTRAP;
const DIST_STYLES = AssetsPaths.THEMES_BOOTSTRAP.DIST;
const BUILDS_STYLES = AssetsPaths.THEMES_BOOTSTRAP.BUILDS;

const PATHS = {
    DIST: {
        CSS: path.join(BASEPATH, 'dist', 'css'),
        JS: path.join(BASEPATH, 'dist', 'js')
    },
    BUILDS: {
        CSS: path.join(BASEPATH, 'builds', 'css'),
        JS: path.join(BASEPATH, 'builds', 'js')
    },
    LIBRARIES: {
        CHECKBOX: path.join(BASEPATH, 'checkbox'),
        FORM: path.join(BASEPATH, 'form'),
        LOADERS: path.join(BASEPATH, 'loaders'),
        RADIO_GROUP: path.join(BASEPATH, 'radio-group'),
        SWITCH: path.join(BASEPATH, 'switch'),
        VENDOR: path.join(BASEPATH, 'vendor')
    }
};

// Sass Configuration
const sass = {
    dist: {
        options: {
            sourceMap: false,
            'no-source-map': true,
            style: 'expanded'
        },
        files: {
            [`${DIST_STYLES.CSS}/checkbox.css`]: `${PATHS.LIBRARIES.CHECKBOX}/src/scss/checkbox.scss`,
            [`${DIST_STYLES.CSS}/form.css`]: `${PATHS.LIBRARIES.FORM}/src/scss/form.scss`,
            [`${DIST_STYLES.CSS}/loaders.css`]: `${PATHS.LIBRARIES.LOADERS}/src/scss/loaders.scss`,
            [`${DIST_STYLES.CSS}/radio-group.css`]: `${PATHS.LIBRARIES.RADIO_GROUP}/src/scss/radio-group.scss`,
            [`${DIST_STYLES.CSS}/switch.css`]: `${PATHS.LIBRARIES.SWITCH}/src/scss/switch.scss`,
            [`${DIST_STYLES.CSS}/vendor.css`]: `${PATHS.LIBRARIES.VENDOR}/src/scss/vendor.scss`,
        }
    }
};

// Concat Configuration
const concatFiles = {
    js: {
        [`${DIST_STYLES.JS}/checkbox.js`]: `${PATHS.LIBRARIES.CHECKBOX}/src/js/*.js`,
        [`${DIST_STYLES.JS}/form.js`]: `${PATHS.LIBRARIES.FORM}/src/js/*.js`,
        [`${DIST_STYLES.JS}/switch.js`]: `${PATHS.LIBRARIES.SWITCH}/src/js/*.js`,
        [`${DIST_STYLES.JS}/loaders.js`]: `${PATHS.LIBRARIES.LOADERS}/src/js/*.js`,
        [`${DIST_STYLES.JS}/vendor.js`]: `${PATHS.LIBRARIES.VENDOR}/src/js/*.js`,
        [`${DIST_STYLES.JS}/radio-group.js`]: `${PATHS.LIBRARIES.RADIO_GROUP}/src/js/*.js`,
    },
    css: {}
};

// Builds Configuration
const buildsConfig = {
    js: Object.keys(concatFiles.js)?.filter(f => fs.existsSync(f)),
    css: Object.keys(sass.dist.files)?.filter(f => fs.existsSync(f))
};

const watch = {
    js: [
        `${BASEPATH}/*/src/js/*.js`,
        `${BASEPATH}/*/src/js/*/*.js`,
        `${BASEPATH}/*/src/js/*/*/*.js`,
    ],
    css: [
        `${BASEPATH}/*/src/scss/*.scss`,
        `${BASEPATH}/*/src/scss/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*.scss`,
    ]
}

module.exports.ThemesBootstrapSass = {
    basepath: AssetsPaths.THEMES_BOOTSTRAP.BASEPATH,
    sass: sass,
    concat: {
        options: {
            separator: ';'
        },
        dist: {
            files: { ...concatFiles.js },
        },
    },
    builds: {
        concat: {
            dist: {
                files: {
                    [`${BUILDS_STYLES.JS}/themes-bootstrap.js`]: buildsConfig.js,
                },
            },
        },
        concat_css: {
            main: {
                files: {
                    [`${BUILDS_STYLES.CSS}/themes-bootstrap.css`]: buildsConfig.css,
                },
            }
        },
    },
    watch: watch
};