/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index */ "./src/index.js");


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URLSPLITTER = /^((([^:\/]*:)?\/\/)?([^:\/]*)(\:([0-9]*))?)(\/.*)?$/;

/* harmony default export */ __webpack_exports__["a"] = ({URLSPLITTER});

/***/ }),

/***/ "./src/Fetch.js":
/*!**********************!*\
  !*** ./src/Fetch.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");



(function(Global){
	if(typeof Global.fetch !== "function")
		return;	
	const ORGFETCH = Global.fetch;
	Global.fetch = function(aUrl, aRequest){
		let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(aUrl);
		let data = {
			url : aUrl,
			request : aRequest || {},
			metadata : {					
				method : typeof aRequest === "undefined" ? "GET" : (aRequest.method || "GET"),
				origin: match[1] || document.location.origin,
				protocol : (function(match){
					if(typeof match[2] === "undefined" || match[3] == "//")
						return document.location.protocol || "http:";
					else return match[3];			
				}).call(null, match),
				hostname: match[4] || document.location.hostname,
				port: match[6],
				query: match[7],
				async : true						
			}
		};
		
		return _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data)
		.then(function(data){
			return ORGFETCH(data.url, data.request);
		})["catch"](function(error){throw error});
	};
})(window || global || self, undefined, {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const INTERCEPTORS = [];
const CACHE = {};

const getChain = function(aData, aRequest){
	let chain = CACHE[aData.metadata.origin];
	if(typeof chain !== "undefined")
		return Promise.resolve(chain);
	
	let promises = [];
	INTERCEPTORS.forEach(function(aInterceptor){
		let promise = Promise.resolve(aInterceptor.doAccept(aData))
			.then(function(value){
				if(value)
					return aInterceptor;
			});
		promises.push(promise);
	});
	
	return Promise.all(promises)
	.then(function(chain){
		const interceptors = chain.filter(function(interceptor){
			return typeof interceptor !== "undefined";
		});
		
		CACHE[aData.metadata.origin] = interceptors;
		return interceptors;
	})["catch"](function(error){throw error});
};

const isOriginIgnored = function(data, origins){
	for(let i = 0; i < origins.length; i++)
		if(data.metadata.origin == origins[i])
			return true;
	
	return false;
};

const Manager = {
	config : {
		ignoreDocumentOrigin : true,
		ignoreOrigins : []		
	},
	interceptors : [],
	doIntercept : function(aData){
		if(Manager.config.ignoreDocumentOrigin && aData.metadata.origin == document.location.origin)
			return Promise.resolve(aData);
		if(typeof Manager.config.ignoreOrigins !== "undefined" && isOriginIgnored(aData, Manager.config.ignoreOrigins))
			return Promise.resolve(aData);
		
		return getChain(aData)
		.then(function(chain){
			if(typeof chain === "undefined" || chain.length == 0)
				return Promise.resolve(aData);
			
			let handles = [];
			let promise = Promise.resolve(aData);
			chain.forEach(function(aInterceptor){
				promise.then(aInterceptor.doHandle);
			});			
			return promise;
		})["catch"](function(error){throw error;});
	},
	addInterceptor : function(aInterceptor){		
		if(arguments.length != 1 && typeof aInterceptor !== "object")
			throw new Error("function required an interceptor");
		if(typeof aInterceptor.doAccept !== "function")
			throw new Error("The interceptor required a \"doAccept\" function!");
		if(typeof aInterceptor.doHandle !== "function")
			throw new Error("The interceptor required a \"doHandle\" function!");
		
		INTERCEPTORS.push(aInterceptor);
		return Manager;
	}
};
/* harmony default export */ __webpack_exports__["a"] = (Manager); 




/***/ }),

