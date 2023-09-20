import {httpCheckNestedData, httpResponse} from './@types/http-status/index';

export class HttpCheck {

	response: httpResponse;
	data    : httpCheckNestedData;

	constructor(response: httpResponse){

		this.response = response;
		this.data     = null;

	}

	private nested(data: string): httpCheckNestedData{

		let nested: Record<string, any>|any = {};

		if(data && typeof data === 'string' && typeof this.response.data === 'object'){

			const array = data.split('.');

			if(array.length > 1){

				nested = this.response.data;

				for(let i = 0; i < array.length; i += 1){

					if(nested && typeof nested[array[i]] !== 'undefined'){

						nested = nested[array[i]];

					}else{

						return null;

					}

					if(i === array.length - 1){

						return nested;

					}

				}

			}else{

				return this.response.data && typeof this.response.data === 'object' ? this.response.data[array[0]] : null;

			}

		}

		return this.response.data;

	}

	expect(data: string): HttpCheck{

		this.data = this.nested(data);

		return this;

	}

	toBeEqualTo(compare: httpCheckNestedData): boolean{

		return['string', 'number', 'boolean', 'undefined'].includes(typeof this.data) ? this.data === compare : false;

	}

	toBeGreaterThan(compare: number): boolean{

		return typeof this.data === 'number' && typeof compare === 'number' ? this.data > compare : false;

	}

	toBeLessThan(compare: number): boolean{

		return typeof this.data === 'number' && typeof compare === 'number' ? this.data < compare : false;

	}

	toBeTypeof(compare: string): boolean{

		return['string', 'number', 'boolean', 'undefined'].includes(compare) ? typeof this.data === compare : false;

	}

	toMatch(compare: RegExp): boolean{

		return typeof this.data === 'string' && compare instanceof RegExp ? compare.test(this.data) : false;

	}

	ToBeNull(){

		return this.data === null;

	}

}
