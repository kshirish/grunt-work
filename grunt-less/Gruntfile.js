module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			dist: {
				options: {
					cleancss: true,
					compress: false	// make it `true` to compress the resulted css
				},
				expand: false,
				src: 'style.less',
				dest: 'style.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	// Run task as -
	// grunt less
	// grunt less:dist
};