var fs = require('fs');
var path = require('path');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copyright: '/*! <%= filename %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n*Author: <%= pkg.author.name %>\n* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.company %>; */\n',
        clean: {
            fonts: ["fonts/**/*.*"]
        },
        webfont: {
            icons: {
                src: 'icons/*.svg',
                dest: 'fonts',
                options: {
                    font: 'Bullhorn-Glyphicons',
                    fontFilename: 'Bullhorn-Glyphicons',
                    syntax: 'bootstrap',
                    engine: 'node',
                    normalize: true,
                    //rounding: 0,
                    //descent: 256,
                    htmlDemoTemplate: 'templates/demo.html',
                    templateOptions: {
                        classPrefix: 'bhi-'
                    },
                    rename: function(name) {
                        return path.basename(name).replace('bhi_', '');
                    }
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'webfont']);
    
    return grunt;
};