/***/ "./src/XMLHttpRequest.js":
/*!*******************************!*\
  !*** ./src/XMLHttpRequest.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");



(function(Global){
	if(typeof Global.XMLHttpRequest === "undefined")
		return;

	const ORGXHR = Global.XMLHttpRequest;
	const executeRequest = function(aData){
		ORGXHR.prototype.open.call(this, aData.request.method, aData.url, aData.metadata.async, aData.metadata.username, aData.metadata.password);
		if(typeof aData.request.headers !== "undefined")
			Object.getOwnPropertyNames(aData.request.headers)
			.forEach((function(aHeader){
				ORGXHR.prototype.setRequestHeader.call(this, aHeader, aData.request.headers[aHeader]);
			}).bind(this));
		ORGXHR.prototype.send.call(this, aData.request.body);
	}
	let XHR = function (){
		const xhr = new ORGXHR(arguments);
		let data = undefined;		
		
		xhr.setRequestHeader = function(aName, aValue){
			data.request.headers = data.request.headers || {};			
			data.request.headers[aName] = aValue;
		};
		
		xhr.open = function(aMethod, aUrl, isAsync, aUsername, aPassword){		
			let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(aUrl);
			data = {
				url : aUrl,
				request : {
					method : aMethod
				},
				metadata : {
					method : aMethod,
					origin: match[1] || document.location.origin,
					protocol : (function(match){
						if(typeof match[2] === "undefined" || match[3] == "//")
							return document.location.protocol || "http:";
						else return match[3];			
					}).call(null, match),
					hostname: match[4] || document.location.hostname,
					port: match[6],
					query: match[7],
					async : typeof isAsync === "boolean" ? isAsync : true,
					username : aUsername,
					password : aPassword
				}
			};
		};
		
		xhr.send = function(aBody){
			if(data.metadata.async){
				data.request.body = aBody; 
	    		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data)
	    		.then(executeRequest.bind(xhr))
	    		["catch"](console.error);
		    }
			else
				executeRequest.call(xhr, data);
		};
		
		return xhr;
	};
	
	Global.XMLHttpRequest = XHR;
	Global.XMLHttpRequest.prototype = ORGXHR.prototype;
	Global.XMLHttpRequest.prototype.constructor = XHR;
	
	
})(window || global || self, undefined, {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _XMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XMLHttpRequest */ "./src/XMLHttpRequest.js");
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fetch */ "./src/Fetch.js");
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ "./src/interceptors/index.js");






(function(Global){	
	Global.de = Global.de || {};
	Global.de.titus = Global.de.titus || {};
	Global.de.titus.request = Global.de.titus.request || {};
	Global.de.titus.request.interceptor = {
		VERSION : "1.0.0-beta4",
		Manager : _Manager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
		interceptors : _interceptors__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
	};
	
	Global.RequestInterceptManager = _Manager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
})(window|| global || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/interceptors/OAuthInterceptor.js":
/*!**********************************************!*\
  !*** ./src/interceptors/OAuthInterceptor.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TokenInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenInterceptor */ "./src/interceptors/TokenInterceptor.js");


const OAuthInterceptor = function(aSetup){
	let setup = aSetup;
	setup.fetchToken = function(){
		return fetch(setup.login.url, {
			method: (setup.login.method || "get")
		}).then(function(aResponse){
			return aResponse.json();
		}).then(function(aResponse){
			return aResponse[setup.login.response.valueSelector];
		})["catch"](function(error){throw error;});		
	};
	setup.appendToken = function(aToken, aData){
		aData.request.headers = aData.request.headers || {};
		aData.request.headers["Authorization"] = "Bearer " + aToken;
		return aData;
	};
	return Object(_TokenInterceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(aSetup);
};

/* harmony default export */ __webpack_exports__["a"] = (OAuthInterceptor);


/***/ }),

/***/ "./src/interceptors/TokenInterceptor.js":
/*!**********************************************!*\
  !*** ./src/interceptors/TokenInterceptor.js ***!
  \**********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * aSetup  => 
 * {
 * 	condition : [string | string[] | function(aData}],
 * 	fetchToken : function(),
 *  appendToken : function(aToken, aData),
 *  (optional) refreshInterval,
 *  (optional) refreshToken : function()
 * } 
 * 
 * aData => 
 * {
 * 	url : String,
 * 	request : {
 * 		method : string,
 * 		(optional) headers : {
 * 			[header name : string] : [header value : string],
 * 			... 
 * 		},
 * 		(optional) body : {string | object | FormData | ...] 
 * 	},
 * 	metadata : {
 * 		method : string,
 * 		origin : string,
 * 		hostname : string,
 * 		protocol : string,
 * 		(optional) port : number,
 * 		query : string,
 * 	} 
 * }
 */
