module.exports = function(grunt) {

    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'styles.css': 'styles.scss',       
            //'widgets.css': 'widgets.scss'
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    // Run task as
    // grunt sass
};