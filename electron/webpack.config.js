const path = require('path');

const config = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, '.'),
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}]
	}
};

module.exports = config;
