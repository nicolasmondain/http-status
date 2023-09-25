# http-status

Send, receive and check HTTP statuses in JavaScript

![Version](https://img.shields.io/github/package-json/version/nicolasmondain/http-status)
![Downloads](https://img.shields.io/npm/dm/@nicolasmondain/http-status.svg)
![Contributors](https://img.shields.io/github/contributors/nicolasmondain/http-status)
![Issues](https://img.shields.io/github/issues/nicolasmondain/http-status)
![License](https://img.shields.io/github/license/nicolasmondain/http-status)

* no dependency
* lightweight
* intuitive methods generated from the [standard http status codes](https://github.com/nicolasmondain/http-status/blob/master/src/http-codes.ts)
* browser and Node.js usage
* type declaration [file](https://github.com/nicolasmondain/http-status/blob/master/src/%40types/http-status/index.d.ts) included


## Installation

```
npm install @nicolasmondain/http-status --save
```

## Usage

### Browser

```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const URL  = '';
const BODY = {};

window.fetch(URL, {

	method : 'POST',
	body   : JSON.stringify(BODY),
	headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}

})
.then((httpResponse) => httpResponse.json()).then((httpResponse) => {

	if(httpStatus.isSuccess(httpResponse.status)){

		//

	}else if(httpStatus.isClientError(httpResponse.status)){

		//

	}else if(httpStatus.isServerError(httpResponse.status)){

		//

	}else{

		//

	}

})
.catch((error) => {

	reject(error);

});

```
```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const httpResponse = httpStatus.formatResponse(response.status, response.data, null);

httpStatus.isOK(httpResponse.statusText); // boolean
httpStatus.isOK(httpResponse.status); // boolean
httpStatus.isOK(httpResponse); // boolean

```
```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const MAX_PEOPLE = 50;

const data              = {people: {total: 250}};
const httpResponse      = httpStatus.formatResponse(200, data); // {status: 200, statusText: 'OK', data}
const checkResponseData = httpStatus.checkResponseData(httpResponse);

checkResponseData.expect('people.total').toBeLessThan(MAX_PEOPLE); // false
checkResponseData.expect('people.total').toBeTypeof('number'); // true

```
```js
<script src="../node_modules/@nicolasmondain/http-status/dist/browser.js"></script>
<script>

	console.log(httpStatus.isInformative(100)); // true
	console.log(httpStatus.isSuccess(200)); // true

</script>
```
### Node.js

```js
const httpStatus = require('@nicolasmondain/http-status/dist/node');

const httpResponse = httpStatus.responseOK(results);

res.status(httpResponse.status).send(httpResponse.data); // res.status(200).send({status: 200, statusText: 'OK', data: results, error: null});

```


## Methods

* [Determine the type of the HTTP response](https://github.com/nicolasmondain/http-status/blob/master/README.md#determine-the-type-of-the-http-response)
* [Determine the exact status of the HTTP response](https://github.com/nicolasmondain/http-status/blob/master/README.md#determine-the-exact-status-of-the-http-response)
* [Format a specific HTTP response](https://github.com/nicolasmondain/http-status/blob/master/README.md#determine-the-exact-status-of-the-http-response)
* [Check HTTP response data content](https://github.com/nicolasmondain/http-status/blob/master/README.md#check-http-response-data-content)
* [Other methods](https://github.com/nicolasmondain/http-status/blob/master/README.md#other-methods)


### Generated from the [standard http status codes](https://github.com/nicolasmondain/http-status/blob/master/src/http-codes.ts)

#### Determine the type of the HTTP response

Each of these methods must be called with 1 parameter. This parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.
They return a boolean.

These methods are used to determine the type of the HTTP response: informative, success, redirection, client error, server error.

* isInformative
* isSuccess
* isRedirection
* isClientError
* isServerError



```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const response = {status: 405, statusText: 'Method Not Allowed'};

httpStatus.isClientError(response); // true
httpStatus.isClientError(response.status); // true
httpStatus.isClientError(response.statusText); // true

```

```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const response = {status: 201, statusText: 'Created'};

httpStatus.isSuccess(response); // true
httpStatus.isSuccess(response.status); // true
httpStatus.isSuccess(response.statusText); // true
```

#### Determine the exact status of the HTTP response

Each of these methods must be called with 1 parameter. This parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.
They return a boolean.

These methods allow you to check the exact status of the HTTP response.

* isContinue
* isSwitchingProtocol
* isProcessingWebDAV
* isOK
* isCreated
* isAccepted
* isNonAuthoritativeInformation
* isNoContent
* isResetContent
* isPartialContent
* isMultiStatusWebDAV
* isIMUsedHTTPDeltaencoding
* isMultipleChoice
* isMovedPermanently
* isFound
* isSeeOther
* isNotModified
* isUseProxy
* isunused
* isTemporaryRedirect
* isPermanentRedirect
* isBadRequest
* isUnauthorized
* isPaymentRequired
* isForbidden
* isNotFound
* isMethodNotAllowed
* isNotAcceptable
* isProxyAuthenticationRequired
* isRequestTimeout
* isConflict
* isGone
* isLengthRequired
* isPreconditionFailed
* isPayloadTooLarge
* isURITooLong
* isUnsupportedMediaType
* isRequestedRangeNotSatisfiable
* isExpectationFailed
* isImateapot
* isMisdirectedRequest
* isUnprocessableEntityWebDAV
* isLockedWebDAV
* isFailedDependencyWebDAV
* isUpgradeRequired
* isPreconditionRequired
* isTooManyRequests
* isRequestHeaderFieldsTooLarge
* isUnavailableForLegalReasons
* isInternalServerError
* isNotImplemented
* isBadGateway
* isServiceUnavailable
* isGatewayTimeout
* isHTTPVersionNotSupported
* isVariantAlsoNegotiates
* isInsufficientStorage
* isLoopDetectedWebDAV
* isNotExtended
* isNetworkAuthenticationRequired

```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const response = {status: 200, statusText: 'OK'};

httpStatus.isOK(response); // true
httpStatus.isOK(response.status); // true
httpStatus.isOK(response.statusText); // true

```

```js
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const response = {status: 400, statusText: 'Bad Request'};

httpStatus.isBadRequest(response); // true
httpStatus.isBadRequest(response.status); // true
httpStatus.isBadRequest(response.statusText); // true

```

#### Format a specific HTTP response

Each of these methods can be called with 2 parameters (optional):

* `data`: optional
* `error`: optional

The method returns the formalized HTTP response: `{status: number, statusText: string, data: any, error: any}`

* responseContinue
* responseSwitchingProtocol
* responseProcessingWebDAV
* responseOK
* responseCreated
* responseAccepted
* responseNonAuthoritativeInformation
* responseNoContent
* responseResetContent
* responsePartialContent
* responseMultiStatusWebDAV
* responseIMUsedHTTPDeltaencoding
* responseMultipleChoice
* responseMovedPermanently
* responseFound
* responseSeeOther
* responseNotModified
* responseUseProxy
* responseunused
* responseTemporaryRedirect
* responsePermanentRedirect
* responseBadRequest
* responseUnauthorized
* responsePaymentRequired
* responseForbidden
* responseNotFound
* responseMethodNotAllowed
* responseNotAcceptable
* responseProxyAuthenticationRequired
* responseRequestTimeout
* responseConflict
* responseGone
* responseLengthRequired
* responsePreconditionFailed
* responsePayloadTooLarge
* responseURITooLong
* responseUnsupportedMediaType
* responseRequestedRangeNotSatisfiable
* responseExpectationFailed
* responseImateapot
* responseMisdirectedRequest
* responseUnprocessableEntityWebDAV
* responseLockedWebDAV
* responseFailedDependencyWebDAV
* responseUpgradeRequired
* responsePreconditionRequired
* responseTooManyRequests
* responseRequestHeaderFieldsTooLarge
* responseUnavailableForLegalReasons
* responseInternalServerError
* responseNotImplemented
* responseBadGateway
* responseServiceUnavailable
* responseGatewayTimeout
* responseHTTPVersionNotSupported
* responseVariantAlsoNegotiates
* responseInsufficientStorage
* responseLoopDetectedWebDAV
* responseNotExtended
* responseNetworkAuthenticationRequired

```js
const httpStatus = require('@nicolasmondain/http-status/dist/node');

const httpResponse = httpStatus.responseOK(results);

res.status(httpResponse.status).send(httpResponse.data); // res.status(200).send({status: 200, statusText: 'OK', data: results, error: null});

```

```js
const httpStatus = require('@nicolasmondain/http-status/dist/node');

const httpResponse = httpStatus.responseUnauthorized();

res.status(httpResponse.status).send(httpResponse.data); // res.status(401).send({status: 401, statusText: 'Unauthorized', data: null, error: null});

```
### Check HTTP response data content

```javascript
import httpStatus from '@nicolasmondain/http-status/dist/browser';

const data              = {a: 'a', b: {b1: {b1a: 'b1a', b1b: 'b1b'}}, c: 'c', d: 'd', e: 10};
const httpResponse      = httpStatus.formatResponse(200, data); // {status: 200, statusText: 'OK', data}
const checkResponseData = httpStatus.checkResponseData(httpResponse);

const check1 = checkResponseData.expect('b.b1.b1a').toBeEqualTo('b1a');
const check2 = checkResponseData.expect('e').toBeEqualTo(10);
const check3 = checkResponseData.expect('e').toBeGreaterThan(9);
const check4 = checkResponseData.expect('e').toBeLessThan(11);
const check5 = checkResponseData.expect('e').toBeTypeof('number');
const check6 = checkResponseData.expect('b.b1.b1a').toMatch(/b1a/u);
const check7 = checkResponseData.expect('b.b1.b1c').toBeNull();

```

#### checkResponseData

`checkResponseData` instantiate a class (`HttpCheck`). The accessible methods are:
* toBeEqualTo
* toBeGreaterThan
* toBeLessThan
* toBeTypeof
* toMatch
* toBeNull

```javascript
checkResponseData(response: httpResponse): HttpCheck{

	return new HttpCheck(response);

}
```

### Other methods

#### findStatus

`findStatus` must be called with 1 parameter:

 * `key`: this parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.

`findStatus` returns the formalized status code: `{status: number, statusText: string}`.

```typescript
findStatus(key: httpStatusKey | httpResponse): httpStatusCode
```
#### formatResponse

`formatResponse` must be called with 3 parameters.
* `key`: this parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.
* `data`: optional
* `error`: optional

`formatResponse` returns the formalized HTTP response: `{status: number, statusText: string, data: any, error: any}`.

```typescript
formatResponse(key: httpStatusKey, data: any, error: any): httpResponse{

		const code = this.findStatus(key);

		return{

			status    : code.status,
			statusText: code.statusText,
			data,
			error

		};

	}
```
