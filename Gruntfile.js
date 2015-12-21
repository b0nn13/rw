(function (){
    'use strict';

    module.exports = function (grunt) {

        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({

            jshint: {
                options: {
                    jshintrc: true
                },
                app: ['app/**/*.js']
            },

            copy: {
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['app/**'],
                            dest: 'build/'
                        }
                    ]
                }
            },

            concat: {
                options: {
                  nonull: true
                },
                appJs: {
                    src: [
                        'build/app/**/*.js',
                        '!build/app/**/*-controller.js'
                    ],
                    dest: 'build/app.js'
                },
                appCss: {
                    src: [
                        'build/app/**/*.css',
                    ],
                    dest: 'build/app.css'
                }
            },

            clean: {
                app: {
                    src: 'build'
                }
            },
            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                app: {
                    files: [
                        {
                            expand: true,
                            src: ['build/**/*.js']
                        }
                    ]
                }
            },
            clean: {
                app: {
                    src: 'build'
                }
            }
        });


        grunt.registerTask( 'build', [
                'clean',
                'copy',
                'ngAnnotate',
                'concat'
            ]
        );

    };

})();
