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
const NODE = path.resolve(process.env.PWD, process.env.NODE_MODULES_BS4BUNDLE);
const ASSETS = path.resolve(process.env.PWD, process.env.ASSETS_BS4BUNDLE)

module.exports.Paths = {
    Basepath: BASEPATH,
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
        THEMES_STYLES: path.join(ASSETS, 'themes-styles'),
        THEMES_BOOTSTRAP: path.join(ASSETS, 'themes-bootstrap'),
        THEMES_COMPONENTS: path.join(ASSETS, 'themes-components'),
    }
}
