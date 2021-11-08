/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/http-codes.js":
/*!***************************!*\
  !*** ./src/http-codes.js ***!
  \***************************/
/***/ ((module) => {

eval("\nmodule.exports = [\n\n\t{status: 100, statusText: 'Continue'},\n\t{status: 101, statusText: 'Switching Protocol'},\n\t{status: 103, statusText: 'Processing (WebDAV)'},\n\t{status: 200, statusText: 'OK'},\n\t{status: 201, statusText: 'Created'},\n\t{status: 202, statusText: 'Accepted'},\n\t{status: 203, statusText: 'Non-Authoritative Information'},\n\t{status: 204, statusText: 'No Content'},\n\t{status: 205, statusText: 'Reset Content'},\n\t{status: 206, statusText: 'Partial Content'},\n\t{status: 207, statusText: 'Multi-Status (WebDAV)'},\n\t{status: 208, statusText: 'Multi-Status (WebDAV)'},\n\t{status: 226, statusText: 'IM Used (HTTP Delta encoding)'},\n\t{status: 300, statusText: 'Multiple Choice'},\n\t{status: 301, statusText: 'Moved Permanently'},\n\t{status: 302, statusText: 'Found'},\n\t{status: 303, statusText: 'See Other'},\n\t{status: 304, statusText: 'Not Modified'},\n\t{status: 305, statusText: 'Use Proxy'},\n\t{status: 306, statusText: 'unused'},\n\t{status: 307, statusText: 'Temporary Redirect'},\n\t{status: 308, statusText: 'Permanent Redirect'},\n\t{status: 400, statusText: 'Bad Request'},\n\t{status: 401, statusText: 'Unauthorized'},\n\t{status: 402, statusText: 'Payment Required'},\n\t{status: 403, statusText: 'Forbidden'},\n\t{status: 404, statusText: 'Not Found'},\n\t{status: 405, statusText: 'Method Not Allowed'},\n\t{status: 406, statusText: 'Not Acceptable '},\n\t{status: 407, statusText: 'Proxy Authentication Required'},\n\t{status: 408, statusText: 'Request Timeout'},\n\t{status: 409, statusText: 'Conflict'},\n\t{status: 410, statusText: 'Gone'},\n\t{status: 411, statusText: 'Length Required'},\n\t{status: 412, statusText: 'Precondition Failed'},\n\t{status: 413, statusText: 'Payload Too Large'},\n\t{status: 414, statusText: 'URI Too Long'},\n\t{status: 415, statusText: 'Unsupported Media Type'},\n\t{status: 416, statusText: 'Requested Range Not Satisfiable'},\n\t{status: 417, statusText: 'Expectation Failed'},\n\t{status: 418, statusText: 'I\\'m a teapot'},\n\t{status: 421, statusText: 'Misdirected Request'},\n\t{status: 422, statusText: 'Unprocessable Entity (WebDAV)'},\n\t{status: 423, statusText: 'Locked (WebDAV)'},\n\t{status: 424, statusText: 'Failed Dependency (WebDAV)'},\n\t{status: 426, statusText: 'Upgrade Required'},\n\t{status: 428, statusText: 'Precondition Required'},\n\t{status: 429, statusText: 'Too Many Requests'},\n\t{status: 431, statusText: 'Request Header Fields Too Large'},\n\t{status: 451, statusText: 'Unavailable For Legal Reasons'},\n\t{status: 500, statusText: 'Internal Server Error'},\n\t{status: 501, statusText: 'Not Implemented'},\n\t{status: 502, statusText: 'Bad Gateway'},\n\t{status: 503, statusText: 'Service Unavailable'},\n\t{status: 504, statusText: 'Gateway Timeout'},\n\t{status: 505, statusText: 'HTTP Version Not Supported'},\n\t{status: 506, statusText: 'Variant Also Negotiates'},\n\t{status: 507, statusText: 'Insufficient Storage'},\n\t{status: 508, statusText: 'Loop Detected (WebDAV)'},\n\t{status: 510, statusText: 'Not Extended'},\n\t{status: 511, statusText: 'Network Authentication Required'}\n\n];\n\n\n//# sourceURL=webpack://http-status/./src/http-codes.js?");

/***/ }),

/***/ "./src/http-status.js":
/*!****************************!*\
  !*** ./src/http-status.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const httpCodes  = __webpack_require__(/*! ./http-codes */ \"./src/http-codes.js\");\nconst httpStatus = {\n\n\tfindStatus(key){\n\n\t\treturn httpCodes.find((code) => code[Number.isInteger(key) ? 'status' : 'statusText'] === key);\n\n\t},\n\tremoveSpecialCharacters(key){\n\n\t\treturn key.replace(/[^a-zA-Z0-9]/g, '');\n\n\t},\n\tisBetween(key, min, max){\n\n\t\tconst code = httpStatus.findStatus(key);\n\n\t\treturn code && code.status >= min && code.status <= max;\n\n\t},\n\tisInformative(key){\n\n\t\treturn this.isBetween(key, 100, 199);\n\n\t},\n\tisSuccess(key){\n\n\t\treturn this.isBetween(key, 200, 299);\n\n\t},\n\tisRedirection(key){\n\n\t\treturn this.isBetween(key, 300, 399);\n\n\t},\n\tisClientError(key){\n\n\t\treturn this.isBetween(key, 400, 499);\n\n\t},\n\tisServerError(key){\n\n\t\treturn this.isBetween(key, 500, 599);\n\n\t},\n\tformatResponse(key, message, data, error = null){\n\n\t\tconst code = this.findStatus(key);\n\n\t\treturn{\n\n\t\t\tstatus    : code.status,\n\t\t\tstatusText: code.statusText,\n\t\t\tmessage,\n\t\t\tdata,\n\t\t\terror\n\n\t\t};\n\n\t}\n\n\n};\n\nmodule.exports = httpStatus;\n\n\n//# sourceURL=webpack://http-status/./src/http-status.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/http-status.js");
/******/ 	
/******/ })()
;