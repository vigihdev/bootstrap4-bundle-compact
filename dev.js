require('dotenv').populate(process.env, { BOOTSTRAP4_BUNDLE_BASEPATH: __dirname });
const { Paths } = require('./src/config/paths');
console.log(Paths)