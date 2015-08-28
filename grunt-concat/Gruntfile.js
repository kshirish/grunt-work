module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          footer: '\n/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'

      },
      css: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
          footer: '\n/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        src: ['stylesheets/**/*.css'],
        dest: 'dist/<%= pkg.name %>.css'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');

  // Run task as -
  // grunt concat
  // grunt concat:js
  // grunt concat:css

};