const common  = require('./webpack.common.js');
const path    = require('path');
const {merge} = require('webpack-merge');

const configuration = merge(common, {

	target: 'node',
	output: {

		path          : path.resolve(__dirname, '../dist'),
		filename      : 'node.js',
		libraryTarget : 'umd',
		umdNamedDefine: true

	}

});

module.exports = configuration;
