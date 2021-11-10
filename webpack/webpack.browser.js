const common  = require('./webpack.common.js');
const path    = require('path');
const {merge} = require('webpack-merge');

const configuration = merge(common, {

	target: 'web',
	output: {

		path          : path.resolve(__dirname, '../dist'),
		filename      : 'browser.js',
		libraryTarget : 'umd',
		umdNamedDefine: true,
		globalObject  : 'this',
		library       : 'httpStatus'

	}

});

module.exports = configuration;
