
export type httpStatusModule   = Record<string, any>;
export type httpStatusKey      = number|string;
export type httpStatusCode     = {status: number, statusText: string};
export type httpStatusCodes    = Array<httpStatusCode>;
export type httpStatusRange    = {status:string, min: number, max: number};
export type httpStatusRanges   = Array<httpStatusRange>;
export type httpResponseConfig = {

	url   : string,
	method: string,
	data  : unknown,
	source: string

};

export type httpResponse = {

	status    : number,
	statusText: string,
	data      : any,
	error?    : undefined|null|Error,
	config    : httpResponseConfig

};

export type httpCheckNestedData = number|string|boolean|undefined|null;

// interface httpStatusCode {status: number, statusText: string}
// interface httpResponse extends httpStatusCode {message: string, data: any, error: any|null}
