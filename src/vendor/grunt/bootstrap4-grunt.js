'use strict';
// bootstrap4-grunt.js

const fs = require('node:fs')
const path = require('node:path')
const { Bootstrap4Sass } = require('../sass/bootstrap4-sass');
const { spawnSync } = require('node:child_process');

const COMMAND = 'bootstrap4';

/** @param {import("grunt")} grunt */
module.exports.Bootstrap4Grunt = function (grunt) {

    grunt.task.registerTask(`${COMMAND}:clean`, `${COMMAND} Development`, function () {
        const builds = path.join(Bootstrap4Sass.basepath, 'builds')
        if (fs.existsSync(builds)) {
            try {
                fs.rmSync(builds, { recursive: true, force: true })
                grunt.log.ok(`Success remove ${builds}`)
            } catch (error) {
                grunt.log.error(`Gagal remove ${builds}`)
                process.exit(1);
            }
        }

        const dist = path.join(Bootstrap4Sass.basepath, 'dist')
        if (fs.existsSync(dist)) {
            try {
                fs.rmSync(dist, { recursive: true, force: true })
                grunt.log.ok(`Success remove ${dist}`)
            } catch (error) {
                grunt.log.error(`Gagal remove ${dist}`)
                process.exit(1);
            }
        }
    });

    grunt.task.registerTask(`${COMMAND}:dist`, 'Development', function () {
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            sass: Bootstrap4Sass.sass,
            concat: Bootstrap4Sass.concat,
            copy: Bootstrap4Sass.copy,
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

        grunt.task.run(['sass', 'concat', 'copy'])
    });

    grunt.task.registerTask(`${COMMAND}:build`, 'Development', function () {
        const build = Bootstrap4Sass.builds
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            concat: build.concat,
            concat_css: build.concat_css,
            stripCssComments: build.stripCssComments,
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
        grunt.task.run(['concat_css', 'concat', 'copy', 'stripCssComments'])
    });

    grunt.task.registerTask(`${COMMAND}:fresh`, 'Clean + Build fresh', function () {
        spawnSync('grunt', [`${COMMAND}:clean`], { stdio: 'inherit' })
        spawnSync('grunt', [`${COMMAND}:dist`], { stdio: 'inherit' })
        spawnSync('grunt', [`${COMMAND}:build`], { stdio: 'inherit' })
    });

    grunt.task.registerTask(`${COMMAND}`, 'Default Bootstrap task', function () {
        grunt.task.run(`${COMMAND}:build`);
    });

    grunt.task.registerTask(`${COMMAND}:watch`, 'Development Watch', function () {
        const args = grunt?.task?.current?.args ?? [];
        const initConfig = {
            watch: {
                css: {
                    files: Bootstrap4Sass.watch.css,
                    tasks: [`${COMMAND}:dist`]
                },
                js: {
                    files: Bootstrap4Sass.watch.js,
                    tasks: [`${COMMAND}:dist:concat`]
                }
            }
        }

        grunt.initConfig(initConfig)
        grunt.task.run(['watch'])
    });

};