const path = require('path')
const config = require('./webpack.base')
const merge = require('webpack-merge')

function resolve(file) {
	return path.resolve(__dirname, '../src', file)
}

module.exports = merge(config, {
	mode: 'development',
	entry: resolve('client/index.js'),
	output: {
		filename: 'index.js',
		path: resolve('../public'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
})
