import {

	httpResponse,
	httpStatusCode,
	httpStatusKey,
	httpStatusModule

} from './@types/http-status/index';

import httpCodes from './http-codes';

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

const RANGE = [

	{status: 'Informative', min: INFORMATIVE_MIN, max: INFORMATIVE_MAX},
	{status: 'Success', min: SUCCESS_MIN, max: SUCCESS_MAX},
	{status: 'Redirection', min: REDIRECTION_MIN, max: REDIRECTION_MAX},
	{status: 'ClientError', min: CLIENT_ERROR_MIN, max: CLIENT_ERROR_MAX},
	{status: 'ServerError', min: SERVER_ERROR_MIN, max: SERVER_ERROR_MAX}

];

const httpStatus: httpStatusModule = {

	findStatus(key: httpStatusKey): httpStatusCode{

		const statusCode = httpCodes.find((code: httpStatusCode) => code[Number.isInteger(key) ? 'status' : 'statusText'] === key);

		if(!statusCode){

			throw new Error(`Status code ${key} not found`);

		}

		return statusCode;

	},
	removeSpecialCharacters(string: string): string{

		return string.replace(/[^a-zA-Z0-9]/gu, '');

	},
	addRangeMethods(){

		for(let i = 0; i < RANGE.length; i += 1){

			const method = `is${RANGE[i].status}`;

			httpStatus[method] = (key: httpStatusKey): boolean => this.isBetween(key, RANGE[i].min, RANGE[i].max);

		}

		return this;

	},
	addStatusMethods(){

		for(let i = 0; i < httpCodes.length; i += 1){

			const method = `is${this.removeSpecialCharacters(httpCodes[i].statusText)}`;

			httpStatus[method] = (key: httpStatusKey): boolean => this.findStatus(key).status === httpCodes[i].status;

		}

		return this;

	},
	addFormatResponseMethods(){

		for(let i = 0; i < httpCodes.length; i += 1){

			const method = `response${this.removeSpecialCharacters(httpCodes[i].statusText)}`;

			httpStatus[method] = (key: httpStatusKey, message: string, data: any, error: any|null = null): boolean => this.formatResponse(key, message, data, error);

		}

		return this;

	},
	isBetween(key: httpStatusKey, min: number, max: number): boolean{

		const code = httpStatus.findStatus(key);

		return code && code.status >= min && code.status <= max;

	},
	formatResponse(key: httpStatusKey, message: string, data: any, error: any|null = null): httpResponse{

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

httpStatus
	.addRangeMethods()
	.addStatusMethods()
	.addFormatResponseMethods();

module.exports = httpStatus;
