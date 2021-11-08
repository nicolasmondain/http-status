const path = require('path');

const configuration = {

	entry : [path.resolve(__dirname, '../src/http-status.js')],
	mode  : 'development',
	module: {

		rules: [

			{

        test   : /\.tsx?$/,
        use    : 'ts-loader',
        exclude: /node_modules/

			}

		]

	},
	resolve: {

    extensions: ['.tsx', '.ts', '.js']

  },
	output: {

    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')

  }

};

module.exports = configuration;
