'use strict';
// bootstrap4-grunt.js

const { BundleBootstrap4Sass } = require('../sass/bundle-bootstrap4-sass')

const COMMAND = 'bundle-bootstrap4';

/** @param {import("grunt")} grunt */
module.exports.BundleBootstrap4Grunt = function (grunt) {

    grunt.task.registerTask(`${COMMAND}:fresh`, 'Clean + Build fresh', [
        `bootstrap4:clean`,
        `bootstrap4:dist`,
        `bootstrap4:build`,
        //
        `themes_bootstrap:clean`,
        `themes_bootstrap:dist`,
        `themes_bootstrap:build`,
        //
        `themes_styles:clean`,
        `themes_styles:dist`,
        `themes_styles:build`,
        //
        `themes_components:clean`,
        `themes_components:dist`,
        `themes_components:build`,
        `${COMMAND}:build`
    ]);

    grunt.task.registerTask(`${COMMAND}`, 'Default Bootstrap task', [
        `${COMMAND}:build`
    ]);

    grunt.task.registerTask(`${COMMAND}:build`, 'Development', function () {
        const build = BundleBootstrap4Sass.builds
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            concat: build.concat,
            concat_css: build.concat_css,
        }
        grunt.initConfig(initConfig)
        if (args.length > 0) {
            Object.keys(initConfig).forEach(k => {
                if (args.includes(k)) {
                    grunt.task.run([k])
                }
            })
            return;
        }
        grunt.task.run(['concat_css', 'concat'])
    });
};