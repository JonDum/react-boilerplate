
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: [
		'react-hot-loader/patch',
		'./src/main.js',
	],

	output: {
		publicPath: 'js/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.styl', '.html'],
		modules: ['src/app', 'src', 'node_modules'],
	},

	module: {
		loaders
	},

	devtool: 'eval-source-map',

	devServer: {
		contentBase: "./public",
		noInfo: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			DEBUG: true,
			PRODUCTION: false,
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			files: {
				css: ['style.css'],
				js: ['bundle.js'],
			}
		}),
  ]
};
