# http-status

Send, receive and check HTTP statuses in JavaScript

## Installation

```
npm install @sharingbox/http-status --save
```

## Usage

### Browser

```js
import httpStatus from '@sharingbox/http-status/dist/browser';

httpStatus.formatResponse(response.status, response.data);
httpStatus.isOK(response.status);
httpStatus.isOK(response);

```

### Node.js

```js
const httpStatus = require('@sharingbox/http-status/dist/node');

const httpResponse = httpStatus.responseOK(results);

res.status(httpResponse.status).send(httpResponse.data);

const httpResponse = httpStatus.responseUnauthorized();

res.status(httpResponse.status).send(httpResponse.data);

```

## Methods

### Generated from the [standard http status codes](https://github.com/nicolasmondain/http-status/blob/master/src/http-codes.ts)

Each of these methods must be called with one parameter. This parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.
They return a boolean.

These methods are used to determine the type of the HTTP response: informative, success, redirection, client error, server error.

* isInformative
* isSuccess
* isRedirection
* isClientError
* isServerError



```js
import httpStatus from '@sharingbox/http-status/dist/browser';

const response = {status: 405, statusText: 'Method Not Allowed'};

httpStatus.isClientError(response); // true
httpStatus.isClientError(response.status); // true
httpStatus.isClientError(response.statusText); // true

```

```js
import httpStatus from '@sharingbox/http-status/dist/browser';

const response = {status: 201, statusText: 'Created'};

httpStatus.isSuccess(response); // true
httpStatus.isSuccess(response.status); // true
httpStatus.isSuccess(response.statusText); // true

```

Each of these methods must be called with one parameter. This parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.
They return a boolean.

These methods allow you to check the exact status of an HTTP response.

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
import httpStatus from '@sharingbox/http-status/dist/browser';

const response = {status: 200, statusText: 'OK'};

httpStatus.isOK(response); // true
httpStatus.isOK(response.status); // true
httpStatus.isOK(response.statusText); // true

```

```js
import httpStatus from '@sharingbox/http-status/dist/browser';

const response = {status: 400, statusText: 'Bad Request'};

httpStatus.isBadRequest(response); // true
httpStatus.isBadRequest(response.status); // true
httpStatus.isBadRequest(response.statusText); // true

```
### Standard

`findStatus` must be called with 1 parameter:

 * `key`: this parameter can be the status (number) or the statusText (string) of the analyzed HTTP response, or the HTTP response itself.

`findStatus` returns the formalized status code: `{status: number, statusText: string}`.

```typescript
findStatus(key: httpStatusKey | httpResponse): httpStatusCode
```

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
