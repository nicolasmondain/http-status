
const webpack = require('webpack');
const common  = require('./webpack.common.js');

webpack(common, (error, stats) => {

	if(error){

		console.log(error);
		return 1;

	}

	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){

		console.log('Webpack generated the following errors:');
		return jsonStats.errors.map((stat) => console.log(stat));

	}

	if(jsonStats.hasWarnings){

		console.log('Webpack generated the following warnings:');
		return jsonStats.warnings.map((stat) => console.log(stat));

	}

	console.log(`Your app has been built`);

	return 0;

});
