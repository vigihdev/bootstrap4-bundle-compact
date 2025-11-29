// themes-components.js
'use strict';

const path = require('node:path');
const fs = require('node:fs');
const { Paths } = require('../config/paths');
const { AssetsPaths } = require('../config/assets-paths');

const BASEPATH = Paths.LIBRARIES.THEMES_COMPONENTS;
const DIST_STYLES = AssetsPaths.THEMES_COMPONENTS.DIST;
const BUILDS_STYLES = AssetsPaths.THEMES_COMPONENTS.BUILDS;

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
        GOOGLE_MAP: path.join(BASEPATH, 'google-map'),
        TYPEAHEAD: path.join(BASEPATH, 'typeahead'),
        INFINITE_SCROLL: path.join(BASEPATH, 'infinite-scroll'),
        LIGHTBOX: path.join(BASEPATH, 'lightbox'),
        OWL_CAROUSEL: path.join(BASEPATH, 'owl-carousel'),
        SELECT2: path.join(BASEPATH, 'select2'),
        TEMPUS_DOMINUS: path.join(BASEPATH, 'tempus-dominus')
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
            [`${DIST_STYLES.CSS}/google-map.css`]: `${PATHS.LIBRARIES.GOOGLE_MAP}/src/scss/google-map.scss`,
            [`${DIST_STYLES.CSS}/typeahead.css`]: `${PATHS.LIBRARIES.TYPEAHEAD}/src/scss/typeahead.scss`,
            [`${DIST_STYLES.CSS}/infinite-scroll.css`]: `${PATHS.LIBRARIES.INFINITE_SCROLL}/src/scss/infinite-scroll.scss`,
            [`${DIST_STYLES.CSS}/lightbox.css`]: `${PATHS.LIBRARIES.LIGHTBOX}/src/scss/lightbox.scss`,
            [`${DIST_STYLES.CSS}/owl-carousel.css`]: `${PATHS.LIBRARIES.OWL_CAROUSEL}/src/scss/owl-carousel.scss`,
            [`${DIST_STYLES.CSS}/select2.css`]: `${PATHS.LIBRARIES.SELECT2}/src/scss/select2.scss`,
            [`${DIST_STYLES.CSS}/tempus-dominus.css`]: `${PATHS.LIBRARIES.TEMPUS_DOMINUS}/src/scss/tempus-dominus.scss`
        }
    }
};

// Concat Configuration
const concatFiles = {
    js: {
        [`${DIST_STYLES.JS}/google-map.js`]: `${PATHS.LIBRARIES.GOOGLE_MAP}/src/js/*.js`,
        [`${DIST_STYLES.JS}/lightbox.js`]: `${PATHS.LIBRARIES.LIGHTBOX}/src/js/*.js`,
        [`${DIST_STYLES.JS}/select2.js`]: `${PATHS.LIBRARIES.SELECT2}/src/js/*.js`,
        [`${DIST_STYLES.JS}/typeahead.js`]: `${PATHS.LIBRARIES.TYPEAHEAD}/src/js/*.js`,
        [`${DIST_STYLES.JS}/owl-carousel.js`]: `${PATHS.LIBRARIES.OWL_CAROUSEL}/src/js/*.js`,
        [`${DIST_STYLES.JS}/infinite-scroll.js`]: `${PATHS.LIBRARIES.INFINITE_SCROLL}/src/js/*.js`,
        [`${DIST_STYLES.JS}/tempus-dominus.js`]: `${PATHS.LIBRARIES.TEMPUS_DOMINUS}/src/js/*.js`,
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

module.exports.ThemesComponentsSass = {
    basepath: AssetsPaths.THEMES_COMPONENTS.BASEPATH,
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
                    [`${BUILDS_STYLES.JS}/themes-components.js`]: buildsConfig.js,
                },
            },
        },
        concat_css: {
            main: {
                files: {
                    [`${BUILDS_STYLES.CSS}/themes-components.css`]: buildsConfig.css,
                },
            }
        },
    },
    watch: watch
};