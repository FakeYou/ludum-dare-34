'use strict';

var webpack    = require('webpack');
var path       = require('path');

var srcPath    = path.join(__dirname, 'src');
var buildPath  = path.join(__dirname, 'build');

var fileName = '[name]-[hash:7].[ext]';

module.exports = {
	target: 'web',
	cache: true,
	entry: [
		'./src/app.js',
	],
	exclude: [
		'node_modules'
	],
	resolve: {
		root: srcPath,
		extensions: ['', '.js', '.scss', '.css'],
		modulesDirections: ['node_modules']
	},
	output: {
		path: buildPath,
		filename: 'app.js'
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loader: 'babel?cacheDirectory'},
			{ test: /pixi.js/, loader: 'script' },
			{ test: /phaser.js/, loader: 'script' },
			{ test: /\.scss$/, loader: 'style!css?root=..!sass!autoprefixer' },
			{ test: /\.css$/, loader: 'style!css?root=..!autoprefixer' },
			{ test: /\.(png|gif|jpg|mp4)$/, loader: 'file-loader', query: { name: fileName } },
			{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader', query: { root: '..', name: fileName }}
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	debug: true,
	watchOptions: {
		poll: true
	},
};