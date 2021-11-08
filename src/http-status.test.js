const chai       = require('chai');
const httpStatus = require('./http-status');
const httpCodes  = require('./http-codes');

describe('isInformative', () => {

	it('should return true', () => {

		const test = httpStatus.isInformative(100);

		chai.expect(test).to.be.true;

	});

	it('should return true', () => {

		const test = httpStatus.isInformative('Switching Protocol');

		chai.expect(test).to.be.true;

	});

	it('should return false', () => {

		const test = httpStatus.isInformative(200);

		chai.expect(test).to.be.false;

	});

});

describe('removeSpecialCharacters', () => {

	it('should return string without special characters', () => {

		for(let i = 0; i < httpCodes.length; i += 1){

			const code = httpCodes[i];
			const test = httpStatus.removeSpecialCharacters(code.statusText);

			chai.expect(test).to.be.a('string');

		}

	});

});
