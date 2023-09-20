const path = require('path');

const configuration = {

	entry  : [path.resolve(__dirname, '../src/http-status.ts')],
	mode   : 'production',
	devtool: 'inline-source-map',
	module : {

		rules: [

			{

				test   : /\.ts$/u,
				exclude: /node_modules/u,
				include: path.resolve(__dirname, '../src'),
				use    : 'ts-loader'

			}

			// {

			// 	test   : /\.js$/u,
			// 	exclude: /node_modules/u,
			// 	include: path.resolve(__dirname, 'src'),
			// 	use    :

			// 	[

			// 		{

			// 			loader : 'babel-loader',
			// 			options: {

			// 				presets: ['@babel/preset-env']

			// 			}

			// 		}

			// 	]

			// }

		]

	},
	resolve: {

    extensions: ['.tsx', '.ts', '.js']

  }

};

module.exports = configuration;
