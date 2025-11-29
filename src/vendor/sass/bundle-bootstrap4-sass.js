'use strict';

const path = require('node:path');
const { Paths } = require('../config/paths');
const { AssetsPaths } = require('../config/assets-paths');

const BASEPATH = AssetsPaths.BASEPATH;
const JS_BUILDS = AssetsPaths.BUILDS.JS;
const CSS_BUILDS = AssetsPaths.BUILDS.CSS;

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
        BOOTSTRAP4: path.join(AssetsPaths.BOOTSTRAP4.BASEPATH, 'builds'),
        THEMES_STYLES: path.join(AssetsPaths.THEMES_STYLES.BASEPATH, 'builds'),
        THEMES_BOOTSTRAP: path.join(AssetsPaths.THEMES_BOOTSTRAP.BASEPATH, 'builds'),
        THEMES_COMPONENTS: path.join(AssetsPaths.THEMES_COMPONENTS.BASEPATH, 'builds'),
    }
};

module.exports.BundleBootstrap4Sass = {
    basepath: AssetsPaths.BASEPATH,
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

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: `${PATHS.LIBRARIES.BOOTSTRAP4}/js`,
                        src: ['jquery.min.js'],
                        dest: JS_BUILDS
                    }
                ]
            }
        }
    },
};