'use strict';

const path = require('node:path');
const { Paths } = require('../config/paths');
const { AssetsPaths } = require('../config/assets-paths');

const BASEPATH = Paths.LIBRARIES.THEMES_STYLES;
const DIST_STYLES = AssetsPaths.THEMES_STYLES.DIST;
const BUILDS_STYLES = AssetsPaths.THEMES_STYLES.BUILDS;

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
        FONT: path.join(BASEPATH, 'font'),
        ANIMATE: path.join(BASEPATH, 'animate'),
        ELEVATION: path.join(BASEPATH, 'elevation'),
        UTILITIES: path.join(BASEPATH, 'utilities'),
        TYPOGRAPHY: path.join(BASEPATH, 'typography'),
        MATERIAL_ICONS: path.join(BASEPATH, 'material-icons'),
        GUTTERS: path.join(BASEPATH, 'gutters')
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
            [`${DIST_STYLES.CSS}/font.css`]: `${PATHS.LIBRARIES.FONT}/src/scss/font.scss`,
            [`${DIST_STYLES.CSS}/animate.css`]: `${PATHS.LIBRARIES.ANIMATE}/src/scss/animate.scss`,
            [`${DIST_STYLES.CSS}/elevation.css`]: `${PATHS.LIBRARIES.ELEVATION}/src/scss/elevation.scss`,
            [`${DIST_STYLES.CSS}/utilities.css`]: `${PATHS.LIBRARIES.UTILITIES}/src/scss/utilities.scss`,
            [`${DIST_STYLES.CSS}/typography.css`]: `${PATHS.LIBRARIES.TYPOGRAPHY}/src/scss/typography.scss`,
            [`${DIST_STYLES.CSS}/material-icons.css`]: `${PATHS.LIBRARIES.MATERIAL_ICONS}/src/scss/material-icons.scss`,
            [`${DIST_STYLES.CSS}/gutters.css`]: `${PATHS.LIBRARIES.GUTTERS}/src/scss/gutters.scss`
        }
    }
};

// Builds Configuration
const buildsConfig = {
    js: Object.keys({}),
    css: Object.keys(sass.dist.files)
};

const watch = {
    css: [
        `${BASEPATH}/*/src/scss/*.scss`,
        `${BASEPATH}/*/src/scss/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*.scss`,
        `${BASEPATH}/*/src/scss/*/*/*/*/*.scss`,
    ]
}

module.exports.ThemesStyleSass = {
    basepath: AssetsPaths.THEMES_STYLES.BASEPATH,
    sass: sass,
    builds: {
        concat_css: {
            main: {
                files: {
                    [`${BUILDS_STYLES.CSS}/themes-styles.css`]: buildsConfig.css
                },
            }
        },
    },
    watch: watch
};