module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        transport: {
            options: {
                alias: '<%= pkg.spm.alias %>'
            },
            main: {
                options: {
                    idleading: 'src/'
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: '_build/'
                }]
            }
        },
        concat: {
            main: {
                options: {
                    include: 'relative'
                },
                files: [{
                    expand: true,
                    cwd: '_build/',
                    src: ['**/*.js'],
                    dest: 'sea-modules/src/',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            main: {
                expand: true,
                cwd: 'sea-modules/src',
                src: ['**/*.js', '!**/*-debug.js'],
                dest: 'sea-modules/src'
            }
        },
        clean: {
            "beforeBuild":['sea-modules/src'],
            "build":['_build','sea-modules/src/**/*-debug.js']
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean:beforeBuild','transport','concat', 'uglify', 'clean:build']);
};