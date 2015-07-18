module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
    'browserify',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
