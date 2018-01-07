const webpack = require('webpack')
const path = require('path')

const localIdentName = process.env.NODE_ENV ? '[hash:base64]' : '[name]__[local]--[hash:base64:5]'

module.exports = {
	entry: './src/main',
	devtool: process.env.NODE_ENV ? 'nosources-source-map' : 'source-map',
	output: {
		// filename: process.env.NODE_ENV ? '[chunkhash].[name].js' : '[name].js',
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react'],
							plugins: [
								'react-html-attrs',
								['transform-object-rest-spread', { useBuiltIns: true }],
								[
									'react-css-modules',
									{
										webpackHotModuleReloading: true,
										generateScopedName: localIdentName,
										exclude: 'node_modules'
									}
								]
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			env: {
				live: !!process.env.NODE_ENV,
				api: JSON.stringify(process.env.NODE_ENV ? 'https://www.domain.com/api' : 'http://localhost:5000')
			}
		})
		// new webpack.optimize.CommonsChunkPlugin({ names: ['commons', 'manifest'] }),
	]
}
