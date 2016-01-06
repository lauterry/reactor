var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtools: 'eval',
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/app.jsx')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [{
			test: /\.jsx/,
			loaders: ['react-hot', 'babel']
		}, {
			test: /\.scss/,
			loader: 'style!css!sass'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		}, {
			test: /\.woff|eot|svg|ttf|woff2$/,
			loader: 'url?limit=100000'
		}]
	},
	devServer: {
		contentBase: 'build',
		stats: { colors: true },
		hot: true,
		proxy: [
			{
				path: /\/server(.*)/, 					// change it
				target: "http://localhost:3000/"		// change it
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
