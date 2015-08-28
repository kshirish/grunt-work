module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		githooks: {
			all: {
				'pre-commit': 'jshint',
			}
		}
	});

	grunt.loadNpmTasks('grunt-githooks');

	// Run task as -
	// grunt githooks

};