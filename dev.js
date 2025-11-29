const path = require('node:path');
const dotenv = require('dotenv');

dotenv.populate(process.env, {
    BASEPATH_BS4BUNDLE: '.',
    NODE_MODULES_BS4BUNDLE: 'node_modules',
    ASSETS_BS4BUNDLE: 'src/assets'
});

// console.log([
//     path.resolve(process.env.BASEPATH_BS4BUNDLE),
//     path.resolve(process.env.NODE_MODULES_BS4BUNDLE),
//     path.resolve(process.env.ASSETS_BS4BUNDLE),
// ].join("\n"));

const { Paths } = require('./src/vendor/config/paths');

// console.log([
//     Paths.LIBRARIES.THEMES_BOOTSTRAP
// ].join("\n"));


// console.log(Paths);