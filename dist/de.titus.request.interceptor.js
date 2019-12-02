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
	
	const ORGXHR = Global.XMLHttpRequest.prototype;
	const executeRequest = function(aData){
		ORGXHR.open.call(this, aData.request.method, aData.url, aData.metadata.async, aData.metadata.username, aData.metadata.password);
		Object.getOwnProperyNames(aData.request.headers).forEach((function(aHeader){
			ORGXHR.setRequestHeader.call(this, aHeader, aData.request.headers[aHeader]);
		}).bind(this));
		ORGXHR.send.call(aData.request.body);
	}
	
	Global.XMLHttpRequest.prototype.constructor = function (){
		let data = undefined; 
		
		this.setRequestHeader = function(aName, aValue){
			data.request.headers = data.request.headers || {};			
			data.request.headers[aName] = aValue;
		};
		
		this.open = function(aMethod, aUrl, isAsync, aUsername, aPassword){		
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
		
		this.send = function(aBody){
			if(data.metadata.async){
				data.request.body = aBody; 
	    		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data)
	    		.then(executeRequest.bind(this))
	    		["catch"](console.error);
		    }
			else
				executeRequest.call(this, data);
		};
	};
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
	setup.appendToken = function(aData, aToken){
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
const TokenInterceptor = function(aSetup){
	const setup = aSetup; 
	let token = undefined;
	
	const defaultRefreshToken = function(){
        new Promise(setup.fetchToken)
        .then(function(aToken){
            token = aToken;
        }); 
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
				return Promise.resolve(appendOn(aData, token));
			else
				return Promise.resolve(setup.fetchToken(aData))
				.then(function(aToken){
					token = aToken;
					if(setup.appendToken instanceof Array){
						let promise = Promise.resolve(aData);
						setup.appendToken.forEach(function(appender){
							promise.then(function(aData){
								return Promise.resolve(appender(aData, token));
							});
						});
						return promise;
					}
					else
						return Promise.resolve(setup.appendToken(aData, token));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFZSwwREFBQyxZQUFZLEU7Ozs7Ozs7Ozs7OztBQ0Y1QjtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVM7QUFDdkI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHdEQUFPO0FBQ2hCO0FBQ0E7QUFDQSxHQUFHLDJCQUEyQixZQUFZO0FBQzFDO0FBQ0EsQ0FBQyw0QkFBNEIsU0FBSSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7O0FDaENyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxFQUFFLDJCQUEyQixZQUFZO0FBQ3pDOztBQUVBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksRTtBQUNKO0FBQ0EsR0FBRywyQkFBMkIsYUFBYTtBQUMzQyxFQUFFO0FBQ0YseUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxnRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUMxRXRCO0FBQUE7QUFBZ0M7QUFDSTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHVCOztBQUVBO0FBQ0EscUQ7QUFDQTtBQUNBOztBQUVBLHFFO0FBQ0EsZUFBZSwwREFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCO0FBQ0EsT0FBTyx3REFBTztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEIsU0FBSSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7QUM1RHJDO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ1Q7QUFDZTtBQUNVOzs7QUFHMUMsa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixZQUFZLHdEQUFPO0FBQ25CLGlCQUFpQiw2REFBWTtBQUM3Qjs7QUFFQSxrQ0FBa0Msd0RBQU87QUFDekMsQ0FBQyx1QkFBdUIsRTs7Ozs7Ozs7Ozs7Ozs7QUNqQnhCO0FBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRywyQkFBMkIsYUFBYSxFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQWdCO0FBQ3hCOztBQUVlLHlFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JCaEM7QUFDQSxzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEU7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwrQztBQUNBLHFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBLEk7QUFDQSxpQztBQUNBLEdBQUc7QUFDSCw2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQkFBMkIsWUFBWTtBQUM1QyxHO0FBQ0E7QUFDQTs7QUFFZSx5RUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUM5RGhDO0FBQUE7QUFBa0Q7QUFDQTs7O0FBR2xEO0FBQ0Esb0JBQW9CLGlFQUFnQjtBQUNwQyxvQkFBb0IsaUVBQWdCO0FBQ3BDOztBQUVlLDZEQUFJLEUiLCJmaWxlIjoiZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IFVSTFNQTElUVEVSID0gL14oKChbXjpcXC9dKjopP1xcL1xcLyk/KFteOlxcL10qKShcXDooWzAtOV0qKSk/KShcXC8uKik/JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7VVJMU1BMSVRURVJ9OyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1xyXG5cdGlmKHR5cGVvZiBHbG9iYWwuZmV0Y2ggIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybjtcdFxyXG5cdGNvbnN0IE9SR0ZFVENIID0gR2xvYmFsLmZldGNoO1xyXG5cdEdsb2JhbC5mZXRjaCA9IGZ1bmN0aW9uKGFVcmwsIGFSZXF1ZXN0KXtcclxuXHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdHVybCA6IGFVcmwsXHJcblx0XHRcdHJlcXVlc3QgOiBhUmVxdWVzdCB8fCB7fSxcclxuXHRcdFx0bWV0YWRhdGEgOiB7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdG1ldGhvZCA6IHR5cGVvZiBhUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiR0VUXCIgOiAoYVJlcXVlc3QubWV0aG9kIHx8IFwiR0VUXCIpLFxyXG5cdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRcdGFzeW5jIDogdHJ1ZVx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gTWFuYWdlci5kb0ludGVyY2VwdChkYXRhKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdHJldHVybiBPUkdGRVRDSChkYXRhLnVybCwgZGF0YS5yZXF1ZXN0KTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCB8fCBzZWxmLCB0aGlzLCB7fSk7IiwiY29uc3QgSU5URVJDRVBUT1JTID0gW107XHJcbmNvbnN0IENBQ0hFID0ge307XHJcblxyXG5jb25zdCBnZXRDaGFpbiA9IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0bGV0IGNoYWluID0gQ0FDSEVbYURhdGEubWV0YWRhdGEub3JpZ2luXTtcclxuXHRpZih0eXBlb2YgY2hhaW4gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNoYWluKTtcclxuXHRcclxuXHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRJTlRFUkNFUFRPUlMuZm9yRWFjaChmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0bGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYUludGVyY2VwdG9yLmRvQWNjZXB0KGFEYXRhKSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24odmFsdWUpe1xyXG5cdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGFJbnRlcmNlcHRvcjtcclxuXHRcdFx0fSk7XHJcblx0XHRwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHQudGhlbihmdW5jdGlvbihjaGFpbil7XHJcblx0XHRjb25zdCBpbnRlcmNlcHRvcnMgPSBjaGFpbi5maWx0ZXIoZnVuY3Rpb24oaW50ZXJjZXB0b3Ipe1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGludGVyY2VwdG9yICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdENBQ0hFW2FEYXRhLm1ldGFkYXRhLm9yaWdpbl0gPSBpbnRlcmNlcHRvcnM7XHJcblx0XHRyZXR1cm4gaW50ZXJjZXB0b3JzO1xyXG5cdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc09yaWdpbklnbm9yZWQgPSBmdW5jdGlvbihkYXRhLCBvcmlnaW5zKXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgb3JpZ2lucy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGRhdGEubWV0YWRhdGEub3JpZ2luID09IG9yaWdpbnNbaV0pXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IE1hbmFnZXIgPSB7XHJcblx0Y29uZmlnIDoge1xyXG5cdFx0aWdub3JlRG9jdW1lbnRPcmlnaW4gOiB0cnVlLFxyXG5cdFx0aWdub3JlT3JpZ2lucyA6IFtdXHRcdFxyXG5cdH0sXHJcblx0aW50ZXJjZXB0b3JzIDogW10sXHJcblx0ZG9JbnRlcmNlcHQgOiBmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRpZihNYW5hZ2VyLmNvbmZpZy5pZ25vcmVEb2N1bWVudE9yaWdpbiAmJiBhRGF0YS5tZXRhZGF0YS5vcmlnaW4gPT0gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEYXRhKTtcclxuXHRcdGlmKHR5cGVvZiBNYW5hZ2VyLmNvbmZpZy5pZ25vcmVPcmlnaW5zICE9PSBcInVuZGVmaW5lZFwiICYmIGlzT3JpZ2luSWdub3JlZChhRGF0YSwgTWFuYWdlci5jb25maWcuaWdub3JlT3JpZ2lucykpXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZ2V0Q2hhaW4oYURhdGEpXHJcblx0XHQudGhlbihmdW5jdGlvbihjaGFpbil7XHJcblx0XHRcdGlmKHR5cGVvZiBjaGFpbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCBjaGFpbi5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEYXRhKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBoYW5kbGVzID0gW107XHJcblx0XHRcdGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGFEYXRhKTtcclxuXHRcdFx0Y2hhaW4uZm9yRWFjaChmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0XHRcdHByb21pc2UudGhlbihhSW50ZXJjZXB0b3IuZG9IYW5kbGUpO1xyXG5cdFx0XHR9KTtcdFx0XHRcclxuXHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcjt9KTtcclxuXHR9LFxyXG5cdGFkZEludGVyY2VwdG9yIDogZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcdFx0XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICE9IDEgJiYgdHlwZW9mIGFJbnRlcmNlcHRvciAhPT0gXCJvYmplY3RcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZnVuY3Rpb24gcmVxdWlyZWQgYW4gaW50ZXJjZXB0b3JcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvQWNjZXB0ICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0FjY2VwdFxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0hhbmRsZSAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9IYW5kbGVcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdFxyXG5cdFx0SU5URVJDRVBUT1JTLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHRcdHJldHVybiBNYW5hZ2VyO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHJcblx0aWYodHlwZW9mIEdsb2JhbC5YTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRjb25zdCBPUkdYSFIgPSBHbG9iYWwuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlO1xyXG5cdGNvbnN0IGV4ZWN1dGVSZXF1ZXN0ID0gZnVuY3Rpb24oYURhdGEpe1xyXG5cdFx0T1JHWEhSLm9wZW4uY2FsbCh0aGlzLCBhRGF0YS5yZXF1ZXN0Lm1ldGhvZCwgYURhdGEudXJsLCBhRGF0YS5tZXRhZGF0YS5hc3luYywgYURhdGEubWV0YWRhdGEudXNlcm5hbWUsIGFEYXRhLm1ldGFkYXRhLnBhc3N3b3JkKTtcclxuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ5TmFtZXMoYURhdGEucmVxdWVzdC5oZWFkZXJzKS5mb3JFYWNoKChmdW5jdGlvbihhSGVhZGVyKXtcclxuXHRcdFx0T1JHWEhSLnNldFJlcXVlc3RIZWFkZXIuY2FsbCh0aGlzLCBhSGVhZGVyLCBhRGF0YS5yZXF1ZXN0LmhlYWRlcnNbYUhlYWRlcl0pO1xyXG5cdFx0fSkuYmluZCh0aGlzKSk7XHJcblx0XHRPUkdYSFIuc2VuZC5jYWxsKGFEYXRhLnJlcXVlc3QuYm9keSk7XHJcblx0fVxyXG5cdFxyXG5cdEdsb2JhbC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKXtcclxuXHRcdGxldCBkYXRhID0gdW5kZWZpbmVkOyBcclxuXHRcdFxyXG5cdFx0dGhpcy5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24oYU5hbWUsIGFWYWx1ZSl7XHJcblx0XHRcdGRhdGEucmVxdWVzdC5oZWFkZXJzID0gZGF0YS5yZXF1ZXN0LmhlYWRlcnMgfHwge307XHRcdFx0XHJcblx0XHRcdGRhdGEucmVxdWVzdC5oZWFkZXJzW2FOYW1lXSA9IGFWYWx1ZTtcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMub3BlbiA9IGZ1bmN0aW9uKGFNZXRob2QsIGFVcmwsIGlzQXN5bmMsIGFVc2VybmFtZSwgYVBhc3N3b3JkKXtcdFx0XHJcblx0XHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0XHRkYXRhID0ge1xyXG5cdFx0XHRcdHVybCA6IGFVcmwsXHJcblx0XHRcdFx0cmVxdWVzdCA6IHtcclxuXHRcdFx0XHRcdG1ldGhvZCA6IGFNZXRob2RcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGFkYXRhIDoge1xyXG5cdFx0XHRcdFx0bWV0aG9kIDogYU1ldGhvZCxcclxuXHRcdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRcdGFzeW5jIDogdHlwZW9mIGlzQXN5bmMgPT09IFwiYm9vbGVhblwiID8gaXNBc3luYyA6IHRydWUsXHJcblx0XHRcdFx0XHR1c2VybmFtZSA6IGFVc2VybmFtZSxcclxuXHRcdFx0XHRcdHBhc3N3b3JkIDogYVBhc3N3b3JkXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zZW5kID0gZnVuY3Rpb24oYUJvZHkpe1xyXG5cdFx0XHRpZihkYXRhLm1ldGFkYXRhLmFzeW5jKXtcclxuXHRcdFx0XHRkYXRhLnJlcXVlc3QuYm9keSA9IGFCb2R5OyBcclxuXHQgICAgXHRcdE1hbmFnZXIuZG9JbnRlcmNlcHQoZGF0YSlcclxuXHQgICAgXHRcdC50aGVuKGV4ZWN1dGVSZXF1ZXN0LmJpbmQodGhpcykpXHJcblx0ICAgIFx0XHRbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHRcdCAgICB9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRleGVjdXRlUmVxdWVzdC5jYWxsKHRoaXMsIGRhdGEpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHNlbGYsIHRoaXMsIHt9KTsiLCJpbXBvcnQgXCIuL1hNTEh0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCBcIi4vRmV0Y2hcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3JzIGZyb20gXCIuL2ludGVyY2VwdG9yc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1x0XHJcblx0R2xvYmFsLmRlID0gR2xvYmFsLmRlIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cyA9IEdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdCA9IEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0IHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0TWFuYWdlciA6IE1hbmFnZXIsXHJcblx0XHRpbnRlcmNlcHRvcnMgOiBJbnRlcmNlcHRvcnNcclxuXHR9O1xyXG5cdFxyXG5cdEdsb2JhbC5SZXF1ZXN0SW50ZXJjZXB0TWFuYWdlciA9IE1hbmFnZXI7XHJcbn0pKHdpbmRvd3x8IGdsb2JhbCB8fCB7fSk7IiwiaW1wb3J0IFRva2VuSW50ZXJjZXB0b3IgZnJvbSBcIi4vVG9rZW5JbnRlcmNlcHRvclwiXHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1x0XHRcclxuXHR9O1xyXG5cdHNldHVwLmFwcGVuZFRva2VuID0gZnVuY3Rpb24oYURhdGEsIGFUb2tlbil7XHJcblx0XHRhRGF0YS5yZXF1ZXN0LmhlYWRlcnMgPSBhRGF0YS5yZXF1ZXN0LmhlYWRlcnMgfHwge307XHJcblx0XHRhRGF0YS5yZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBhVG9rZW47XHJcblx0XHRyZXR1cm4gYURhdGE7XHJcblx0fTtcclxuXHRyZXR1cm4gVG9rZW5JbnRlcmNlcHRvcihhU2V0dXApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT0F1dGhJbnRlcmNlcHRvcjtcclxuIiwiY29uc3QgVG9rZW5JbnRlcmNlcHRvciA9IGZ1bmN0aW9uKGFTZXR1cCl7XHJcblx0Y29uc3Qgc2V0dXAgPSBhU2V0dXA7IFxyXG5cdGxldCB0b2tlbiA9IHVuZGVmaW5lZDtcclxuXHRcclxuXHRjb25zdCBkZWZhdWx0UmVmcmVzaFRva2VuID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBuZXcgUHJvbWlzZShzZXR1cC5mZXRjaFRva2VuKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcbiAgICAgICAgICAgIHRva2VuID0gYVRva2VuO1xyXG4gICAgICAgIH0pOyBcclxuICAgIH07XHJcblx0XHJcblx0aWYoc2V0dXAucmVmcmVzaEludGVydmFsID4gMCl7XHJcblx0ICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGRlZmF1bHRSZWZyZXNoVG9rZW5cclxuXHQgICAgaWYodHlwZW9mIHNldHVwLnJlZnJlc2hUb2tlbiA9PT0gXCJmdW5jdGlvblwiKXtcclxuXHQgICAgICAgIHJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0ICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHNldHVwLnJlZnJlc2hUb2tlbigpKVxyXG5cdCAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0ICAgICAgICAgICAgICAgIHRva2VuID0gYVRva2VuO1xyXG5cdCAgICAgICAgICAgIH0pOyBcclxuXHQgICAgICAgIH07XHJcblx0ICAgIH1cclxuXHQgICAgc2V0SW50ZXJ2YWwocmVmcmVzaFRva2VuLCBzZXR1cC5yZWZyZXNoSW50ZXJ2YWwgfHwgKDYwICogMTAwMCkpXHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdHJldHVybiB7XHJcblx0XHRkb0FjY2VwdCA6IHNldHVwLmRvQWNjZXB0IHx8IGZ1bmN0aW9uKGFEYXRhKXtcdFx0XHRcclxuXHRcdFx0bGV0IHR5cGUgPSB0eXBlb2Ygc2V0dXAuY29uZGl0aW9uOyBcclxuXHRcdFx0aWYodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuY29uZGl0aW9uKGFEYXRhKSk7XHJcblx0XHRcdGVsc2UgaWYodHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldHVwLmNvbmRpdGlvbiA9PSBhRGF0YS5tZXRhZGF0YS5vcmlnaW4pO1xyXG5cdFx0XHRlbHNlIGlmKHNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgc2V0dXAuY29uZGl0aW9uLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0aWYoc2V0dXAuY29uZGl0aW9uW2ldID09IGFEYXRhLm1ldGFkYXRhLm9yaWdpbilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0fVx0XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1x0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0ZG9IYW5kbGUgOiBmdW5jdGlvbihhRGF0YSl7XHRcdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHRva2VuICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kT24oYURhdGEsIHRva2VuKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldHVwLmZldGNoVG9rZW4oYURhdGEpKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0XHRcdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdFx0XHRcdGlmKHNldHVwLmFwcGVuZFRva2VuIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdFx0XHRsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShhRGF0YSk7XHJcblx0XHRcdFx0XHRcdHNldHVwLmFwcGVuZFRva2VuLmZvckVhY2goZnVuY3Rpb24oYXBwZW5kZXIpe1xyXG5cdFx0XHRcdFx0XHRcdHByb21pc2UudGhlbihmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFwcGVuZGVyKGFEYXRhLCB0b2tlbikpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuYXBwZW5kVG9rZW4oYURhdGEsIHRva2VuKSk7XHJcblx0XHRcdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRva2VuSW50ZXJjZXB0b3I7XHJcbiIsImltcG9ydCBPQXV0aEludGVyY2VwdG9yIGZyb20gXCIuL09BdXRoSW50ZXJjZXB0b3JcIjtcclxuaW1wb3J0IFRva2VuSW50ZXJjZXB0b3IgZnJvbSBcIi4vVG9rZW5JbnRlcmNlcHRvclwiO1xyXG5cclxuXHJcbmNvbnN0IERhdGEgPSB7XHJcblx0T0F1dGhJbnRlcmNlcHRvciA6IE9BdXRoSW50ZXJjZXB0b3IsXHJcblx0VG9rZW5JbnRlcmNlcHRvciA6IFRva2VuSW50ZXJjZXB0b3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==