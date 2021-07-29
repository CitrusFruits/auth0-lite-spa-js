'use strict';

var Lock = require('browser-tabs-lock');
var fetch = require('unfetch');
var Cookies = require('es-cookie');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var Lock__default = /*#__PURE__*/_interopDefaultLegacy(Lock);
var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
var Cookies__namespace = /*#__PURE__*/_interopNamespace(Cookies);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var version = '1.16.1';

/**
 * @ignore
 */
var DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
/**
 * @ignore
 */
var DEFAULT_POPUP_CONFIG_OPTIONS = {
    timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
};
/**
 * @ignore
 */
var DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
/**
 * @ignore
 */
var CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
/**
 * @ignore
 */
var DEFAULT_FETCH_TIMEOUT_MS = 10000;
var CACHE_LOCATION_MEMORY = 'memory';
/**
 * @ignore
 */
var MISSING_REFRESH_TOKEN_ERROR_MESSAGE = 'The web worker is missing the refresh token';
/**
 * @ignore
 */
var INVALID_REFRESH_TOKEN_ERROR_MESSAGE = 'invalid refresh token';
/**
 * @ignore
 */
var DEFAULT_SCOPE = 'openid profile email';
/**
 * A list of errors that can be issued by the authorization server which the
 * user can recover from by signing in interactively.
 * https://openid.net/specs/openid-connect-core-1_0.html#AuthError
 * @ignore
 */
var RECOVERABLE_ERRORS = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    // Strictly speaking the user can't recover from `access_denied` - but they
    // can get more information about their access being denied by logging in
    // interactively.
    'access_denied'
];
/**
 * @ignore
 */
var DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;
/**
 * @ignore
 */
var DEFAULT_AUTH0_CLIENT = {
    name: 'auth0-spa-js',
    version: version
};

/**
 * Thrown when network requests to the Auth server fail.
 */
var GenericError = /** @class */ (function (_super) {
    __extends(GenericError, _super);
    function GenericError(error, error_description) {
        var _this = _super.call(this, error_description) || this;
        _this.error = error;
        _this.error_description = error_description;
        Object.setPrototypeOf(_this, GenericError.prototype);
        return _this;
    }
    GenericError.fromPayload = function (_a) {
        var error = _a.error, error_description = _a.error_description;
        return new GenericError(error, error_description);
    };
    return GenericError;
}(Error));
/**
 * Thrown when handling the redirect callback fails, will be one of Auth0's
 * Authentication API's Standard Error Responses: https://auth0.com/docs/api/authentication?javascript#standard-error-responses
 */
var AuthenticationError = /** @class */ (function (_super) {
    __extends(AuthenticationError, _super);
    function AuthenticationError(error, error_description, state, appState) {
        if (appState === void 0) { appState = null; }
        var _this = _super.call(this, error, error_description) || this;
        _this.state = state;
        _this.appState = appState;
        //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, AuthenticationError.prototype);
        return _this;
    }
    return AuthenticationError;
}(GenericError));
/**
 * Thrown when silent auth times out (usually due to a configuration issue) or
 * when network requests to the Auth server timeout.
 */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var _this = _super.call(this, 'timeout', 'Timeout') || this;
        //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, TimeoutError.prototype);
        return _this;
    }
    return TimeoutError;
}(GenericError));
/**
 * Error thrown when the login popup times out (if the user does not complete auth)
 */
var PopupTimeoutError = /** @class */ (function (_super) {
    __extends(PopupTimeoutError, _super);
    function PopupTimeoutError(popup) {
        var _this = _super.call(this) || this;
        _this.popup = popup;
        //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, PopupTimeoutError.prototype);
        return _this;
    }
    return PopupTimeoutError;
}(TimeoutError));
var PopupCancelledError = /** @class */ (function (_super) {
    __extends(PopupCancelledError, _super);
    function PopupCancelledError(popup) {
        var _this = _super.call(this, 'cancelled', 'Popup closed') || this;
        _this.popup = popup;
        //https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, PopupCancelledError.prototype);
        return _this;
    }
    return PopupCancelledError;
}(GenericError));

