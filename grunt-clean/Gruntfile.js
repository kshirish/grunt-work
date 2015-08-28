module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			options: {
				force: true
			},
			js: ["src"]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

	// Run task as -
	// grunt clean

};