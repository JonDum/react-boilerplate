
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config.js');

config.output = {
	publicPath: './',
	path: path.join(__dirname, 'build'),
	filename: 'js/[chunkhash].js'
};

config.plugins = [
	new WebpackCleanupPlugin(),
	new webpack.DefinePlugin({
		DEBUG: false,
		PRODUCTION: true,
		'process.env': {
			NODE_ENV: '"production"'
		},
	}),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			screw_ie8: true,
			drop_console: true,
			drop_debugger: true
		}
	}),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new ExtractTextPlugin({
		filename: 'style.css',
		allChunks: true
	}),
	new HtmlWebpackPlugin({
		template: './src/template.html',
		files: {
			css: ['style.css'],
			js: ['bundle.js'],
		}
	})
]

module.exports = config;
