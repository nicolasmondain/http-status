"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_codes_1 = __importDefault(require("./http-codes"));
var INFORMATIVE_MIN = 100;
var INFORMATIVE_MAX = 199;
var SUCCESS_MIN = 200;
var SUCCESS_MAX = 299;
var REDIRECTION_MIN = 300;
var REDIRECTION_MAX = 399;
var CLIENT_ERROR_MIN = 400;
var CLIENT_ERROR_MAX = 499;
var SERVER_ERROR_MIN = 500;
var SERVER_ERROR_MAX = 599;
var httpStatus = {
    findStatus: function (key) {
        return http_codes_1.default.find(function (code) { return code[Number.isInteger(key) ? 'status' : 'statusText'] === key; });
    },
    removeSpecialCharacters: function (string) {
        return string.replace(/[^a-zA-Z0-9]/gu, '');
    },
    isBetween: function (key, min, max) {
        var code = httpStatus.findStatus(key);
        return code && code.status >= min && code.status <= max;
    },
    isInformative: function (key) {
        return this.isBetween(key, INFORMATIVE_MIN, INFORMATIVE_MAX);
    },
    isSuccess: function (key) {
        return this.isBetween(key, SUCCESS_MIN, SUCCESS_MAX);
    },
    isRedirection: function (key) {
        return this.isBetween(key, REDIRECTION_MIN, REDIRECTION_MAX);
    },
    isClientError: function (key) {
        return this.isBetween(key, CLIENT_ERROR_MIN, CLIENT_ERROR_MAX);
    },
    isServerError: function (key) {
        return this.isBetween(key, SERVER_ERROR_MIN, SERVER_ERROR_MAX);
    },
    formatResponse: function (key, message, data, error) {
        if (error === void 0) { error = null; }
        var code = this.findStatus(key);
        return {
            status: code.status,
            statusText: code.statusText,
            message: message,
            data: data,
            error: error
        };
    }
};
module.exports = httpStatus;