var parseQueryResult = function (queryString) {
    if (queryString.indexOf('#') > -1) {
        queryString = queryString.substr(0, queryString.indexOf('#'));
    }
    var queryParams = queryString.split('&');
    var parsedQuery = {};
    queryParams.forEach(function (qp) {
        var _a = __read(qp.split('='), 2), key = _a[0], val = _a[1];
        parsedQuery[key] = decodeURIComponent(val);
    });
    return __assign(__assign({}, parsedQuery), { expires_in: parseInt(parsedQuery.expires_in) });
};
var runIframe = function (authorizeUrl, eventOrigin, timeoutInSeconds) {
    if (timeoutInSeconds === void 0) { timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS; }
    return new Promise(function (res, rej) {
        var iframe = window.document.createElement('iframe');
        iframe.setAttribute('width', '0');
        iframe.setAttribute('height', '0');
        iframe.style.display = 'none';
        var removeIframe = function () {
            if (window.document.body.contains(iframe)) {
                window.document.body.removeChild(iframe);
                window.removeEventListener('message', iframeEventHandler, false);
            }
        };
        var iframeEventHandler;
        var timeoutSetTimeoutId = setTimeout(function () {
            rej(new TimeoutError());
            removeIframe();
        }, timeoutInSeconds * 1000);
        iframeEventHandler = function (e) {
            if (e.origin != eventOrigin)
                return;
            if (!e.data || e.data.type !== 'authorization_response')
                return;
            var eventSource = e.source;
            if (eventSource) {
                eventSource.close();
            }
            e.data.response.error
                ? rej(GenericError.fromPayload(e.data.response))
                : res(e.data.response);
            clearTimeout(timeoutSetTimeoutId);
            window.removeEventListener('message', iframeEventHandler, false);
            // Delay the removal of the iframe to prevent hanging loading status
            // in Chrome: https://github.com/auth0/auth0-spa-js/issues/240
            setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1000);
        };
        window.addEventListener('message', iframeEventHandler, false);
        window.document.body.appendChild(iframe);
        iframe.setAttribute('src', authorizeUrl);
    });
};
var openPopup = function (url) {
    var width = 400;
    var height = 600;
    var left = window.screenX + (window.innerWidth - width) / 2;
    var top = window.screenY + (window.innerHeight - height) / 2;
    return window.open(url, 'auth0:authorize:popup', "left=" + left + ",top=" + top + ",width=" + width + ",height=" + height + ",resizable,scrollbars=yes,status=1");
};
var runPopup = function (config) {
    return new Promise(function (resolve, reject) {
        var popupEventListener;
        // Check each second if the popup is closed triggering a PopupCancelledError
        var popupTimer = setInterval(function () {
            if (config.popup && config.popup.closed) {
                clearInterval(popupTimer);
                clearTimeout(timeoutId);
                window.removeEventListener('message', popupEventListener, false);
                reject(new PopupCancelledError(config.popup));
            }
        }, 1000);
        var timeoutId = setTimeout(function () {
            clearInterval(popupTimer);
            reject(new PopupTimeoutError(config.popup));
            window.removeEventListener('message', popupEventListener, false);
        }, (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1000);
        popupEventListener = function (e) {
            if (!e.data || e.data.type !== 'authorization_response') {
                return;
            }
            clearTimeout(timeoutId);
            clearInterval(popupTimer);
            window.removeEventListener('message', popupEventListener, false);
            config.popup.close();
            if (e.data.response.error) {
                return reject(GenericError.fromPayload(e.data.response));
            }
            resolve(e.data.response);
        };
        window.addEventListener('message', popupEventListener);
    });
};
var getCrypto = function () {
    //ie 11.x uses msCrypto
    return (window.crypto || window.msCrypto);
};
var getCryptoSubtle = function () {
    var crypto = getCrypto();
    //safari 10.x uses webkitSubtle
    return crypto.subtle || crypto.webkitSubtle;
};
var createRandomString = function () {
    var charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.';
    var random = '';
    var randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
    randomValues.forEach(function (v) { return (random += charset[v % charset.length]); });
    return random;
};
var encode = function (value) { return btoa(value); };
var createQueryParams = function (params) {
    return Object.keys(params)
        .filter(function (k) { return typeof params[k] !== 'undefined'; })
        .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
        .join('&');
};
var sha256 = function (s) { return __awaiter(void 0, void 0, void 0, function () {
    var digestOp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                digestOp = getCryptoSubtle().digest({ name: 'SHA-256' }, new TextEncoder().encode(s));
                // msCrypto (IE11) uses the old spec, which is not Promise based
                // https://msdn.microsoft.com/en-us/expression/dn904640(v=vs.71)
                // Instead of returning a promise, it returns a CryptoOperation
                // with a result property in it.
                // As a result, the various events need to be handled in the event that we're
                // working in IE11 (hence the msCrypto check). These events just call resolve
                // or reject depending on their intention.
                if (window.msCrypto) {
                    return [2 /*return*/, new Promise(function (res, rej) {
                            digestOp.oncomplete = function (e) {
                                res(e.target.result);
                            };
                            digestOp.onerror = function (e) {
                                rej(e.error);
                            };
                            digestOp.onabort = function () {
                                rej('The digest operation was aborted');
                            };
                        })];
                }
                return [4 /*yield*/, digestOp];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var urlEncodeB64 = function (input) {
    var b64Chars = { '+': '-', '/': '_', '=': '' };
    return input.replace(/[+/=]/g, function (m) { return b64Chars[m]; });
};
// https://stackoverflow.com/questions/30106476/
var decodeB64 = function (input) {
    return decodeURIComponent(atob(input)
        .split('')
        .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
};
var urlDecodeB64 = function (input) {
    return decodeB64(input.replace(/_/g, '/').replace(/-/g, '+'));
};
var bufferToBase64UrlEncoded = function (input) {
    var ie11SafeInput = new Uint8Array(input);
    return urlEncodeB64(window.btoa(String.fromCharCode.apply(String, __spreadArray([], __read(Array.from(ie11SafeInput))))));
};
var validateCrypto = function () {
    if (!getCrypto()) {
        throw new Error('For security reasons, `window.crypto` is required to run `auth0-spa-js`.');
    }
    if (typeof getCryptoSubtle() === 'undefined') {
        throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
    }
};

/**
 * Sends the specified message to the web worker
 * @param message The message to send
 * @param to The worker to send the message to
 */
var sendMessage = function (message, to) {
    return new Promise(function (resolve, reject) {
        var messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function (event) {
            // Only for fetch errors, as these get retried
            if (event.data.error) {
                reject(new Error(event.data.error));
            }
            else {
                resolve(event.data);
            }
        };
        to.postMessage(message, [messageChannel.port2]);
    });
};

var createAbortController = function () { return new AbortController(); };
var dofetch = function (fetchUrl, fetchOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch__default['default'](fetchUrl, fetchOptions)];
            case 1:
                response = _b.sent();
                _a = {
                    ok: response.ok
                };
                return [4 /*yield*/, response.json()];
            case 2: return [2 /*return*/, (_a.json = _b.sent(),
                    _a)];
        }
    });
}); };
var fetchWithoutWorker = function (fetchUrl, fetchOptions, timeout) { return __awaiter(void 0, void 0, void 0, function () {
    var controller, timeoutId;
    return __generator(this, function (_a) {
        controller = createAbortController();
        fetchOptions.signal = controller.signal;
        // The promise will resolve with one of these two promises (the fetch or the timeout), whichever completes first.
        return [2 /*return*/, Promise.race([
                dofetch(fetchUrl, fetchOptions),
                new Promise(function (_, reject) {
                    timeoutId = setTimeout(function () {
                        controller.abort();
                        reject(new Error("Timeout when executing 'fetch'"));
                    }, timeout);
                })
            ]).finally(function () {
                clearTimeout(timeoutId);
            })];
    });
}); };
var fetchWithWorker = function (fetchUrl, audience, scope, fetchOptions, timeout, worker) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, sendMessage({
                auth: {
                    audience: audience,
                    scope: scope
                },
                timeout: timeout,
                fetchUrl: fetchUrl,
                fetchOptions: fetchOptions
            }, worker)];
    });
}); };
var switchFetch = function (fetchUrl, audience, scope, fetchOptions, worker, timeout) {
    if (timeout === void 0) { timeout = DEFAULT_FETCH_TIMEOUT_MS; }
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (worker) {
                return [2 /*return*/, fetchWithWorker(fetchUrl, audience, scope, fetchOptions, timeout, worker)];
            }
            else {
                return [2 /*return*/, fetchWithoutWorker(fetchUrl, fetchOptions, timeout)];
            }
        });
    });
};
function getJSON(url, timeout, audience, scope, options, worker) {
    return __awaiter(this, void 0, void 0, function () {
        var fetchError, response, i, e_1, _a, error, error_description, success, ok, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fetchError = null;
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < DEFAULT_SILENT_TOKEN_RETRY_COUNT)) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, switchFetch(url, audience, scope, options, worker, timeout)];
                case 3:
                    response = _b.sent();
                    fetchError = null;
                    return [3 /*break*/, 6];
                case 4:
                    e_1 = _b.sent();
                    // Fetch only fails in the case of a network issue, so should be
                    // retried here. Failure status (4xx, 5xx, etc) return a resolved Promise
                    // with the failure in the body.
                    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
                    fetchError = e_1;
                    return [3 /*break*/, 5];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (fetchError) {
                        // unfetch uses XMLHttpRequest under the hood which throws
                        // ProgressEvents on error, which don't have message properties
                        fetchError.message = fetchError.message || 'Failed to fetch';
                        throw fetchError;
                    }
                    _a = response.json, error = _a.error, error_description = _a.error_description, success = __rest(_a, ["error", "error_description"]), ok = response.ok;
                    if (!ok) {
                        errorMessage = error_description || "HTTP error. Unable to fetch " + url;
                        throw new GenericError(error || 'request_error', errorMessage);
                    }
                    return [2 /*return*/, success];
            }
        });
    });
}

function oauthToken(_a, worker) {
    var baseUrl = _a.baseUrl, timeout = _a.timeout, audience = _a.audience, scope = _a.scope, auth0Client = _a.auth0Client, options = __rest(_a, ["baseUrl", "timeout", "audience", "scope", "auth0Client"]);
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getJSON(baseUrl + "/oauth/token", timeout, audience || 'default', scope, {
                        method: 'POST',
                        body: JSON.stringify(options),
                        headers: {
                            'Content-type': 'application/json',
                            'Auth0-Client': btoa(JSON.stringify(auth0Client || DEFAULT_AUTH0_CLIENT))
                        }
                    }, worker)];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
}

/**
 * @ignore
 */
var dedupe = function (arr) { return Array.from(new Set(arr)); };
/**
 * @ignore
 */
var getUniqueScopes = function () {
    var scopes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scopes[_i] = arguments[_i];
    }
    return dedupe(scopes.join(' ').trim().split(/\s+/)).join(' ');
};

var CACHE_KEY_PREFIX = '@@auth0spajs@@';
var CacheKey = /** @class */ (function () {
    function CacheKey(data, prefix) {
        if (prefix === void 0) { prefix = CACHE_KEY_PREFIX; }
        this.prefix = prefix;
        this.client_id = data.client_id;
        this.scope = data.scope;
        this.audience = data.audience;
    }
    /**
     * Converts this `CacheKey` instance into a string for use in a cache
     * @returns A string representation of the key
     */
    CacheKey.prototype.toKey = function () {
        return this.prefix + "::" + this.client_id + "::" + this.audience + "::" + this.scope;
    };
    /**
     * Converts a cache key string into a `CacheKey` instance.
     * @param key The key to convert
     * @returns An instance of `CacheKey`
     */
    CacheKey.fromKey = function (key) {
        var _a = __read(key.split('::'), 4), prefix = _a[0], client_id = _a[1], audience = _a[2], scope = _a[3];
        return new CacheKey({ client_id: client_id, scope: scope, audience: audience }, prefix);
    };
    /**
     * Utility function to build a `CacheKey` instance from a cache entry
     * @param entry The entry
     * @returns An instance of `CacheKey`
     */
    CacheKey.fromCacheEntry = function (entry) {
        var scope = entry.scope, audience = entry.audience, client_id = entry.client_id;
        return new CacheKey({
            scope: scope,
            audience: audience,
            client_id: client_id
        });
    };
    return CacheKey;
}());

var LocalStorageCache = /** @class */ (function () {
    function LocalStorageCache() {
    }
    LocalStorageCache.prototype.set = function (key, entry) {
        localStorage.setItem(key, JSON.stringify(entry));
    };
    LocalStorageCache.prototype.get = function (key) {
        var json = window.localStorage.getItem(key);
        if (!json)
            return;
        try {
            var payload = JSON.parse(json);
            return payload;
        }
        catch (e) {
            /* istanbul ignore next */
            return;
        }
    };
    LocalStorageCache.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageCache.prototype.allKeys = function () {
        return Object.keys(window.localStorage).filter(function (key) {
            return key.startsWith(CACHE_KEY_PREFIX);
        });
    };
    return LocalStorageCache;
}());

