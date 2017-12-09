const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle-[hash].js'
	},

	devtool: 'eval-source-map',

	devServer: {
		contentBase: '/public',
		historyApiFallback: true,
		inline: true,
		hot: true
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /(\.css)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					{
						loader: 'postcss-loader'
					}
				]
			}
		]
	},

	plugins: [
		new webpack.BannerPlugin('--- Created by Cici Hu at 2017.12.06 20:30:00. ---'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
	]
};