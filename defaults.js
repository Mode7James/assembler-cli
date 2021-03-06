/* jshint node: true */

var merge = require('merge');


var defaults = {
	minify: true,
	beautify: true,
	server: {
		host: 'localhost',
		port: '4200',
		open:false,
		https: false,
		log: 'info',
		clientConsole: false,
		directoryListing: false,
		defaultFile: 'index.html',
		liveReload: {
			enable: true,
			port:'3737'
		},
	},
	paths : {
		app: 'app',
		dist: 'dist',
		temp: '.tmp',
		scripts: 'scripts',
		styles: 'styles',
		assets: 'assets',
		public: 'public',
		bower: 'bower_components',
		vendor: 'vendor',
		include: []
	},
	scripts : {
		keepBuildDir: true,
		waitSeconds: 0,
		paths: {},
		shim: {},
		primaryModule: 'app'
	},
	styles : {

	},
	images : {

	},
	vendorFiles: {
		
	},
	imports: []
};

var config = {
	environment: 'development',
	production: merge.recursive(true, defaults, {
		// default prod configs here
		minify: true,
		beautify: true,
		server:{
			liveReload:false,
		},
		// outputPath: 'dist'
	}),
	development : merge.recursive(true, defaults, {
		minify: false,
		beautify: false,
		// outputPath: 'dist'
	}),
	test : merge.recursive(true, defaults, {
		// default test configs here
	})
};

module.exports = config;

