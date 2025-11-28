const path = require("path");

if (typeof process.env?.BOOTSTRAP4_BUNDLE_BASEPATH !== 'string') {
    throw new Error('Env BOOTSTRAP4_BUNDLE_BASEPATH is not defined');
}

if (typeof process.env?.BOOTSTRAP4_BUNDLE_LIBS_BASEPATH !== 'string') {
    throw new Error('Env BOOTSTRAP4_BUNDLE_LIBS_BASEPATH is not defined');
}

const BASEPATH = process.env.BOOTSTRAP4_BUNDLE_BASEPATH;
const NODE = path.join(BASEPATH, 'node_modules');
const LIBS = process.env.BOOTSTRAP4_BUNDLE_LIBS_BASEPATH
const ASSETS = path.join(BASEPATH, 'assets');
const BOOTSTRAP4 = path.join(ASSETS, 'bootstrap4');

module.exports.Paths = {
    Basepath: BASEPATH,
    DIST: {
        CSS: path.join(BASEPATH, 'dist', 'css'),
        JS: path.join(BASEPATH, 'dist', 'js')
    },
    BUILDS: {
        CSS: path.join(BASEPATH, 'builds', 'css'),
        JS: path.join(BASEPATH, 'builds', 'js')
    },
    ASSETS: {
        BASEPATH: ASSETS,
        DIST: {
            CSS: path.join(ASSETS, 'dist', 'css'),
            JS: path.join(ASSETS, 'dist', 'js')
        },
        BUILDS: {
            CSS: path.join(ASSETS, 'builds', 'css'),
            JS: path.join(ASSETS, 'builds', 'js')
        },
        BOOTSTRAP4: {
            BASEPATH: BOOTSTRAP4,
            DIST: {
                CSS: path.join(BOOTSTRAP4, 'dist', 'css'),
                JS: path.join(BOOTSTRAP4, 'dist', 'js')
            },
            BUILDS: {
                CSS: path.join(BOOTSTRAP4, 'builds', 'css'),
                JS: path.join(BOOTSTRAP4, 'builds', 'js')
            },
        },
        THEMES_STYLES: {
            BASEPATH: path.join(ASSETS, 'themes-styles'),
            DIST: {
                CSS: path.join(ASSETS, 'themes-styles', 'dist', 'css'),
                JS: path.join(ASSETS, 'themes-styles', 'dist', 'js')
            },
            BUILDS: {
                CSS: path.join(ASSETS, 'themes-styles', 'builds', 'css'),
                JS: path.join(ASSETS, 'themes-styles', 'builds', 'js')
            },
        },

        THEMES_BOOTSTRAP: {
            BASEPATH: path.join(ASSETS, 'themes-bootstrap'),
            DIST: {
                CSS: path.join(ASSETS, 'themes-bootstrap', 'dist', 'css'),
                JS: path.join(ASSETS, 'themes-bootstrap', 'dist', 'js')
            },
            BUILDS: {
                CSS: path.join(ASSETS, 'themes-bootstrap', 'builds', 'css'),
                JS: path.join(ASSETS, 'themes-bootstrap', 'builds', 'js')
            },
        },
        THEMES_COMPONENTS: {
            BASEPATH: path.join(ASSETS, 'themes-components'),
            DIST: {
                CSS: path.join(ASSETS, 'themes-components', 'dist', 'css'),
                JS: path.join(ASSETS, 'themes-components', 'dist', 'js')
            },
            BUILDS: {
                CSS: path.join(ASSETS, 'themes-components', 'builds', 'css'),
                JS: path.join(ASSETS, 'themes-components', 'builds', 'js')
            },
        },
    },
    LIBRARIES: {
        BOOTSTRAP: path.join(NODE, 'bootstrap'),
        EONASDAN: path.join(NODE, '@eonasdan'),
        INFINITE_SCROLL: path.join(NODE, 'infinite-scroll'),
        OWL_CAROUSEL: path.join(NODE, 'owl.carousel'),
        SELECT2: path.join(NODE, 'select2'),
        TYPEAHEAD: path.join(NODE, 'typeahead.js'),
        POPPERJS: path.join(NODE, '@popperjs'),
        BS5_LIGHTBOX: path.join(NODE, 'bs5-lightbox'),
        EASYTIMER: path.join(NODE, 'easytimer.js'),
        JQUERY: path.join(NODE, 'jquery'),
        MOMENT: path.join(NODE, 'moment'),
        POPPER: path.join(NODE, 'popper.js'),
        CLIPBOARD: path.join(NODE, 'clipboard'),
        HANDLEBARS: path.join(NODE, 'handlebars'),
        LIGHTBOX2: path.join(NODE, 'lightbox2'),
        THEMES_STYLES: path.join(LIBS, 'themes-styles'),
        THEMES_BOOTSTRAP: path.join(LIBS, 'themes-bootstrap'),
        THEMES_COMPONENTS: path.join(LIBS, 'themes-components'),
    }
}
