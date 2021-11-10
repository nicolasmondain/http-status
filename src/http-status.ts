import * as httpCodes from './http-codes';

console.log(httpCodes);

type httpStatusKey = number|string;

const INFORMATIVE_MIN  = 100;
const INFORMATIVE_MAX  = 199;
const SUCCESS_MIN      = 200;
const SUCCESS_MAX      = 299;
const REDIRECTION_MIN  = 300;
const REDIRECTION_MAX  = 399;
const CLIENT_ERROR_MIN = 400;
const CLIENT_ERROR_MAX = 499;
const SERVER_ERROR_MIN = 500;
const SERVER_ERROR_MAX = 599;

const httpStatus = {

	findStatus(key: httpStatusKey){

		return httpCodes.find((code: {status: number, statusText: string}) => code[Number.isInteger(key) ? 'status' : 'statusText'] === key);

	},
	removeSpecialCharacters(string: string){

		return string.replace(/[^a-zA-Z0-9]/gu, '');

	},
	isBetween(key: httpStatusKey, min: number, max: number){

		const code = httpStatus.findStatus(key);

		return code && code.status >= min && code.status <= max;

	},
	isInformative(key: httpStatusKey){

		return this.isBetween(key, INFORMATIVE_MIN, INFORMATIVE_MAX);

	},
	isSuccess(key: httpStatusKey){

		return this.isBetween(key, SUCCESS_MIN, SUCCESS_MAX);

	},
	isRedirection(key: httpStatusKey){

		return this.isBetween(key, REDIRECTION_MIN, REDIRECTION_MAX);

	},
	isClientError(key: httpStatusKey){

		return this.isBetween(key, CLIENT_ERROR_MIN, CLIENT_ERROR_MAX);

	},
	isServerError(key: httpStatusKey){

		return this.isBetween(key, SERVER_ERROR_MIN, SERVER_ERROR_MAX);

	},
	formatResponse(key: httpStatusKey, message: string, data: any, error: any|null = null){

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