var InMemoryCache = /** @class */ (function () {
    function InMemoryCache() {
        this.enclosedCache = (function () {
            var cache = {};
            return {
                set: function (key, entry) {
                    cache[key] = entry;
                },
                get: function (key) {
                    var cacheEntry = cache[key];
                    if (!cacheEntry) {
                        return;
                    }
                    return cacheEntry;
                },
                remove: function (key) {
                    delete cache[key];
                },
                allKeys: function () {
                    return Object.keys(cache);
                }
            };
        })();
    }
    return InMemoryCache;
}());

var CacheKeyManifest = /** @class */ (function () {
    function CacheKeyManifest(cache, clientId) {
        this.cache = cache;
        this.clientId = clientId;
        this.manifestKey = this.createManifestKeyFrom(clientId);
    }
    CacheKeyManifest.prototype.add = function (key) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var keys, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = Set.bind;
                        return [4 /*yield*/, this.cache.get(this.manifestKey)];
                    case 1:
                        keys = new (_b.apply(Set, [void 0, ((_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.keys) || []]))();
                        keys.add(key);
                        return [4 /*yield*/, this.cache.set(this.manifestKey, {
                                keys: __spreadArray([], __read(keys))
                            })];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheKeyManifest.prototype.remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var entry, keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.get(this.manifestKey)];
                    case 1:
                        entry = _a.sent();
                        if (!entry) return [3 /*break*/, 5];
                        keys = new Set(entry.keys);
                        keys.delete(key);
                        if (!(keys.size > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.cache.set(this.manifestKey, { keys: __spreadArray([], __read(keys)) })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.cache.remove(this.manifestKey)];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CacheKeyManifest.prototype.get = function () {
        return this.cache.get(this.manifestKey);
    };
    CacheKeyManifest.prototype.clear = function () {
        return this.cache.remove(this.manifestKey);
    };
    CacheKeyManifest.prototype.createManifestKeyFrom = function (clientId) {
        return CACHE_KEY_PREFIX + "::" + clientId;
    };
    return CacheKeyManifest;
}());

var DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
var CacheManager = /** @class */ (function () {
    function CacheManager(cache, clientId) {
        this.cache = cache;
        // If the cache implementation doesn't provide an `allKeys` method,
        // use a built-in key manifest.
        if (!cache.allKeys) {
            this.keyManifest = new CacheKeyManifest(this.cache, clientId);
        }
    }
    CacheManager.prototype.get = function (cacheKey, expiryAdjustmentSeconds) {
        var _a;
        if (expiryAdjustmentSeconds === void 0) { expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS; }
        return __awaiter(this, void 0, void 0, function () {
            var wrappedEntry, keys, matchedKey, nowSeconds;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.cache.get(cacheKey.toKey())];
                    case 1:
                        wrappedEntry = _b.sent();
                        if (!!wrappedEntry) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getCacheKeys()];
                    case 2:
                        keys = _b.sent();
                        if (!keys)
                            return [2 /*return*/];
                        matchedKey = this.matchExistingCacheKey(cacheKey, keys);
                        return [4 /*yield*/, this.cache.get(matchedKey)];
                    case 3:
                        wrappedEntry = _b.sent();
                        _b.label = 4;
                    case 4:
                        // If we still don't have an entry, exit.
                        if (!wrappedEntry) {
                            return [2 /*return*/];
                        }
                        nowSeconds = Math.floor(Date.now() / 1000);
                        if (!(wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds)) return [3 /*break*/, 9];
                        if (!wrappedEntry.body.refresh_token) return [3 /*break*/, 6];
                        wrappedEntry.body = {
                            refresh_token: wrappedEntry.body.refresh_token
                        };
                        return [4 /*yield*/, this.cache.set(cacheKey.toKey(), wrappedEntry)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, wrappedEntry.body];
                    case 6: return [4 /*yield*/, this.cache.remove(cacheKey.toKey())];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.remove(cacheKey.toKey()))];
                    case 8:
                        _b.sent();
                        return [2 /*return*/];
                    case 9: return [2 /*return*/, wrappedEntry.body];
                }
            });
        });
    };
    CacheManager.prototype.set = function (entry) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var cacheKey, wrappedEntry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cacheKey = new CacheKey({
                            client_id: entry.client_id,
                            scope: entry.scope,
                            audience: entry.audience
                        });
                        wrappedEntry = this.wrapCacheEntry(entry);
                        return [4 /*yield*/, this.cache.set(cacheKey.toKey(), wrappedEntry)];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.add(cacheKey.toKey()))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CacheManager.prototype.clear = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getCacheKeys()];
                    case 1:
                        keys = _b.sent();
                        /* istanbul ignore next */
                        if (!keys)
                            return [2 /*return*/];
                        keys.forEach(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.cache.remove(key)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.clear())];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Note: only call this if you're sure one of our internal (synchronous) caches are being used.
     */
    CacheManager.prototype.clearSync = function () {
        var _this = this;
        var keys = this.cache.allKeys();
        /* istanbul ignore next */
        if (!keys)
            return;
        keys.forEach(function (key) {
            _this.cache.remove(key);
        });
    };
    CacheManager.prototype.wrapCacheEntry = function (entry) {
        var expiresInTime = Math.floor(Date.now() / 1000) + entry.expires_in;
        var expirySeconds = Math.min(expiresInTime, entry.decodedToken.claims.exp);
        return {
            body: entry,
            expiresAt: expirySeconds
        };
    };
    CacheManager.prototype.getCacheKeys = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.keyManifest) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.keyManifest.get()];
                    case 1:
                        _b = (_a = (_c.sent())) === null || _a === void 0 ? void 0 : _a.keys;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.cache.allKeys()];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/, _b];
                }
            });
        });
    };
    /**
     * Finds the corresponding key in the cache based on the provided cache key.
     * The keys inside the cache are in the format {prefix}::{client_id}::{audience}::{scope}.
     * The first key in the cache that satisfies the following conditions is returned
     *  - `prefix` is strict equal to Auth0's internally configured `keyPrefix`
     *  - `client_id` is strict equal to the `cacheKey.client_id`
     *  - `audience` is strict equal to the `cacheKey.audience`
     *  - `scope` contains at least all the `cacheKey.scope` values
     *  *
     * @param keyToMatch The provided cache key
     * @param allKeys A list of existing cache keys
     */
    CacheManager.prototype.matchExistingCacheKey = function (keyToMatch, allKeys) {
        return allKeys.filter(function (key) {
            var cacheKey = CacheKey.fromKey(key);
            var scopeSet = new Set(cacheKey.scope && cacheKey.scope.split(' '));
            var scopesToMatch = keyToMatch.scope.split(' ');
            var hasAllScopes = cacheKey.scope &&
                scopesToMatch.reduce(function (acc, current) { return acc && scopeSet.has(current); }, true);
            return (cacheKey.prefix === CACHE_KEY_PREFIX &&
                cacheKey.client_id === keyToMatch.client_id &&
                cacheKey.audience === keyToMatch.audience &&
                hasAllScopes);
        })[0];
    };
    return CacheManager;
}());

var TRANSACTION_STORAGE_KEY = 'a0.spajs.txs';
var TransactionManager = /** @class */ (function () {
    function TransactionManager(storage) {
        this.storage = storage;
        this.transaction = this.storage.get(TRANSACTION_STORAGE_KEY);
    }
    TransactionManager.prototype.create = function (transaction) {
        this.transaction = transaction;
        this.storage.save(TRANSACTION_STORAGE_KEY, transaction, {
            daysUntilExpire: 1
        });
    };
    TransactionManager.prototype.get = function () {
        return this.transaction;
    };
    TransactionManager.prototype.remove = function () {
        delete this.transaction;
        this.storage.remove(TRANSACTION_STORAGE_KEY);
    };
    return TransactionManager;
}());

