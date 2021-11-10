export type httpStatusModule = Record<string, any>;
export type httpStatusKey    = number|string;
export type httpStatusCode   = {status: number, statusText: string};
export type httpStatusCodes  = Array<httpStatusCode>;
export type httpResponse     = {

	status: number,
	statusText: string,
	message: string,
	data: any,
	error: any|null

};