const TokenInterceptor = function(aSetup){
	const setup = aSetup; 
	let token = undefined;
	
	const defaultRefreshToken = function(){
        new Promise(setup.fetchToken)
        .then(function(aToken){
            token = aToken;
        }); 
    };
    
    const callAppendToken = function(aToken, aData, theAppender){
    	if(theAppender instanceof Array){
			let promise = Promise.resolve(aData);
			theAppender.forEach(function(appender){
				promise.then(function(aData){
					return Promise.resolve(appender(token, aData));
				});
			});
			return promise;
		}
		else
			return Promise.resolve(theAppender(token, aData));
    };
	
	if(setup.refreshInterval > 0){
	    const refreshToken = defaultRefreshToken
	    if(typeof setup.refreshToken === "function"){
	        refreshToken = function(){
	            Promise.resolve(setup.refreshToken())
	            .then(function(aToken){
	                token = aToken;
	            }); 
	        };
	    }
	    setInterval(refreshToken, setup.refreshInterval || (60 * 1000))
	}
	
	
	return {
		doAccept : setup.doAccept || function(aData){			
			let type = typeof setup.condition; 
			if(type === "function")
				return Promise.resolve(setup.condition(aData));
			else if(type === "string")
				return Promise.resolve(setup.condition == aData.metadata.origin);
			else if(setup.condition instanceof Array){
				for(let i = 0; i < setup.condition.length; i++)
					if(setup.condition[i] == aData.metadata.origin)
						return Promise.resolve(true);
			}	
			return Promise.resolve(false);				
		},
		doHandle : function(aData){				
			if(typeof token !== "undefined")
				return callAppendToken(token, aData, setup.appendToken);
			else
				return Promise.resolve(setup.fetchToken())
				.then(function(aToken){
					token = aToken;
					return callAppendToken(token, aData, setup.appendToken);
				})["catch"](function(error){throw error});
		}		
	};
};

/* harmony default export */ __webpack_exports__["a"] = (TokenInterceptor);


/***/ }),

/***/ "./src/interceptors/index.js":
/*!***********************************!*\
  !*** ./src/interceptors/index.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _OAuthInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OAuthInterceptor */ "./src/interceptors/OAuthInterceptor.js");
/* harmony import */ var _TokenInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenInterceptor */ "./src/interceptors/TokenInterceptor.js");




