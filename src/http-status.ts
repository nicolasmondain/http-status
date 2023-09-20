import {

	httpResponse,
	httpResponseConfig,
	httpStatusCode,
	httpStatusKey,
	httpStatusModule,
	httpStatusRanges

} from './@types/http-status/index';

import {HttpCheck} from './http-check';
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

const rmSpeChars = (string: string): string => string.replace(/[^a-zA-Z0-9]/gu, '');

const RANGE:httpStatusRanges = [

	{status: 'Informative', min: INFORMATIVE_MIN,  max: INFORMATIVE_MAX},
	{status: 'Success',     min: SUCCESS_MIN,      max: SUCCESS_MAX},
	{status: 'Redirection', min: REDIRECTION_MIN,  max: REDIRECTION_MAX},
	{status: 'ClientError', min: CLIENT_ERROR_MIN, max: CLIENT_ERROR_MAX},
	{status: 'ServerError', min: SERVER_ERROR_MIN, max: SERVER_ERROR_MAX}

];

const httpStatus: httpStatusModule = {

	findStatus(key: httpStatusKey | httpResponse): httpStatusCode{

		let statusCode: httpStatusCode | undefined = {status: 0, statusText: ''};

		if(Number.isInteger(key)){

			statusCode = httpCodes.find((code: httpStatusCode) => code.status === key);

		}else if(typeof key === 'string'){

			statusCode = httpCodes.find((code: httpStatusCode) => code.statusText === key);

		}else if(typeof key === 'object' && Number.isInteger(key.status)){

			statusCode = httpCodes.find((code: httpStatusCode) => code.status === key.status);

		}

		if(!statusCode){

			throw new Error(`Status code not found: ${JSON.stringify(key)}`);

		}

		return statusCode;

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

			const method = `is${rmSpeChars(httpCodes[i].statusText)}`;

			httpStatus[method] = (key: httpStatusKey): boolean => this.findStatus(key).status === httpCodes[i].status;

		}

		return this;

	},
	addFormatResponseMethods(){

		for(let i = 0; i < httpCodes.length; i += 1){

			const method = `response${rmSpeChars(httpCodes[i].statusText)}`;

			httpStatus[method] = (data: unknown, error?: unknown|undefined): boolean => this.formatResponse(httpCodes[i].status, data, error);

		}

		return this;

	},
	isBetween(key: httpStatusKey, min: number, max: number): boolean{

		const code = httpStatus.findStatus(key);

		return code && code.status >= min && code.status <= max;

	},
	formatResponseConfig(response:any, source: string): httpResponseConfig{

		const RESPONSE_CONFIG_METHOD = response?.config ? response.config.method : '';
		const RESPONSE_CONFIG_DATA   = response?.config ? response.config.data : {};
		const RESPONSE_CONFIG_URL    = response?.config ? response.config.url : '';
		const RESPONSE_REQUEST_URL   = response?.request ? response.request.responseURL : '';

		const formatResponseConfig = {

			url   : RESPONSE_CONFIG_URL || RESPONSE_REQUEST_URL,
			method: RESPONSE_CONFIG_METHOD,
			data  : RESPONSE_CONFIG_DATA,
			source

		};

		return formatResponseConfig;

	},
	formatResponse(key: httpStatusKey, data: unknown, error?: Error, config?: undefined|httpResponseConfig): httpResponse{

		const code = this.findStatus(key);
		const DEFAULT_RESPONSE_CONFIG: httpResponseConfig = {

			url   : '',
			method: '',
			data  : {},
			source: ''

		};

		return{

			status    : code.status,
			statusText: code.statusText,
			config    : Object.assign(DEFAULT_RESPONSE_CONFIG, config),
			data,
			error

		};

	},
	checkResponseData(response: httpResponse): HttpCheck{

		return new HttpCheck(response);

	}

};

httpStatus
	.addRangeMethods()
	.addStatusMethods()
	.addFormatResponseMethods();

module.exports = httpStatus;
