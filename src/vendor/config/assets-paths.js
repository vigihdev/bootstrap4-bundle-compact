const path = require("path");

const envs = [
    process.env?.BASEPATH_BS4BUNDLE,
    process.env?.NODE_MODULES_BS4BUNDLE,
    process.env?.ASSETS_BS4BUNDLE,
];

envs.forEach(env => {
    if (typeof env !== 'string') {
        throw new Error(`Env ${env} is not defined`);
    }
});

const BASEPATH = path.resolve(process.env.PWD, process.env.BASEPATH_BS4BUNDLE);
const ASSETS_BASEPATH = path.join(BASEPATH, 'assets')
const BOOTSTRAP4 = path.join(ASSETS_BASEPATH, 'bootstrap4')
const THEMES_STYLES = path.join(ASSETS_BASEPATH, 'themes-styles')
const THEMES_BOOTSTRAP = path.join(ASSETS_BASEPATH, 'themes-bootstrap')
const THEMES_COMPONENTS = path.join(ASSETS_BASEPATH, 'themes-components')

module.exports.AssetsPaths = {
    BASEPATH: ASSETS_BASEPATH,
    DIST: {
        CSS: path.join(ASSETS_BASEPATH, 'dist', 'css'),
        JS: path.join(ASSETS_BASEPATH, 'dist', 'js')
    },
    BUILDS: {
        CSS: path.join(ASSETS_BASEPATH, 'builds', 'css'),
        JS: path.join(ASSETS_BASEPATH, 'builds', 'js')
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
        BASEPATH: THEMES_STYLES,
        DIST: {
            CSS: path.join(THEMES_STYLES, 'dist', 'css'),
            JS: path.join(THEMES_STYLES, 'dist', 'js')
        },
        BUILDS: {
            CSS: path.join(THEMES_STYLES, 'builds', 'css'),
            JS: path.join(THEMES_STYLES, 'builds', 'js')
        },
    },

    THEMES_BOOTSTRAP: {
        BASEPATH: THEMES_BOOTSTRAP,
        DIST: {
            CSS: path.join(THEMES_BOOTSTRAP, 'dist', 'css'),
            JS: path.join(THEMES_BOOTSTRAP, 'dist', 'js')
        },
        BUILDS: {
            CSS: path.join(THEMES_BOOTSTRAP, 'builds', 'css'),
            JS: path.join(THEMES_BOOTSTRAP, 'builds', 'js')
        },
    },
    THEMES_COMPONENTS: {
        BASEPATH: THEMES_COMPONENTS,
        DIST: {
            CSS: path.join(THEMES_COMPONENTS, 'dist', 'css'),
            JS: path.join(THEMES_COMPONENTS, 'dist', 'js')
        },
        BUILDS: {
            CSS: path.join(THEMES_COMPONENTS, 'builds', 'css'),
            JS: path.join(THEMES_COMPONENTS, 'builds', 'js')
        },
    }
}
