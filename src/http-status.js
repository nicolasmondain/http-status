const httpCodes  = require('./http-codes');
const httpStatus = {

	findStatus(key){

		return httpCodes.find((code) => code[Number.isInteger(key) ? 'status' : 'statusText'] === key);

	},
	removeSpecialCharacters(key){

		return key.replace(/[^a-zA-Z0-9]/g, '');

	},
	isBetween(key, min, max){

		const code = httpStatus.findStatus(key);

		return code && code.status >= min && code.status <= max;

	},
	isInformative(key){

		return this.isBetween(key, 100, 199);

	},
	isSuccess(key){

		return this.isBetween(key, 200, 299);

	},
	isRedirection(key){

		return this.isBetween(key, 300, 399);

	},
	isClientError(key){

		return this.isBetween(key, 400, 499);

	},
	isServerError(key){

		return this.isBetween(key, 500, 599);

	},
	formatResponse(key, message, data, error = null){

		const code = this.findStatus(key);

		return{

			status    : code.status,
			statusText: code.statusText,
			message,
			data,
			error

		};

	}


};

module.exports = httpStatus;
