var dotenv = require('dotenv').load(),
	gulp = require('gulp'),
	G = require('gulp-load-plugins')(),
	livereload = require('gulp-livereload'),
	envify = require('envify');

var src = {
	html: [
		'**/*.{html|htm}',
		'!dist/**/*.{html|htm}'
	],
	templates: [
		'assets/templates/**/*.hbs'
	],
	js: [
		'assets/js/**/*.js',
		'!assets/js/build/*.js',
		'assets/data/**/*.json'
	]
};

gulp.task('jshint', function(){
	return gulp.src(src.js)
		.pipe(G.jshint())
		.pipe(G.jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', ['jshint'], function(){
	return gulp.src('assets/js/index.js')
		.pipe(G.browserify({
			insertGlobals : false,
			debug : true,
			transform: 'envify'
		}))
		.pipe(G.rename('build-dev.js'))
		.pipe(gulp.dest('assets/js/build/'));
});

gulp.task('templates', function(){
	return gulp.src(src.templates)
		.pipe(G.emberHandlebars({
			outputType: 'browser'
		}))
		.pipe(G.concat('templates.js'))
		.pipe(gulp.dest('assets/js/build/'));
});

gulp.task('watch', function(  ) {

	gulp.watch(src.templates, ['templates']);
	gulp.watch(src.js, ['browserify']);

	src.all = [];
	src.all.push(src.js, src.templates, src.html);

	G.livereload.listen();
	gulp.watch( src.all ).on('change', G.livereload.changed);
});

gulp.task('build', ['browserify', 'templates']);
gulp.task('default', ['build', 'watch']);
