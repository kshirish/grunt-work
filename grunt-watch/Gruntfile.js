module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['some-js-task'], 			// can be jshint
				options: {
					spawn: false,
				},
			},
			less: {
				files: ['stylesheets/**/*.less'],
				tasks: ['some-less-task'], 			// can be less
				options: {
					spawn: false,
				},
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('some-js-task', 'I will do it once JS changes', function() {
		grunt.log.write('jshint successfull.').ok();
	});

	grunt.registerTask('some-less-task', 'I will do it once LESS changes', function() {
		grunt.log.write('Less to css successfull.').ok();
	});

	// Run task as -
	// grunt watch
	// grunt watch:js
	// grunt watch:less
};