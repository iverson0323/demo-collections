const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	devtool: 'eval-source-map',						// 调试工具
	
	entry: __dirname + '/app/main.js',				// 唯一的入口文件
	output: {	
		path: __dirname + '/build',					// 打包之后的文件存放位置
		filename: 'bundle.js'						// 打包之后的文件名
	},

	devServer: {
		contentBase: './public',					// 本地服务器所加载的页面所在目录
		port: 8888,									// 监听端口号
		historyApiFallback: false,					// 不重定向跳转
		inline: true								// 实时刷新
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/				// 屏蔽不需要处理的文件
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
							modules: false			// true/false的区别
						}
					},
					{
						loader: 'postcss-loader'
					}
				],
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new webpack.BannerPlugin('--- Created by Cici Hu at 2017.12.06 20:30:00. ---'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'	
		})
	]

	// __dirname是nodejs中的一个全局变量，指向当前执行脚本所在的目录
};