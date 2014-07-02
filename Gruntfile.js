/*jslint node: true, white: true, indent: 2 */

"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
        'Gruntfile.js',
        'lib/**/*.js',
        'migrations/**/*.js',
        'public/js/script.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      jshint : {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', 'test');
};