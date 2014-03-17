module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// Task: Lint all JS files
		jshint: {
			files: ['static/js/**/*.js'],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Task: Compile LESS to CSS
		less: {
			compile: {
				files: {
					'static/css/resorted-style.css': 'static/css/_style.less'
				}
			}
		},

		// Task: Comb CSS
		csscomb: {
			dist: {
				options: {
					config: '.csscomb'
				},
				files: {
					'static/css/style.css': 'static/css/resorted-style.css'
				}
			}
		},

		// Task: Lint CSS
		csslint: {
			strict: {
				options: {
			    csslintrc: '.csslintrc'
			  },
				src: ['static/css/style.css']
			}
		},

		// Task: Watch
		watch: {
			jshint: {
				files: ['static/js/**/*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			less: {
				files: ['static/css/*.less'],
				tasks: ['less']
			},
			csscomb: {
				files: ['static/css/resorted-style.css'],
				tasks: ['csscomb']
			},
			csslint: {
				files: ['static/css/style.css'],
				tasks: ['csslint'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['**/*.jade'],
				options: {
					livereload: true
				}
			}
		}

	});

	// Load the plugin for watch
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load the plugin for JSHint
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Load the plugin for HTML lint
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Load the plugin for CSS Comb
	grunt.loadNpmTasks('grunt-csscomb');

	// Load the plugin for LESS
	grunt.loadNpmTasks('grunt-contrib-less');

	 // Load the plugin for RequireJS
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Default task(s)
	grunt.registerTask('default', ['jshint']);
};