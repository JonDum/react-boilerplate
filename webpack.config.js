
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
		publicPath: '/',
		path: path.join(__dirname, 'build'),
		filename: 'assets/js/entry.js',
		chunkFilename: 'assets/js/chunk.[name].js',
	},

	resolve: {
		extensions: ['.js', '.styl', '.html'],
		modules: ['src', 'node_modules'],
		alias: {
			forcejs: 'lib/forcejs/index.js',
			//'react': 'inferno-compat',
			//'react-dom': 'inferno-compat'
		}
	},

	module: {
		loaders
	},

	devtool: 'cheap-module-source-map',

	devServer: {
		contentBase: "./public",
		noInfo: true,
		hot: true,
		inline: true,
		historyApiFallback: true,
		proxy: {
			'/services/data': {
				target: "https://raprec.my.salesforce.com",
				changeorigin: true,
				secure: false,
			},
			'/services/apexrest': {
				target: "https://raprec.my.salesforce.com",
				changeorigin: true,
				secure: false,
			}
		}
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