const Data = {
	OAuthInterceptor : _OAuthInterceptor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	TokenInterceptor : _TokenInterceptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (Data);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFZSwwREFBQyxZQUFZLEU7Ozs7Ozs7Ozs7OztBQ0Y1QjtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVM7QUFDdkI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHdEQUFPO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHLDJCQUEyQixZQUFZO0FBQzFDO0FBQ0EsQ0FBQyw0QkFBNEIsU0FBSSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7O0FDaENyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxFQUFFLDJCQUEyQixZQUFZO0FBQ3pDOztBQUVBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRTtBQUNKO0FBQ0EsR0FBRywyQkFBMkIsYUFBYTtBQUMzQyxFQUFFO0FBQ0YseUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxnRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUMxRXRCO0FBQUE7QUFBZ0M7QUFDSTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7O0FBRUE7QUFDQSxxRDtBQUNBO0FBQ0E7O0FBRUEsb0U7QUFDQSxlQUFlLDBEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEI7QUFDQSxPQUFPLHdEQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxDQUFDLDRCQUE0QixTQUFJLElBQUksRTs7Ozs7Ozs7Ozs7OztBQ3RFckM7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDVDtBQUNlO0FBQ1U7OztBQUcxQyxrQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLFlBQVksd0RBQU87QUFDbkIsaUJBQWlCLDZEQUFZO0FBQzdCOztBQUVBLGtDQUFrQyx3REFBTztBQUN6QyxDQUFDLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHLDJCQUEyQixhQUFhLEU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5RUFBZ0I7QUFDeEI7O0FBRWUseUVBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckJoQztBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QjtBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsRTtBQUNkO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLCtDO0FBQ0EscUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0EsSTtBQUNBLGlDO0FBQ0EsR0FBRztBQUNILDZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQixZQUFZO0FBQzVDLEc7QUFDQTtBQUNBOztBQUVlLHlFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7OztBQ2pHaEM7QUFBQTtBQUFrRDtBQUNBOzs7QUFHbEQ7QUFDQSxvQkFBb0IsaUVBQWdCO0FBQ3BDLG9CQUFvQixpRUFBZ0I7QUFDcEM7O0FBRWUsNkRBQUksRSIsImZpbGUiOiJkZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgVVJMU1BMSVRURVIgPSAvXigoKFteOlxcL10qOik/XFwvXFwvKT8oW146XFwvXSopKFxcOihbMC05XSopKT8pKFxcLy4qKT8kLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtVUkxTUExJVFRFUn07IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHJcblx0aWYodHlwZW9mIEdsb2JhbC5mZXRjaCAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuO1x0XHJcblx0Y29uc3QgT1JHRkVUQ0ggPSBHbG9iYWwuZmV0Y2g7XHJcblx0R2xvYmFsLmZldGNoID0gZnVuY3Rpb24oYVVybCwgYVJlcXVlc3Qpe1xyXG5cdFx0bGV0IG1hdGNoID0gQ29uc3RhbnRzLlVSTFNQTElUVEVSLmV4ZWMoYVVybCk7XHJcblx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0dXJsIDogYVVybCxcclxuXHRcdFx0cmVxdWVzdCA6IGFSZXF1ZXN0IHx8IHt9LFxyXG5cdFx0XHRtZXRhZGF0YSA6IHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0bWV0aG9kIDogdHlwZW9mIGFSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJHRVRcIiA6IChhUmVxdWVzdC5tZXRob2QgfHwgXCJHRVRcIiksXHJcblx0XHRcdFx0b3JpZ2luOiBtYXRjaFsxXSB8fCBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sXHJcblx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fCBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0XHRxdWVyeTogbWF0Y2hbN10sXHJcblx0XHRcdFx0YXN5bmMgOiB0cnVlXHRcdFx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBNYW5hZ2VyLmRvSW50ZXJjZXB0KGRhdGEpXHJcblx0XHQudGhlbihmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0cmV0dXJuIE9SR0ZFVENIKGRhdGEudXJsLCBkYXRhLnJlcXVlc3QpO1xyXG5cdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYsIHRoaXMsIHt9KTsiLCJjb25zdCBJTlRFUkNFUFRPUlMgPSBbXTtcclxuY29uc3QgQ0FDSEUgPSB7fTtcclxuXHJcbmNvbnN0IGdldENoYWluID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRsZXQgY2hhaW4gPSBDQUNIRVthRGF0YS5tZXRhZGF0YS5vcmlnaW5dO1xyXG5cdGlmKHR5cGVvZiBjaGFpbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhaW4pO1xyXG5cdFxyXG5cdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdElOVEVSQ0VQVE9SUy5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShhSW50ZXJjZXB0b3IuZG9BY2NlcHQoYURhdGEpKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRyZXR1cm4gYUludGVyY2VwdG9yO1xyXG5cdFx0XHR9KTtcclxuXHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcblx0fSk7XHJcblx0XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGNoYWluKXtcclxuXHRcdGNvbnN0IGludGVyY2VwdG9ycyA9IGNoYWluLmZpbHRlcihmdW5jdGlvbihpbnRlcmNlcHRvcil7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW50ZXJjZXB0b3IgIT09IFwidW5kZWZpbmVkXCI7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Q0FDSEVbYURhdGEubWV0YWRhdGEub3JpZ2luXSA9IGludGVyY2VwdG9ycztcclxuXHRcdHJldHVybiBpbnRlcmNlcHRvcnM7XHJcblx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxufTtcclxuXHJcbmNvbnN0IGlzT3JpZ2luSWdub3JlZCA9IGZ1bmN0aW9uKGRhdGEsIG9yaWdpbnMpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBvcmlnaW5zLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoZGF0YS5tZXRhZGF0YS5vcmlnaW4gPT0gb3JpZ2luc1tpXSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgTWFuYWdlciA9IHtcclxuXHRjb25maWcgOiB7XHJcblx0XHRpZ25vcmVEb2N1bWVudE9yaWdpbiA6IHRydWUsXHJcblx0XHRpZ25vcmVPcmlnaW5zIDogW11cdFx0XHJcblx0fSxcclxuXHRpbnRlcmNlcHRvcnMgOiBbXSxcclxuXHRkb0ludGVyY2VwdCA6IGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdGlmKE1hbmFnZXIuY29uZmlnLmlnbm9yZURvY3VtZW50T3JpZ2luICYmIGFEYXRhLm1ldGFkYXRhLm9yaWdpbiA9PSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0aWYodHlwZW9mIE1hbmFnZXIuY29uZmlnLmlnbm9yZU9yaWdpbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNPcmlnaW5JZ25vcmVkKGFEYXRhLCBNYW5hZ2VyLmNvbmZpZy5pZ25vcmVPcmlnaW5zKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBnZXRDaGFpbihhRGF0YSlcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGNoYWluKXtcclxuXHRcdFx0aWYodHlwZW9mIGNoYWluID09PSBcInVuZGVmaW5lZFwiIHx8IGNoYWluLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGhhbmRsZXMgPSBbXTtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0XHRjaGFpbi5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRcdFx0cHJvbWlzZS50aGVuKGFJbnRlcmNlcHRvci5kb0hhbmRsZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1xyXG5cdH0sXHJcblx0YWRkSW50ZXJjZXB0b3IgOiBmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1x0XHRcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggIT0gMSAmJiB0eXBlb2YgYUludGVyY2VwdG9yICE9PSBcIm9iamVjdFwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJmdW5jdGlvbiByZXF1aXJlZCBhbiBpbnRlcmNlcHRvclwiKTtcclxuXHRcdGlmKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9BY2NlcHQgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvQWNjZXB0XFxcIiBmdW5jdGlvbiFcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvSGFuZGxlICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0hhbmRsZVxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0XHJcblx0XHRJTlRFUkNFUFRPUlMucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0cmV0dXJuIE1hbmFnZXI7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyBcclxuXHJcblxyXG4iLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG4oZnVuY3Rpb24oR2xvYmFsKXtcclxuXHRpZih0eXBlb2YgR2xvYmFsLlhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRjb25zdCBPUkdYSFIgPSBHbG9iYWwuWE1MSHR0cFJlcXVlc3Q7XHJcblx0Y29uc3QgZXhlY3V0ZVJlcXVlc3QgPSBmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRPUkdYSFIucHJvdG90eXBlLm9wZW4uY2FsbCh0aGlzLCBhRGF0YS5yZXF1ZXN0Lm1ldGhvZCwgYURhdGEudXJsLCBhRGF0YS5tZXRhZGF0YS5hc3luYywgYURhdGEubWV0YWRhdGEudXNlcm5hbWUsIGFEYXRhLm1ldGFkYXRhLnBhc3N3b3JkKTtcclxuXHRcdGlmKHR5cGVvZiBhRGF0YS5yZXF1ZXN0LmhlYWRlcnMgIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFEYXRhLnJlcXVlc3QuaGVhZGVycylcclxuXHRcdFx0LmZvckVhY2goKGZ1bmN0aW9uKGFIZWFkZXIpe1xyXG5cdFx0XHRcdE9SR1hIUi5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlci5jYWxsKHRoaXMsIGFIZWFkZXIsIGFEYXRhLnJlcXVlc3QuaGVhZGVyc1thSGVhZGVyXSk7XHJcblx0XHRcdH0pLmJpbmQodGhpcykpO1xyXG5cdFx0T1JHWEhSLnByb3RvdHlwZS5zZW5kLmNhbGwodGhpcywgYURhdGEucmVxdWVzdC5ib2R5KTtcclxuXHR9XHJcblx0bGV0IFhIUiA9IGZ1bmN0aW9uICgpe1xyXG5cdFx0Y29uc3QgeGhyID0gbmV3IE9SR1hIUihhcmd1bWVudHMpO1xyXG5cdFx0bGV0IGRhdGEgPSB1bmRlZmluZWQ7XHRcdFxyXG5cdFx0XHJcblx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKGFOYW1lLCBhVmFsdWUpe1xyXG5cdFx0XHRkYXRhLnJlcXVlc3QuaGVhZGVycyA9IGRhdGEucmVxdWVzdC5oZWFkZXJzIHx8IHt9O1x0XHRcdFxyXG5cdFx0XHRkYXRhLnJlcXVlc3QuaGVhZGVyc1thTmFtZV0gPSBhVmFsdWU7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR4aHIub3BlbiA9IGZ1bmN0aW9uKGFNZXRob2QsIGFVcmwsIGlzQXN5bmMsIGFVc2VybmFtZSwgYVBhc3N3b3JkKXtcdFx0XHJcblx0XHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdHVybCA6IGFVcmwsXHJcblx0XHRcdFx0cmVxdWVzdCA6IHtcclxuXHRcdFx0XHRcdG1ldGhvZCA6IGFNZXRob2RcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGFkYXRhIDoge1xyXG5cdFx0XHRcdFx0bWV0aG9kIDogYU1ldGhvZCxcclxuXHRcdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRcdGFzeW5jIDogdHlwZW9mIGlzQXN5bmMgPT09IFwiYm9vbGVhblwiID8gaXNBc3luYyA6IHRydWUsXHJcblx0XHRcdFx0XHR1c2VybmFtZSA6IGFVc2VybmFtZSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkIDogYVBhc3N3b3JkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0eGhyLnNlbmQgPSBmdW5jdGlvbihhQm9keSl7XHJcblx0XHRcdGlmKGRhdGEubWV0YWRhdGEuYXN5bmMpe1xyXG5cdFx0XHRcdGRhdGEucmVxdWVzdC5ib2R5ID0gYUJvZHk7IFxyXG5cdCAgICBcdFx0TWFuYWdlci5kb0ludGVyY2VwdChkYXRhKVxyXG5cdCAgICBcdFx0LnRoZW4oZXhlY3V0ZVJlcXVlc3QuYmluZCh4aHIpKVxyXG5cdCAgICBcdFx0W1wiY2F0Y2hcIl0oY29uc29sZS5lcnJvcik7XHJcblx0XHQgICAgfVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZXhlY3V0ZVJlcXVlc3QuY2FsbCh4aHIsIGRhdGEpO1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHhocjtcclxuXHR9O1xyXG5cdFxyXG5cdEdsb2JhbC5YTUxIdHRwUmVxdWVzdCA9IFhIUjtcclxuXHRHbG9iYWwuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlID0gT1JHWEhSLnByb3RvdHlwZTtcclxuXHRHbG9iYWwuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gWEhSO1xyXG5cdFxyXG5cdFxyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYsIHRoaXMsIHt9KTsiLCJpbXBvcnQgXCIuL1hNTEh0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCBcIi4vRmV0Y2hcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3JzIGZyb20gXCIuL2ludGVyY2VwdG9yc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1x0XHJcblx0R2xvYmFsLmRlID0gR2xvYmFsLmRlIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cyA9IEdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdCA9IEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0IHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0TWFuYWdlciA6IE1hbmFnZXIsXHJcblx0XHRpbnRlcmNlcHRvcnMgOiBJbnRlcmNlcHRvcnNcclxuXHR9O1xyXG5cdFxyXG5cdEdsb2JhbC5SZXF1ZXN0SW50ZXJjZXB0TWFuYWdlciA9IE1hbmFnZXI7XHJcbn0pKHdpbmRvd3x8IGdsb2JhbCB8fCB7fSk7IiwiaW1wb3J0IFRva2VuSW50ZXJjZXB0b3IgZnJvbSBcIi4vVG9rZW5JbnRlcmNlcHRvclwiXHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1x0XHRcclxuXHR9O1xyXG5cdHNldHVwLmFwcGVuZFRva2VuID0gZnVuY3Rpb24oYVRva2VuLCBhRGF0YSl7XHJcblx0XHRhRGF0YS5yZXF1ZXN0LmhlYWRlcnMgPSBhRGF0YS5yZXF1ZXN0LmhlYWRlcnMgfHwge307XHJcblx0XHRhRGF0YS5yZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBhVG9rZW47XHJcblx0XHRyZXR1cm4gYURhdGE7XHJcblx0fTtcclxuXHRyZXR1cm4gVG9rZW5JbnRlcmNlcHRvcihhU2V0dXApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT0F1dGhJbnRlcmNlcHRvcjtcclxuIiwiLyoqXHJcbiAqIGFTZXR1cCAgPT4gXHJcbiAqIHtcclxuICogXHRjb25kaXRpb24gOiBbc3RyaW5nIHwgc3RyaW5nW10gfCBmdW5jdGlvbihhRGF0YX1dLFxyXG4gKiBcdGZldGNoVG9rZW4gOiBmdW5jdGlvbigpLFxyXG4gKiAgYXBwZW5kVG9rZW4gOiBmdW5jdGlvbihhVG9rZW4sIGFEYXRhKSxcclxuICogIChvcHRpb25hbCkgcmVmcmVzaEludGVydmFsLFxyXG4gKiAgKG9wdGlvbmFsKSByZWZyZXNoVG9rZW4gOiBmdW5jdGlvbigpXHJcbiAqIH0gXHJcbiAqIFxyXG4gKiBhRGF0YSA9PiBcclxuICoge1xyXG4gKiBcdHVybCA6IFN0cmluZyxcclxuICogXHRyZXF1ZXN0IDoge1xyXG4gKiBcdFx0bWV0aG9kIDogc3RyaW5nLFxyXG4gKiBcdFx0KG9wdGlvbmFsKSBoZWFkZXJzIDoge1xyXG4gKiBcdFx0XHRbaGVhZGVyIG5hbWUgOiBzdHJpbmddIDogW2hlYWRlciB2YWx1ZSA6IHN0cmluZ10sXHJcbiAqIFx0XHRcdC4uLiBcclxuICogXHRcdH0sXHJcbiAqIFx0XHQob3B0aW9uYWwpIGJvZHkgOiB7c3RyaW5nIHwgb2JqZWN0IHwgRm9ybURhdGEgfCAuLi5dIFxyXG4gKiBcdH0sXHJcbiAqIFx0bWV0YWRhdGEgOiB7XHJcbiAqIFx0XHRtZXRob2QgOiBzdHJpbmcsXHJcbiAqIFx0XHRvcmlnaW4gOiBzdHJpbmcsXHJcbiAqIFx0XHRob3N0bmFtZSA6IHN0cmluZyxcclxuICogXHRcdHByb3RvY29sIDogc3RyaW5nLFxyXG4gKiBcdFx0KG9wdGlvbmFsKSBwb3J0IDogbnVtYmVyLFxyXG4gKiBcdFx0cXVlcnkgOiBzdHJpbmcsXHJcbiAqIFx0fSBcclxuICogfVxyXG4gKi9cclxuY29uc3QgVG9rZW5JbnRlcmNlcHRvciA9IGZ1bmN0aW9uKGFTZXR1cCl7XHJcblx0Y29uc3Qgc2V0dXAgPSBhU2V0dXA7IFxyXG5cdGxldCB0b2tlbiA9IHVuZGVmaW5lZDtcclxuXHRcclxuXHRjb25zdCBkZWZhdWx0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBuZXcgUHJvbWlzZShzZXR1cC5mZXRjaFRva2VuKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcbiAgICAgICAgICAgIHRva2VuID0gYVRva2VuO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbGxBcHBlbmRUb2tlbiA9IGZ1bmN0aW9uKGFUb2tlbiwgYURhdGEsIHRoZUFwcGVuZGVyKXtcclxuICAgIFx0aWYodGhlQXBwZW5kZXIgaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGFEYXRhKTtcclxuXHRcdFx0dGhlQXBwZW5kZXIuZm9yRWFjaChmdW5jdGlvbihhcHBlbmRlcil7XHJcblx0XHRcdFx0cHJvbWlzZS50aGVuKGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kZXIodG9rZW4sIGFEYXRhKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGVBcHBlbmRlcih0b2tlbiwgYURhdGEpKTtcclxuICAgIH07XHJcblx0XHJcblx0aWYoc2V0dXAucmVmcmVzaEludGVydmFsID4gMCl7XHJcblx0ICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGRlZmF1bHRSZWZyZXNoVG9rZW5cclxuXHQgICAgaWYodHlwZW9mIHNldHVwLnJlZnJlc2hUb2tlbiA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHQgICAgICAgIHJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHNldHVwLnJlZnJlc2hUb2tlbigpKVxyXG5cdCAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0ICAgICAgICAgICAgICAgIHRva2VuID0gYVRva2VuO1xyXG5cdCAgICAgICAgICAgIH0pOyBcclxuXHQgICAgICAgIH07XHJcblx0ICAgIH1cclxuXHQgICAgc2V0SW50ZXJ2YWwocmVmcmVzaFRva2VuLCBzZXR1cC5yZWZyZXNoSW50ZXJ2YWwgfHwgKDYwICogMTAwMCkpXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdHJldHVybiB7XHJcblx0XHRkb0FjY2VwdCA6IHNldHVwLmRvQWNjZXB0IHx8IGZ1bmN0aW9uKGFEYXRhKXtcdFx0XHRcclxuXHRcdFx0bGV0IHR5cGUgPSB0eXBlb2Ygc2V0dXAuY29uZGl0aW9uOyBcclxuXHRcdFx0aWYodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuY29uZGl0aW9uKGFEYXRhKSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldHVwLmNvbmRpdGlvbiA9PSBhRGF0YS5tZXRhZGF0YS5vcmlnaW4pO1xyXG5cdFx0XHRlbHNlIGlmKHNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgc2V0dXAuY29uZGl0aW9uLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYoc2V0dXAuY29uZGl0aW9uW2ldID09IGFEYXRhLm1ldGFkYXRhLm9yaWdpbilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0fVx0XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0ZG9IYW5kbGUgOiBmdW5jdGlvbihhRGF0YSl7XHRcdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHRva2VuICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybiBjYWxsQXBwZW5kVG9rZW4odG9rZW4sIGFEYXRhLCBzZXR1cC5hcHBlbmRUb2tlbik7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldHVwLmZldGNoVG9rZW4oKSlcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihhVG9rZW4pe1xyXG5cdFx0XHRcdFx0dG9rZW4gPSBhVG9rZW47XHJcblx0XHRcdFx0XHRyZXR1cm4gY2FsbEFwcGVuZFRva2VuKHRva2VuLCBhRGF0YSwgc2V0dXAuYXBwZW5kVG9rZW4pO1xyXG5cdFx0XHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0XHR9XHRcdFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkludGVyY2VwdG9yO1xyXG4iLCJpbXBvcnQgT0F1dGhJbnRlcmNlcHRvciBmcm9tIFwiLi9PQXV0aEludGVyY2VwdG9yXCI7XHJcbmltcG9ydCBUb2tlbkludGVyY2VwdG9yIGZyb20gXCIuL1Rva2VuSW50ZXJjZXB0b3JcIjtcclxuXHJcblxyXG5jb25zdCBEYXRhID0ge1xyXG5cdE9BdXRoSW50ZXJjZXB0b3IgOiBPQXV0aEludGVyY2VwdG9yLFxyXG5cdFRva2VuSW50ZXJjZXB0b3IgOiBUb2tlbkludGVyY2VwdG9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=