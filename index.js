const { Paths } = require('./src/config/paths')
const { Bootstrap4Grunt } = require('./src/grunt/bootstrap4-grunt')
const { ThemesStylesGrunt } = require('./src/grunt/themes-styles-grunt')
const { ThemesBootstrapGrunt } = require('./src/grunt/themes-bootstrap-grunt')
const { ThemesComponentsGrunt } = require('./src/grunt/themes-components-grunt')
const { BundleBootstrap4Grunt } = require('./src/grunt/bundle-bootstrap4-grunt')

module.exports = {
    Paths,
    Bootstrap4Grunt,
    ThemesStylesGrunt,
    ThemesBootstrapGrunt,
    ThemesComponentsGrunt,
    BundleBootstrap4Grunt
}