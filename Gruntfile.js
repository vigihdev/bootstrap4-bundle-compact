'use strict';
// Gruntfile.js
const DotEnv = require('./dotenv').DotEnv;
DotEnv.boot();

const { Bootstrap4Grunt, ThemesStylesGrunt, ThemesBootstrapGrunt, ThemesComponentsGrunt, BundleBootstrap4Grunt } = require('./index')

/** @param {import("grunt")} grunt */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-strip-css-comments');

    Bootstrap4Grunt(grunt);
    ThemesStylesGrunt(grunt);
    ThemesBootstrapGrunt(grunt);
    ThemesComponentsGrunt(grunt);
    BundleBootstrap4Grunt(grunt);

    grunt.registerTask(`bootstrap4:test`, 'Test Grunt', function () {
        grunt.log.ok(`cwd : ${__dirname}`);
    })

};
