module.exports = function(grunt) {

	grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),
			jshint: {
				options: {
					jshintrc: '.jshintrc'
				},
				all: [
					'src/booking/*.js',
					'!src/vendor/*.js'
				]
			}
	});


	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('validatejs', 'Validating js changes ..', ['jshint']);

};