var isNumber = function (n) { return typeof n === 'number'; };
var idTokendecoded = [
    'iss',
    'aud',
    'exp',
    'nbf',
    'iat',
    'jti',
    'azp',
    'nonce',
    'auth_time',
    'at_hash',
    'c_hash',
    'acr',
    'amr',
    'sub_jwk',
    'cnf',
    'sip_from_tag',
    'sip_date',
    'sip_callid',
    'sip_cseq_num',
    'sip_via_branch',
    'orig',
    'dest',
    'mky',
    'events',
    'toe',
    'txn',
    'rph',
    'sid',
    'vot',
    'vtm'
];
var decode = function (token) {
    var parts = token.split('.');
    var _a = __read(parts, 3), header = _a[0], payload = _a[1], signature = _a[2];
    if (parts.length !== 3 || !header || !payload || !signature) {
        throw new Error('ID token could not be decoded');
    }
    var payloadJSON = JSON.parse(urlDecodeB64(payload));
    var claims = { __raw: token };
    var user = {};
    Object.keys(payloadJSON).forEach(function (k) {
        claims[k] = payloadJSON[k];
        if (!idTokendecoded.includes(k)) {
            user[k] = payloadJSON[k];
        }
    });
    return {
        encoded: { header: header, payload: payload, signature: signature },
        header: JSON.parse(urlDecodeB64(header)),
        claims: claims,
        user: user
    };
};
var verify = function (options) {
    if (!options.id_token) {
        throw new Error('ID token is required but missing');
    }
    var decoded = decode(options.id_token);
    if (!decoded.claims.iss) {
        throw new Error('Issuer (iss) claim must be a string present in the ID token');
    }
    if (decoded.claims.iss !== options.iss) {
        throw new Error("Issuer (iss) claim mismatch in the ID token; expected \"" + options.iss + "\", found \"" + decoded.claims.iss + "\"");
    }
    if (!decoded.user.sub) {
        throw new Error('Subject (sub) claim must be a string present in the ID token');
    }
    if (decoded.header.alg !== 'RS256') {
        throw new Error("Signature algorithm of \"" + decoded.header.alg + "\" is not supported. Expected the ID token to be signed with \"RS256\".");
    }
    if (!decoded.claims.aud ||
        !(typeof decoded.claims.aud === 'string' ||
            Array.isArray(decoded.claims.aud))) {
        throw new Error('Audience (aud) claim must be a string or array of strings present in the ID token');
    }
    if (Array.isArray(decoded.claims.aud)) {
        if (!decoded.claims.aud.includes(options.aud)) {
            throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but was not one of \"" + decoded.claims.aud.join(', ') + "\"");
        }
        if (decoded.claims.aud.length > 1) {
            if (!decoded.claims.azp) {
                throw new Error('Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values');
            }
            if (decoded.claims.azp !== options.aud) {
                throw new Error("Authorized Party (azp) claim mismatch in the ID token; expected \"" + options.aud + "\", found \"" + decoded.claims.azp + "\"");
            }
        }
    }
    else if (decoded.claims.aud !== options.aud) {
        throw new Error("Audience (aud) claim mismatch in the ID token; expected \"" + options.aud + "\" but found \"" + decoded.claims.aud + "\"");
    }
    if (options.nonce) {
        if (!decoded.claims.nonce) {
            throw new Error('Nonce (nonce) claim must be a string present in the ID token');
        }
        if (decoded.claims.nonce !== options.nonce) {
            throw new Error("Nonce (nonce) claim mismatch in the ID token; expected \"" + options.nonce + "\", found \"" + decoded.claims.nonce + "\"");
        }
    }
    if (options.max_age && !isNumber(decoded.claims.auth_time)) {
        throw new Error('Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified');
    }
    /* istanbul ignore next */
    if (!isNumber(decoded.claims.exp)) {
        throw new Error('Expiration Time (exp) claim must be a number present in the ID token');
    }
    if (!isNumber(decoded.claims.iat)) {
        throw new Error('Issued At (iat) claim must be a number present in the ID token');
    }
    var leeway = options.leeway || 60;
    var now = new Date(Date.now());
    var expDate = new Date(0);
    var nbfDate = new Date(0);
    var authTimeDate = new Date(0);
    authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
    expDate.setUTCSeconds(decoded.claims.exp + leeway);
    nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
    if (now > expDate) {
        throw new Error("Expiration Time (exp) claim error in the ID token; current time (" + now + ") is after expiration time (" + expDate + ")");
    }
    if (isNumber(decoded.claims.nbf) && now < nbfDate) {
        throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" + now + ") is before " + nbfDate);
    }
    if (isNumber(decoded.claims.auth_time) && now > authTimeDate) {
        throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (" + now + ") is after last auth at " + authTimeDate);
    }
    if (options.organizationId) {
        if (!decoded.claims.org_id) {
            throw new Error('Organization ID (org_id) claim must be a string present in the ID token');
        }
        else if (options.organizationId !== decoded.claims.org_id) {
            throw new Error("Organization ID (org_id) claim mismatch in the ID token; expected \"" + options.organizationId + "\", found \"" + decoded.claims.org_id + "\"");
        }
    }
    return decoded;
};

/**
 * A storage protocol for marshalling data to/from cookies
 */
var CookieStorage = {
    get: function (key) {
        var value = Cookies__namespace.get(key);
        if (typeof value === 'undefined') {
            return;
        }
        return JSON.parse(value);
    },
    save: function (key, value, options) {
        var cookieAttributes = {};
        if ('https:' === window.location.protocol) {
            cookieAttributes = {
                secure: true,
                sameSite: 'none'
            };
        }
        cookieAttributes.expires = options.daysUntilExpire;
        Cookies__namespace.set(key, JSON.stringify(value), cookieAttributes);
    },
    remove: function (key) {
        Cookies__namespace.remove(key);
    }
};
/**
 * @ignore
 */
var LEGACY_PREFIX = '_legacy_';
/**
 * Cookie storage that creates a cookie for modern and legacy browsers.
 * See: https://web.dev/samesite-cookie-recipes/#handling-incompatible-clients
 */
var CookieStorageWithLegacySameSite = {
    get: function (key) {
        var value = CookieStorage.get(key);
        if (value) {
            return value;
        }
        return CookieStorage.get("" + LEGACY_PREFIX + key);
    },
    save: function (key, value, options) {
        var cookieAttributes = {};
        if ('https:' === window.location.protocol) {
            cookieAttributes = { secure: true };
        }
        cookieAttributes.expires = options.daysUntilExpire;
        Cookies__namespace.set("" + LEGACY_PREFIX + key, JSON.stringify(value), cookieAttributes);
        CookieStorage.save(key, value, options);
    },
    remove: function (key) {
        CookieStorage.remove(key);
        CookieStorage.remove("" + LEGACY_PREFIX + key);
    }
};
/**
 * A storage protocol for marshalling data to/from session storage
 */
