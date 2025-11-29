// bootstrap4-grunt.js

const { BundleBootstrap4Sass } = require('../sass/bundle-bootstrap4-sass');
const { spawnSync } = require('node:child_process');

const COMMAND = 'bundle-bootstrap4';

/** @param {import("grunt")} grunt */
module.exports.BundleBootstrap4Grunt = function (grunt) {

    grunt.task.registerTask(`${COMMAND}:fresh`, 'Clean + Build fresh', function () {
        spawnSync('grunt', [`bootstrap4:fresh`], { stdio: 'inherit' })
        spawnSync('grunt', [`themes_bootstrap:fresh`], { stdio: 'inherit' })
        spawnSync('grunt', [`themes_styles:fresh`], { stdio: 'inherit' })
        spawnSync('grunt', [`themes_components:fresh`], { stdio: 'inherit' })
        spawnSync('grunt', [`${COMMAND}:build`], { stdio: 'inherit' })
    });

    grunt.task.registerTask(`${COMMAND}`, 'Default Bootstrap task', [
        `${COMMAND}:build`
    ]);

    grunt.task.registerTask(`${COMMAND}:build`, 'Development', function () {
        const build = BundleBootstrap4Sass.builds
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            concat: build.concat,
            concat_css: build.concat_css,
            copy: build.copy,
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
        grunt.task.run(['concat_css', 'concat', 'copy'])
    });
};