var webpack = require('webpack');
var path = require("path");

var static_path = './static_in_pro/our_static/'
var entry = {
	app: ['babel-polyfill', static_path + 'app/js/index.js']
}

if(process.env.__dev__ !== '1'){
	var definePlugin = new webpack.DefinePlugin({
		'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	});
}else{
	var definePlugin = new webpack.DefinePlugin({
	});
}


devConfig = {
	entry: entry,
	output: {
		path: path.join(__dirname = static_path, "dist"),
    filename: "[name].entry.js"
	},
	plugins: [definePlugin],
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

module.exports = devConfig