var SessionStorage = {
    get: function (key) {
        if (typeof sessionStorage === 'undefined') {
            return;
        }
        var value = sessionStorage.getItem(key);
        if (typeof value === 'undefined') {
            return;
        }
        return JSON.parse(value);
    },
    save: function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    remove: function (key) {
        sessionStorage.removeItem(key);
    }
};

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIC8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKg0KICAgIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLg0KDQogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55DQogICAgcHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLg0KDQogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgNCiAgICBSRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkNCiAgICBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsDQogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NDQogICAgTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1INCiAgICBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SDQogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4NCiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLw0KDQogICAgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7DQogICAgICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7DQogICAgICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHsNCiAgICAgICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldOw0KICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07DQogICAgICAgICAgICB9DQogICAgICAgICAgICByZXR1cm4gdDsNCiAgICAgICAgfTsNCiAgICAgICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7DQogICAgfTsNCg0KICAgIGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHsNCiAgICAgICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9DQogICAgICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgew0KICAgICAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQ0KICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbInRocm93Il0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfQ0KICAgICAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH0NCiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTsNCiAgICAgICAgfSk7DQogICAgfQ0KDQogICAgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkgew0KICAgICAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnOw0KICAgICAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgInRocm93IjogdmVyYigxKSwgInJldHVybiI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gImZ1bmN0aW9uIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZzsNCiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9DQogICAgICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHsNCiAgICAgICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7DQogICAgICAgICAgICB3aGlsZSAoXykgdHJ5IHsNCiAgICAgICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5WyJyZXR1cm4iXSA6IG9wWzBdID8geVsidGhyb3ciXSB8fCAoKHQgPSB5WyJyZXR1cm4iXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7DQogICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdOw0KICAgICAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlOw0KICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Og0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7DQogICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTsNCiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH0NCiAgICAgICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9Ow0KICAgICAgICB9DQogICAgfQ0KDQogICAgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHsNCiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSAiZnVuY3Rpb24iICYmIG9bU3ltYm9sLml0ZXJhdG9yXTsNCiAgICAgICAgaWYgKCFtKSByZXR1cm4gbzsNCiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7DQogICAgICAgIHRyeSB7DQogICAgICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTsNCiAgICAgICAgfQ0KICAgICAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH0NCiAgICAgICAgZmluYWxseSB7DQogICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpWyJyZXR1cm4iXSkpIG0uY2FsbChpKTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfQ0KICAgICAgICB9DQogICAgICAgIHJldHVybiBhcjsNCiAgICB9CgogICAgLyoqDQogICAgICogQGlnbm9yZQ0KICAgICAqLw0KICAgIHZhciBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSA9ICdUaGUgd2ViIHdvcmtlciBpcyBtaXNzaW5nIHRoZSByZWZyZXNoIHRva2VuJzsKCiAgICB2YXIgcmVmcmVzaFRva2VucyA9IHt9Ow0KICAgIHZhciBjYWNoZUtleSA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsgcmV0dXJuIGF1ZGllbmNlICsgInwiICsgc2NvcGU7IH07DQogICAgdmFyIGdldFJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsNCiAgICAgICAgcmV0dXJuIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07DQogICAgfTsNCiAgICB2YXIgc2V0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24gKHJlZnJlc2hUb2tlbiwgYXVkaWVuY2UsIHNjb3BlKSB7IHJldHVybiAocmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXSA9IHJlZnJlc2hUb2tlbik7IH07DQogICAgdmFyIGRlbGV0ZVJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uIChhdWRpZW5jZSwgc2NvcGUpIHsNCiAgICAgICAgcmV0dXJuIGRlbGV0ZSByZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldOw0KICAgIH07DQogICAgdmFyIHdhaXQgPSBmdW5jdGlvbiAodGltZSkgew0KICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7IH0pOw0KICAgIH07DQogICAgdmFyIG1lc3NhZ2VIYW5kbGVyID0gZnVuY3Rpb24gKF9hKSB7DQogICAgICAgIHZhciBfYiA9IF9hLmRhdGEsIHRpbWVvdXQgPSBfYi50aW1lb3V0LCBhdXRoID0gX2IuYXV0aCwgZmV0Y2hVcmwgPSBfYi5mZXRjaFVybCwgZmV0Y2hPcHRpb25zID0gX2IuZmV0Y2hPcHRpb25zLCBfYyA9IF9fcmVhZChfYS5wb3J0cywgMSksIHBvcnQgPSBfY1swXTsNCiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7DQogICAgICAgICAgICB2YXIganNvbiwgX2QsIGF1ZGllbmNlLCBzY29wZSwgYm9keSwgcmVmcmVzaFRva2VuLCBhYm9ydENvbnRyb2xsZXIsIHJlc3BvbnNlLCBlcnJvcl8xLCBlcnJvcl8yOw0KICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkgew0KICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOg0KICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSBhdXRoIHx8IHt9LCBhdWRpZW5jZSA9IF9kLmF1ZGllbmNlLCBzY29wZSA9IF9kLnNjb3BlOw0KICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAxOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDE6DQogICAgICAgICAgICAgICAgICAgICAgICBfZS50cnlzLnB1c2goWzEsIDcsICwgOF0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgYm9keSA9IEpTT04ucGFyc2UoZmV0Y2hPcHRpb25zLmJvZHkpOw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib2R5LnJlZnJlc2hfdG9rZW4gJiYgYm9keS5ncmFudF90eXBlID09PSAncmVmcmVzaF90b2tlbicpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KF9fYXNzaWduKF9fYXNzaWduKHt9LCBib2R5KSwgeyByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4gfSkpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyID0gdm9pZCAwOw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICdmdW5jdGlvbicpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLnNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHZvaWQgMDsNCiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMjsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOg0KICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmFjZShbDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXQodGltZW91dCksDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoKGZldGNoVXJsLCBfX2Fzc2lnbih7fSwgZmV0Y2hPcHRpb25zKSkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgMzoNCiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Uuc2VudCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNDoNCiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfZS5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgICAgICAvLyBmZXRjaCBlcnJvciwgcmVqZWN0IGBzZW5kTWVzc2FnZWAgdXNpbmcgYGVycm9yYCBrZXkgc28gdGhhdCB3ZSByZXRyeS4NCiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLm1lc3NhZ2UNCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDU6DQogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LCBhYm9ydCBpdCBhbmQgbGV0IGBzd2l0Y2hGZXRjaGAgcmFpc2UgdGhlIGVycm9yLg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhYm9ydENvbnRyb2xsZXIpDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogIlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyINCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNwb25zZS5qc29uKCldOw0KICAgICAgICAgICAgICAgICAgICBjYXNlIDY6DQogICAgICAgICAgICAgICAgICAgICAgICBqc29uID0gX2Uuc2VudCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24ucmVmcmVzaF90b2tlbikgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlZnJlc2hUb2tlbihhdWRpZW5jZSwgc2NvcGUpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgb2s6IHJlc3BvbnNlLm9rLA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb246IGpzb24NCiAgICAgICAgICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07DQogICAgICAgICAgICAgICAgICAgIGNhc2UgNzoNCiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfZS5zZW50KCk7DQogICAgICAgICAgICAgICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvazogZmFsc2UsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAganNvbjogew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl9kZXNjcmlwdGlvbjogZXJyb3JfMi5tZXNzYWdlDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICAgICAgfSk7DQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTsNCiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qL107DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfSk7DQogICAgICAgIH0pOw0KICAgIH07DQogICAgLy8gRG9uJ3QgcnVuIGBhZGRFdmVudExpc3RlbmVyYCBpbiBvdXIgdGVzdHMgKHRoaXMgaXMgcmVwbGFjZWQgaW4gcm9sbHVwKQ0KICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqLw0KICAgIHsNCiAgICAgICAgLy8gQHRzLWlnbm9yZQ0KICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWVzc2FnZUhhbmRsZXIpOw0KICAgIH0KCn0oKSk7Cgo=', null, false);
/* eslint-enable */

var isIE11 = function () { return /Trident.*rv:11\.0/.test(navigator.userAgent); };

var singlePromiseMap = {};
var singlePromise = function (cb, key) {
    var promise = singlePromiseMap[key];
    if (!promise) {
        promise = cb().finally(function () {
            delete singlePromiseMap[key];
            promise = null;
        });
        singlePromiseMap[key] = promise;
    }
    return promise;
};
var retryPromise = function (cb, maxNumberOfRetries) {
    if (maxNumberOfRetries === void 0) { maxNumberOfRetries = 3; }
    return __awaiter(void 0, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < maxNumberOfRetries)) return [3 /*break*/, 4];
                    return [4 /*yield*/, cb()];
                case 2:
                    if (_a.sent()) {
                        return [2 /*return*/, true];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, false];
            }
        });
    });
};

/**
 * @ignore
 */
var lock = new Lock__default['default']();
/**
 * @ignore
 */
var GET_TOKEN_SILENTLY_LOCK_KEY = 'auth0.lock.getTokenSilently';
/**
 * @ignore
 */
var cacheLocationBuilders = {
    memory: function () { return new InMemoryCache().enclosedCache; },
    localstorage: function () { return new LocalStorageCache(); }
};
/**
 * @ignore
 */
var cacheFactory = function (location) {
    return cacheLocationBuilders[location];
};
/**
 * @ignore
 */
var supportWebWorker = function () { return !isIE11(); };
/**
 * @ignore
 */
var getTokenIssuer = function (issuer, domainUrl) {
    if (issuer) {
        return issuer.startsWith('https://') ? issuer : "https://" + issuer + "/";
    }
    return domainUrl + "/";
};
/**
 * @ignore
 */
var getCustomInitialOptions = function (options) {
    options.advancedOptions; options.audience; options.auth0Client; options.authorizeTimeoutInSeconds; options.cacheLocation; options.client_id; options.domain; options.issuer; options.leeway; options.max_age; options.redirect_uri; options.scope; options.useRefreshTokens; var customParams = __rest(options, ["advancedOptions", "audience", "auth0Client", "authorizeTimeoutInSeconds", "cacheLocation", "client_id", "domain", "issuer", "leeway", "max_age", "redirect_uri", "scope", "useRefreshTokens"]);
    return customParams;
};
/**
 * Auth0 SDK for Single Page Applications using [Authorization Code Grant Flow with PKCE](https://auth0.com/docs/api-auth/tutorials/authorization-code-grant-pkce).
 */
