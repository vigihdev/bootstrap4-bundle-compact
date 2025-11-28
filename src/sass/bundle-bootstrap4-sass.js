'use strict';

const path = require('node:path');
const { Paths } = require('../config/paths');

const BASEPATH = Paths.ASSETS.BASEPATH;
const JS_BUILDS = Paths.ASSETS.BUILDS.JS;
const CSS_BUILDS = Paths.ASSETS.BUILDS.CSS;

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
        BOOTSTRAP4: path.join(Paths.ASSETS.BOOTSTRAP4.BASEPATH, 'builds'),
        THEMES_STYLES: path.join(Paths.ASSETS.THEMES_STYLES.BASEPATH, 'builds'),
        THEMES_BOOTSTRAP: path.join(Paths.ASSETS.THEMES_BOOTSTRAP.BASEPATH, 'builds'),
        THEMES_COMPONENTS: path.join(Paths.ASSETS.THEMES_COMPONENTS.BASEPATH, 'builds'),
    }
};

module.exports.BundleBootstrap4Sass = {
    basepath: BASEPATH,
    builds: {
        concat: {
            dist: {
                files: {
                    [`${JS_BUILDS}/bootstrap-bundle.js`]: [
                        `${PATHS.LIBRARIES.BOOTSTRAP4}/js/bootstrap-bundle.js`,
                        `${PATHS.LIBRARIES.THEMES_BOOTSTRAP}/js/themes-bootstrap.js`,
                        `${PATHS.LIBRARIES.THEMES_COMPONENTS}/js/themes-components.js`,
                        `${PATHS.LIBRARIES.THEMES_STYLES}/js/themes-styles.js`,
                    ],
                },
            },
        },
        concat_css: {
            main: {
                files: {
                    [`${CSS_BUILDS}/bootstrap-bundle.css`]: [
                        `${PATHS.LIBRARIES.BOOTSTRAP4}/css/bootstrap-bundle.css`,
                        `${PATHS.LIBRARIES.THEMES_BOOTSTRAP}/css/themes-bootstrap.css`,
                        `${PATHS.LIBRARIES.THEMES_COMPONENTS}/css/themes-components.css`,
                        `${PATHS.LIBRARIES.THEMES_STYLES}/css/themes-styles.css`,
                    ],
                },
            }
        },
    },
};