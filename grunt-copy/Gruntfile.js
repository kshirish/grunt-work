module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			dev: {
				expand: true,
				src: [
					'src/**'	// includes files within path and its sub-directories 
				],
				dest: 'dist/<%= pkg.name %>/'				
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

	// Run task as -
	// grunt copy:dev

};