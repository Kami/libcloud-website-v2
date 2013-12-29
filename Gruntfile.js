/* jshint node: true */

module.exports = function(grunt) {
  'use strict';

  // load all grunt tasks
  require('load-grunt-tasks')(grunt, {'scope': 'devDependencies'});

  // Project configuration.
  grunt.initConfig({
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: [
        'source/_assets/css/*.css',
      ]
    },
  });

  grunt.registerTask('lint', ['csslint']);

  grunt.registerTask('default', ['csslint']);
};
