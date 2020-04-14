const webpack = require('webpack')

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/preset-react',
						[
							'@babel/preset-env',
							{
								targets: {
									browsers: ['last 2 versions'],
								},
							},
						],
					],
					plugins: ['@babel/plugin-transform-runtime'],
				},
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
}
