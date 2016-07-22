var webpack = require('webpack');
var path = require("path");

var static_path = './static_in_pro/our_static/'
var entry = {
	app: ['babel-polyfill', static_path + 'app/js/index.js']
}

prodConfig = {
	devtool: 'source-map',
	entry: entry,
	output: {
		path: path.join(__dirname = static_path, "dist"),
    filename: "[name].entry.js"
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
        'BABEL_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.scss']
    }
}

module.exports = prodConfig
