
export type httpStatusModule = Record<string, any>;
export type httpStatusKey    = number|string;
export type httpStatusCode   = {status: number, statusText: string};
export type httpStatusCodes  = Array<httpStatusCode>;
export type httpStatusRange  = {status:string, min: number, max: number};
export type httpStatusRanges = Array<httpStatusRange>;
export type httpResponse     = {

	status: number,
	statusText: string,
	data: any,
	error: any|null

};

// interface httpStatusCode {status: number, statusText: string}
// interface httpResponse extends httpStatusCode {message: string, data: any, error: any|null}