var Auth0Client = /** @class */ (function () {
    function Auth0Client(options) {
        var _a, _b;
        this.options = options;
        typeof window !== 'undefined' && validateCrypto();
        if (options.cache && options.cacheLocation) {
            console.warn('Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.');
        }
        var cache;
        if (options.cache) {
            cache = options.cache;
        }
        else {
            this.cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
            if (!cacheFactory(this.cacheLocation)) {
                throw new Error("Invalid cache location \"" + this.cacheLocation + "\"");
            }
            cache = cacheFactory(this.cacheLocation)();
        }
        this.cookieStorage =
            options.legacySameSiteCookie === false
                ? CookieStorage
                : CookieStorageWithLegacySameSite;
        this.sessionCheckExpiryDays =
            options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
        var transactionStorage = options.useCookiesForTransactions
            ? this.cookieStorage
            : SessionStorage;
        this.scope = this.options.scope;
        this.transactionManager = new TransactionManager(transactionStorage);
        this.cacheManager = new CacheManager(cache, this.options.client_id);
        this.domainUrl = "https://" + this.options.domain;
        this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
        this.defaultScope = getUniqueScopes('openid', ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.advancedOptions) === null || _b === void 0 ? void 0 : _b.defaultScope) !== undefined
            ? this.options.advancedOptions.defaultScope
            : DEFAULT_SCOPE);
        // If using refresh tokens, automatically specify the `offline_access` scope.
        // Note we cannot add this to 'defaultScope' above as the scopes are used in the
        // cache keys - changing the order could invalidate the keys
        if (this.options.useRefreshTokens) {
            this.scope = getUniqueScopes(this.scope, 'offline_access');
        }
        // Don't use web workers unless using refresh tokens in memory and not IE11
        if (typeof window !== 'undefined' &&
            window.Worker &&
            this.options.useRefreshTokens &&
            this.cacheLocation === CACHE_LOCATION_MEMORY &&
            supportWebWorker()) {
            this.worker = new WorkerFactory();
        }
        this.customOptions = getCustomInitialOptions(options);
    }
    Auth0Client.prototype._url = function (path) {
        var auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || DEFAULT_AUTH0_CLIENT)));
        return "" + this.domainUrl + path + "&auth0Client=" + auth0Client;
    };
    Auth0Client.prototype._getParams = function (authorizeOptions, state, nonce, code_challenge, redirect_uri) {
        var _a = this.options; _a.domain; _a.leeway; _a.useRefreshTokens; _a.useCookiesForTransactions; _a.auth0Client; _a.cacheLocation; _a.advancedOptions; var withoutDomain = __rest(_a, ["domain", "leeway", "useRefreshTokens", "useCookiesForTransactions", "auth0Client", "cacheLocation", "advancedOptions"]);
        return __assign(__assign(__assign({}, withoutDomain), authorizeOptions), { scope: getUniqueScopes(this.defaultScope, this.scope, authorizeOptions.scope), response_type: 'code', response_mode: 'query', state: state,
            nonce: nonce, redirect_uri: redirect_uri || this.options.redirect_uri, code_challenge: code_challenge, code_challenge_method: 'S256' });
    };
    Auth0Client.prototype._authorizeUrl = function (authorizeOptions) {
        return this._url("/authorize?" + createQueryParams(authorizeOptions));
    };
    Auth0Client.prototype._verifyIdToken = function (id_token, nonce, organizationId) {
        return verify({
            iss: this.tokenIssuer,
            aud: this.options.client_id,
            id_token: id_token,
            nonce: nonce,
            organizationId: organizationId,
            leeway: this.options.leeway,
            max_age: this._parseNumber(this.options.max_age)
        });
    };
    Auth0Client.prototype._parseNumber = function (value) {
        if (typeof value !== 'string') {
            return value;
        }
        return parseInt(value, 10) || undefined;
    };
    /**
     * ```js
     * await auth0.buildAuthorizeUrl(options);
     * ```
     *
     * Builds an `/authorize` URL for loginWithRedirect using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated.
     *
     * @param options
     */
    Auth0Client.prototype.buildAuthorizeUrl = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var redirect_uri, appState, authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, fragment, params, url, organizationId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        redirect_uri = options.redirect_uri, appState = options.appState, authorizeOptions = __rest(options, ["redirect_uri", "appState"]);
                        stateIn = encode(createRandomString());
                        nonceIn = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [4 /*yield*/, sha256(code_verifier)];
                    case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        fragment = options.fragment ? "#" + options.fragment : '';
                        params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, redirect_uri);
                        url = this._authorizeUrl(params);
                        organizationId = options.organization || this.options.organization;
                        this.transactionManager.create(__assign({ nonce: nonceIn, code_verifier: code_verifier,
                            appState: appState, scope: params.scope, audience: params.audience || 'default', redirect_uri: params.redirect_uri }, (organizationId && { organizationId: organizationId })));
                        return [2 /*return*/, url + fragment];
                }
            });
        });
    };
    /**
     * ```js
     * try {
     *  await auth0.loginWithPopup(options);
     * } catch(e) {
     *  if (e instanceof PopupCancelledError) {
     *    // Popup was closed before login completed
     *  }
     * }
     * ```
     *
     * Opens a popup with the `/authorize` URL using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated. If the response is successful,
     * results will be valid according to their expiration times.
     *
     * IMPORTANT: This method has to be called from an event handler
     * that was started by the user like a button click, for example,
     * otherwise the popup will be blocked in most browsers.
     *
     * @param options
     * @param config
     */
    Auth0Client.prototype.loginWithPopup = function (options, config) {
        return __awaiter(this, void 0, void 0, function () {
            var authorizeOptions, stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, codeResult, authResult, organizationId, decodedToken, cacheEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = options || {};
                        config = config || {};
                        if (!config.popup) {
                            config.popup = openPopup('');
                        }
                        authorizeOptions = __rest(options, []);
                        stateIn = encode(createRandomString());
                        nonceIn = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [4 /*yield*/, sha256(code_verifier)];
                    case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        params = this._getParams(authorizeOptions, stateIn, nonceIn, code_challenge, this.options.redirect_uri || window.location.origin);
                        url = this._authorizeUrl(__assign(__assign({}, params), { response_mode: 'web_message' }));
                        config.popup.location.href = url;
                        return [4 /*yield*/, runPopup(__assign(__assign({}, config), { timeoutInSeconds: config.timeoutInSeconds ||
                                    this.options.authorizeTimeoutInSeconds ||
                                    DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS }))];
                    case 2:
                        codeResult = _a.sent();
                        if (stateIn !== codeResult.state) {
                            throw new Error('Invalid state');
                        }
                        return [4 /*yield*/, oauthToken({
                                audience: params.audience,
                                scope: params.scope,
                                baseUrl: this.domainUrl,
                                client_id: this.options.client_id,
                                code_verifier: code_verifier,
                                code: codeResult.code,
                                grant_type: 'authorization_code',
                                redirect_uri: params.redirect_uri,
                                auth0Client: this.options.auth0Client
                            }, this.worker)];
                    case 3:
                        authResult = _a.sent();
                        organizationId = options.organization || this.options.organization;
                        decodedToken = this._verifyIdToken(authResult.id_token, nonceIn, organizationId);
                        cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default', client_id: this.options.client_id });
                        return [4 /*yield*/, this.cacheManager.set(cacheEntry)];
                    case 4:
                        _a.sent();
                        this.cookieStorage.save('auth0.is.authenticated', true, {
                            daysUntilExpire: this.sessionCheckExpiryDays
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ```js
     * const user = await auth0.getUser();
     * ```
     *
     * Returns the user information if available (decoded
     * from the `id_token`).
     *
     * If you provide an audience or scope, they should match an existing Access Token
     * (the SDK stores a corresponding ID Token with every Access Token, and uses the
     * scope and audience to look up the ID Token)
     *
     * @typeparam TUser The type to return, has to extend {@link User}.
     * @param options
     */
    Auth0Client.prototype.getUser = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var audience, scope, cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audience = options.audience || this.options.audience || 'default';
                        scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                        return [4 /*yield*/, this.cacheManager.get(new CacheKey({
                                client_id: this.options.client_id,
                                audience: audience,
                                scope: scope
                            }))];
                    case 1:
                        cache = _a.sent();
                        return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.user];
                }
            });
        });
    };
    /**
     * ```js
     * const claims = await auth0.getIdTokenClaims();
     * ```
     *
     * Returns all claims from the id_token if available.
     *
     * If you provide an audience or scope, they should match an existing Access Token
     * (the SDK stores a corresponding ID Token with every Access Token, and uses the
     * scope and audience to look up the ID Token)
     *
     * @param options
     */
    Auth0Client.prototype.getIdTokenClaims = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var audience, scope, cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        audience = options.audience || this.options.audience || 'default';
                        scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                        return [4 /*yield*/, this.cacheManager.get(new CacheKey({
                                client_id: this.options.client_id,
                                audience: audience,
                                scope: scope
                            }))];
                    case 1:
                        cache = _a.sent();
                        return [2 /*return*/, cache && cache.decodedToken && cache.decodedToken.claims];
                }
            });
        });
    };
    /**
     * ```js
     * await auth0.loginWithRedirect(options);
     * ```
     *
     * Performs a redirect to `/authorize` using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated.
     *
     * @param options
     */
    Auth0Client.prototype.loginWithRedirect = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var redirectMethod, urlOptions, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        redirectMethod = options.redirectMethod, urlOptions = __rest(options, ["redirectMethod"]);
                        return [4 /*yield*/, this.buildAuthorizeUrl(urlOptions)];
                    case 1:
                        url = _a.sent();
                        window.location[redirectMethod || 'assign'](url);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * After the browser redirects back to the callback page,
     * call `handleRedirectCallback` to handle success and error
     * responses from Auth0. If the response is successful, results
     * will be valid according to their expiration times.
     */
    Auth0Client.prototype.handleRedirectCallback = function (url) {
        if (url === void 0) { url = window.location.href; }
        return __awaiter(this, void 0, void 0, function () {
            var queryStringFragments, _a, state, code, error, error_description, transaction, tokenOptions, authResult, decodedToken, cacheEntry;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        queryStringFragments = url.split('?').slice(1);
                        if (queryStringFragments.length === 0) {
                            throw new Error('There are no query params available for parsing.');
                        }
                        _a = parseQueryResult(queryStringFragments.join('')), state = _a.state, code = _a.code, error = _a.error, error_description = _a.error_description;
                        transaction = this.transactionManager.get();
                        // Transaction should have a `code_verifier` to do PKCE for CSRF protection
                        if (!transaction || !transaction.code_verifier) {
                            throw new Error('Invalid state');
                        }
                        this.transactionManager.remove();
                        if (error) {
                            throw new AuthenticationError(error, error_description, state, transaction.appState);
                        }
                        tokenOptions = {
                            audience: transaction.audience,
                            scope: transaction.scope,
                            baseUrl: this.domainUrl,
                            client_id: this.options.client_id,
                            code_verifier: transaction.code_verifier,
                            grant_type: 'authorization_code',
                            code: code,
                            auth0Client: this.options.auth0Client
                        };
                        // some old versions of the SDK might not have added redirect_uri to the
                        // transaction, we dont want the key to be set to undefined.
                        if (undefined !== transaction.redirect_uri) {
                            tokenOptions.redirect_uri = transaction.redirect_uri;
                        }
                        return [4 /*yield*/, oauthToken(tokenOptions, this.worker)];
                    case 1:
                        authResult = _b.sent();
                        decodedToken = this._verifyIdToken(authResult.id_token, transaction.nonce, transaction.organizationId);
                        cacheEntry = __assign(__assign({}, authResult), { decodedToken: decodedToken, audience: transaction.audience, scope: transaction.scope, client_id: this.options.client_id });
                        return [4 /*yield*/, this.cacheManager.set(cacheEntry)];
                    case 2:
                        _b.sent();
                        this.cookieStorage.save('auth0.is.authenticated', true, {
                            daysUntilExpire: this.sessionCheckExpiryDays
                        });
                        return [2 /*return*/, {
                                appState: transaction.appState
                            }];
                }
            });
        });
    };
    /**
     * ```js
     * await auth0.checkSession();
     * ```
     *
     * Check if the user is logged in using `getTokenSilently`. The difference
     * with `getTokenSilently` is that this doesn't return a token, but it will
     * pre-fill the token cache.
     *
     * This method also heeds the `auth0.is.authenticated` cookie, as an optimization
     *  to prevent calling Auth0 unnecessarily. If the cookie is not present because
     * there was no previous login (or it has expired) then tokens will not be refreshed.
     *
     * It should be used for silently logging in the user when you instantiate the
     * `Auth0Client` constructor. You should not need this if you are using the
     * `createAuth0Client` factory.
     *
     * @param options
     */
    Auth0Client.prototype.checkSession = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cookieStorage.get('auth0.is.authenticated')) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getTokenSilently(options)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        if (!RECOVERABLE_ERRORS.includes(error_1.error)) {
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ```js
     * const token = await auth0.getTokenSilently(options);
     * ```
     *
     * If there's a valid token stored, return it. Otherwise, opens an
     * iframe with the `/authorize` URL using the parameters provided
     * as arguments. Random and secure `state` and `nonce` parameters
     * will be auto-generated. If the response is successful, results
     * will be valid according to their expiration times.
     *
     * If refresh tokens are used, the token endpoint is called directly with the
     * 'refresh_token' grant. If no refresh token is available to make this call,
     * the SDK falls back to using an iframe to the '/authorize' URL.
     *
     * This method may use a web worker to perform the token call if the in-memory
     * cache is used.
     *
     * If an `audience` value is given to this function, the SDK always falls
     * back to using an iframe to make the token exchange.
     *
     * Note that in all cases, falling back to an iframe requires access to
     * the `auth0` cookie.
     *
     * @param options
     */
    Auth0Client.prototype.getTokenSilently = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, ignoreCache, getTokenOptions;
            var _this = this;
            return __generator(this, function (_b) {
                _a = __assign(__assign({ audience: this.options.audience, ignoreCache: false }, options), { scope: getUniqueScopes(this.defaultScope, this.scope, options.scope) }), ignoreCache = _a.ignoreCache, getTokenOptions = __rest(_a, ["ignoreCache"]);
                return [2 /*return*/, singlePromise(function () {
                        return _this._getTokenSilently(__assign({ ignoreCache: ignoreCache }, getTokenOptions));
                    }, this.options.client_id + "::" + getTokenOptions.audience + "::" + getTokenOptions.scope)];
            });
        });
    };
    Auth0Client.prototype._getTokenSilently = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var ignoreCache, getTokenOptions, getAccessTokenFromCache, accessToken, accessToken, authResult, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ignoreCache = options.ignoreCache, getTokenOptions = __rest(options, ["ignoreCache"]);
                        getAccessTokenFromCache = function () { return __awaiter(_this, void 0, void 0, function () {
                            var cache;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.cacheManager.get(new CacheKey({
                                            scope: getTokenOptions.scope,
                                            audience: getTokenOptions.audience || 'default',
                                            client_id: this.options.client_id
                                        }), 60 // get a new token if within 60 seconds of expiring
                                        )];
                                    case 1:
                                        cache = _a.sent();
                                        return [2 /*return*/, cache && cache.access_token];
                                }
                            });
                        }); };
                        if (!!ignoreCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, getAccessTokenFromCache()];
                    case 1:
                        accessToken = _b.sent();
                        if (accessToken) {
                            return [2 /*return*/, accessToken];
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, retryPromise(function () { return lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5000); }, 10)];
                    case 3:
                        if (!_b.sent()) return [3 /*break*/, 15];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, , 12, 14]);
                        if (!!ignoreCache) return [3 /*break*/, 6];
                        return [4 /*yield*/, getAccessTokenFromCache()];
                    case 5:
                        accessToken = _b.sent();
                        if (accessToken) {
                            return [2 /*return*/, accessToken];
                        }
                        _b.label = 6;
                    case 6:
                        if (!this.options.useRefreshTokens) return [3 /*break*/, 8];
                        return [4 /*yield*/, this._getTokenUsingRefreshToken(getTokenOptions)];
                    case 7:
                        _a = _b.sent();
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, this._getTokenFromIFrame(getTokenOptions)];
                    case 9:
                        _a = _b.sent();
                        _b.label = 10;
                    case 10:
                        authResult = _a;
                        return [4 /*yield*/, this.cacheManager.set(__assign({ client_id: this.options.client_id }, authResult))];
                    case 11:
                        _b.sent();
                        this.cookieStorage.save('auth0.is.authenticated', true, {
                            daysUntilExpire: this.sessionCheckExpiryDays
                        });
                        return [2 /*return*/, authResult.access_token];
                    case 12: return [4 /*yield*/, lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY)];
                    case 13:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 16];
                    case 15: throw new TimeoutError();
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ```js
     * const token = await auth0.getTokenWithPopup(options);
     * ```
     * Opens a popup with the `/authorize` URL using the parameters
     * provided as arguments. Random and secure `state` and `nonce`
     * parameters will be auto-generated. If the response is successful,
     * results will be valid according to their expiration times.
     *
     * @param options
     * @param config
     */
    Auth0Client.prototype.getTokenWithPopup = function (options, config) {
        if (options === void 0) { options = {}; }
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options.audience = options.audience || this.options.audience;
                        options.scope = getUniqueScopes(this.defaultScope, this.scope, options.scope);
                        config = __assign(__assign({}, DEFAULT_POPUP_CONFIG_OPTIONS), config);
                        return [4 /*yield*/, this.loginWithPopup(options, config)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cacheManager.get(new CacheKey({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            }))];
                    case 2:
                        cache = _a.sent();
                        return [2 /*return*/, cache.access_token];
                }
            });
        });
    };
    /**
     * ```js
     * const isAuthenticated = await auth0.isAuthenticated();
     * ```
     *
     * Returns `true` if there's valid information stored,
     * otherwise returns `false`.
     *
     */
    Auth0Client.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, !!user];
                }
            });
        });
    };
    /**
     * ```js
     * await auth0.buildLogoutUrl(options);
     * ```
     *
     * Builds a URL to the logout endpoint using the parameters provided as arguments.
     * @param options
     */
    Auth0Client.prototype.buildLogoutUrl = function (options) {
        if (options === void 0) { options = {}; }
        if (options.client_id !== null) {
            options.client_id = options.client_id || this.options.client_id;
        }
        else {
            delete options.client_id;
        }
        var federated = options.federated, logoutOptions = __rest(options, ["federated"]);
        var federatedQuery = federated ? "&federated" : '';
        var url = this._url("/v2/logout?" + createQueryParams(logoutOptions));
        return url + federatedQuery;
    };
    /**
     * ```js
     * auth0.logout();
     * ```
     *
     * Clears the application session and performs a redirect to `/v2/logout`, using
     * the parameters provided as arguments, to clear the Auth0 session.
     *
     * **Note:** If you are using a custom cache, and specifying `localOnly: true`, and you want to perform actions or read state from the SDK immediately after logout, you should `await` the result of calling `logout`.
     *
     * If the `federated` option is specified it also clears the Identity Provider session.
     * If the `localOnly` option is specified, it only clears the application session.
     * It is invalid to set both the `federated` and `localOnly` options to `true`,
     * and an error will be thrown if you do.
     * [Read more about how Logout works at Auth0](https://auth0.com/docs/logout).
     *
     * @param options
     */
    Auth0Client.prototype.logout = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var localOnly = options.localOnly, logoutOptions = __rest(options, ["localOnly"]);
        if (localOnly && logoutOptions.federated) {
            throw new Error('It is invalid to set both the `federated` and `localOnly` options to `true`');
        }
        var postCacheClear = function () {
            _this.cookieStorage.remove('auth0.is.authenticated');
            if (localOnly) {
                return;
            }
            var url = _this.buildLogoutUrl(logoutOptions);
            window.location.assign(url);
        };
        if (this.options.cache) {
            return this.cacheManager.clear().then(function () { return postCacheClear(); });
        }
        else {
            this.cacheManager.clearSync();
            postCacheClear();
        }
    };
    Auth0Client.prototype._getTokenFromIFrame = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var stateIn, nonceIn, code_verifier, code_challengeBuffer, code_challenge, params, url, timeout, codeResult, scope, audience, customOptions, tokenResult, decodedToken, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stateIn = encode(createRandomString());
                        nonceIn = encode(createRandomString());
                        code_verifier = createRandomString();
                        return [4 /*yield*/, sha256(code_verifier)];
                    case 1:
                        code_challengeBuffer = _a.sent();
                        code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
                        params = this._getParams(options, stateIn, nonceIn, code_challenge, options.redirect_uri ||
                            this.options.redirect_uri ||
                            window.location.origin);
                        url = this._authorizeUrl(__assign(__assign({}, params), { prompt: 'none', response_mode: 'web_message' }));
                        timeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, runIframe(url, this.domainUrl, timeout)];
                    case 3:
                        codeResult = _a.sent();
                        if (stateIn !== codeResult.state) {
                            throw new Error('Invalid state');
                        }
                        scope = options.scope, audience = options.audience, options.redirect_uri, options.ignoreCache, options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "redirect_uri", "ignoreCache", "timeoutInSeconds"]);
                        return [4 /*yield*/, oauthToken(__assign(__assign(__assign({}, this.customOptions), customOptions), { scope: scope,
                                audience: audience, baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: code_verifier, code: codeResult.code, grant_type: 'authorization_code', redirect_uri: params.redirect_uri, auth0Client: this.options.auth0Client }), this.worker)];
                    case 4:
                        tokenResult = _a.sent();
                        decodedToken = this._verifyIdToken(tokenResult.id_token, nonceIn);
                        return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: params.scope, audience: params.audience || 'default' })];
                    case 5:
                        e_1 = _a.sent();
                        if (e_1.error === 'login_required') {
                            this.logout({
                                localOnly: true
                            });
                        }
                        throw e_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Auth0Client.prototype._getTokenUsingRefreshToken = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, redirect_uri, tokenResult, scope, audience, customOptions, timeout, e_2, decodedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options.scope = getUniqueScopes(this.defaultScope, this.options.scope, options.scope);
                        return [4 /*yield*/, this.cacheManager.get(new CacheKey({
                                scope: options.scope,
                                audience: options.audience || 'default',
                                client_id: this.options.client_id
                            }))];
                    case 1:
                        cache = _a.sent();
                        if (!((!cache || !cache.refresh_token) && !this.worker)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._getTokenFromIFrame(options)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        redirect_uri = options.redirect_uri ||
                            this.options.redirect_uri ||
                            window.location.origin;
                        scope = options.scope, audience = options.audience, options.ignoreCache, options.timeoutInSeconds, customOptions = __rest(options, ["scope", "audience", "ignoreCache", "timeoutInSeconds"]);
                        timeout = typeof options.timeoutInSeconds === 'number'
                            ? options.timeoutInSeconds * 1000
                            : null;
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 9]);
                        return [4 /*yield*/, oauthToken(__assign(__assign(__assign(__assign(__assign({}, this.customOptions), customOptions), { audience: audience,
                                scope: scope, baseUrl: this.domainUrl, client_id: this.options.client_id, grant_type: 'refresh_token', refresh_token: cache && cache.refresh_token, redirect_uri: redirect_uri }), (timeout && { timeout: timeout })), { auth0Client: this.options.auth0Client }), this.worker)];
                    case 5:
                        tokenResult = _a.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        e_2 = _a.sent();
                        if (!
                        // The web worker didn't have a refresh token in memory so
                        // fallback to an iframe.
                        (e_2.message === MISSING_REFRESH_TOKEN_ERROR_MESSAGE ||
                            // A refresh token was found, but is it no longer valid.
                            // Fallback to an iframe.
                            (e_2.message &&
                                e_2.message.indexOf(INVALID_REFRESH_TOKEN_ERROR_MESSAGE) > -1))) 
                        // The web worker didn't have a refresh token in memory so
                        // fallback to an iframe.
                        return [3 /*break*/, 8];
                        return [4 /*yield*/, this._getTokenFromIFrame(options)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: throw e_2;
                    case 9:
                        decodedToken = this._verifyIdToken(tokenResult.id_token);
                        return [2 /*return*/, __assign(__assign({}, tokenResult), { decodedToken: decodedToken, scope: options.scope, audience: options.audience || 'default' })];
                }
            });
        });
    };
    return Auth0Client;
}());

function createAuth0Client(options) {
    return __awaiter(this, void 0, void 0, function () {
        var auth0;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    auth0 = new Auth0Client(options);
                    return [4 /*yield*/, auth0.checkSession()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, auth0];
            }
        });
    });
}

/**
 * @ignore
 */
var wrapper = createAuth0Client;
wrapper.Auth0Client = Auth0Client;
wrapper.createAuth0Client = createAuth0Client;
wrapper.GenericError = GenericError;
wrapper.AuthenticationError = AuthenticationError;
wrapper.TimeoutError = TimeoutError;
wrapper.PopupTimeoutError = PopupTimeoutError;

module.exports = wrapper;
//# sourceMappingURL=auth0-spa-js.cjs.js.map
