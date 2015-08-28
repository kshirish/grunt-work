module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.main %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				mangle: {	// mangle all the variable and function names except below ones
					except: ['jQuery', 'Backbone']
				},
				compress: {
					join_vars     : true,  // join var declarations
					drop_console  : true,  // remove console.* 				
					properties    : true,  // optimize property access: a["foo"] → a.foo
					dead_code     : true,  // discard unreachable code
					drop_debugger : true,  // discard “debugger” statements
					unsafe        : false, // some unsafe optimizations (see below)
					conditionals  : true,  // optimize if-s and conditional expressions
					unused        : true,  // drop unused variables/functions
					hoist_funs    : true,  // hoist function declarations
					hoist_vars    : false, // hoist variable declarations
					if_return     : true  // optimize if-s followed by return/continue					
				}
			},
			build: {
				src: 'src/**/*.js',
				dest: 'dist/script.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Run task as -
	// grunt uglify
	// grunt uglify:build

};