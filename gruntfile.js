
module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		cucumberjs: {
			src: 'features',
			options: {
				steps: 'features/step-definitions'
			}
		}
	});

	grunt.loadNpmTasks('grunt-cucumberjs');
	grunt.registerTask('test', ['cucumberjs']);
};
