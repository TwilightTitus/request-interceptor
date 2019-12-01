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
	if(typeof Global.fetch === "function"){	
		const ORGFETCH = Global.fetch;
		Global.fetch = function(aUrl, aRequest){		
			let request = aRequest || {};
			let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(aUrl);
			let data = {
				url : aUrl,
				request : aRequest,
				metadata : {					
					method : request.method || "GET",
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
	};
})(window || global || {});
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
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");




if(typeof XMLHttpRequest !== "undefined"){	
	const ORGOPEN = XMLHttpRequest.prototype.open;
	const ORGSEND = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.open = function(){
		let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(arguments[1]);
		this.__data = {
				url : arguments[1],
				request : this,
				metadata : {
					method : arguments[0],
					origin: match[1] || document.location.origin,
					protocol : (function(match){
						if(typeof match[2] === "undefined" || match[3] == "//")
							return document.location.protocol || "http:";
						else return match[3];			
					}).call(null, match),
					hostname: match[4] || document.location.hostname,
					port: match[6],
					query: match[7],
					async : typeof arguments[2] === "boolean" ? arguments[2] : true
				},
			__arguments : arguments
		};
		return ORGOPEN.apply(this, arguments);	
	};
	
	XMLHttpRequest.prototype.send = function(){        
	    if(this.__data.metadata.async){
	        let send = (function(args){
	            return ORGSEND.apply(this, args);
	        }).bind(this, arguments);
    		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__data)
    		.then(function(aData, aRequest){
    			try{
    				return send();
    			}catch (e) {
    				throw e;
    			}
    		})["catch"](console.error);

            return this;
	    }
	    console.warn(new Error("request interceptor don't support syncronized requests"));
	    return ORGSEND.apply(this, arguments);
	};
}

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
		VERSION : "1.0.0-beta3",
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



const appendOnFetch = function(aData, aToken){
	aData.request.headers = aData.request.headers || {};
	aData.request.headers["Authorization"] = "Bearer " + aToken;
	return aData;
};

const appendOnXhr = function(aData, aToken){
	aData.request.setRequestHeader("Authorization" , "Bearer " + aToken);
	return aData;
};

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
	setup.appendOnFetch = appendOnFetch;
	setup.appendOnXhr = appendOnXhr;
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
			let isXMLHttpRequest = aData.request instanceof XMLHttpRequest;	
			let appendOn = isXMLHttpRequest ? setup.appendOnXhr : setup.appendOnFetch;
				
			if(typeof token !== "undefined")
				return Promise.resolve(appendOn(aData, token));
			else
				return Promise.resolve(setup.fetchToken(aData))
				.then(function(aToken){
					token = aToken;
					return Promise.resolve(appendOn(aData, token));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBLEk7QUFDQSxpQztBQUNBLEdBQUc7QUFDSDtBQUNBLGtFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQixZQUFZO0FBQzVDLEc7QUFDQTtBQUNBO0FBQ2UseUVBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDdERoQztBQUFBO0FBQWtEO0FBQ0E7OztBQUdsRDtBQUNBLG9CQUFvQixpRUFBZ0I7QUFDcEMsb0JBQW9CLGlFQUFnQjtBQUNwQzs7QUFFZSw2REFBSSxFIiwiZmlsZSI6ImRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJjb25zdCBVUkxTUExJVFRFUiA9IC9eKCgoW146XFwvXSo6KT9cXC9cXC8pPyhbXjpcXC9dKikoXFw6KFswLTldKikpPykoXFwvLiopPyQvO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1VSTFNQTElUVEVSfTsiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG4oZnVuY3Rpb24oR2xvYmFsKXtcclxuXHRpZih0eXBlb2YgR2xvYmFsLmZldGNoID09PSBcImZ1bmN0aW9uXCIpe1x0XHJcblx0XHRjb25zdCBPUkdGRVRDSCA9IEdsb2JhbC5mZXRjaDtcclxuXHRcdEdsb2JhbC5mZXRjaCA9IGZ1bmN0aW9uKGFVcmwsIGFSZXF1ZXN0KXtcdFx0XHJcblx0XHRcdGxldCByZXF1ZXN0ID0gYVJlcXVlc3QgfHwge307XHJcblx0XHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRcdHJlcXVlc3QgOiBhUmVxdWVzdCxcclxuXHRcdFx0XHRtZXRhZGF0YSA6IHtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRtZXRob2QgOiByZXF1ZXN0Lm1ldGhvZCB8fCBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0b3JpZ2luOiBtYXRjaFsxXSB8fCBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sXHJcblx0XHRcdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fCBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRcdFx0YXN5bmMgOiB0cnVlXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIE1hbmFnZXIuZG9JbnRlcmNlcHQoZGF0YSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0cmV0dXJuIE9SR0ZFVENIKGRhdGEudXJsLCBkYXRhLnJlcXVlc3QpO1xyXG5cdFx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9KTsiLCJjb25zdCBJTlRFUkNFUFRPUlMgPSBbXTtcclxuY29uc3QgQ0FDSEUgPSB7fTtcclxuXHJcbmNvbnN0IGdldENoYWluID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRsZXQgY2hhaW4gPSBDQUNIRVthRGF0YS5tZXRhZGF0YS5vcmlnaW5dO1xyXG5cdGlmKHR5cGVvZiBjaGFpbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhaW4pO1xyXG5cdFxyXG5cdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdElOVEVSQ0VQVE9SUy5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShhSW50ZXJjZXB0b3IuZG9BY2NlcHQoYURhdGEpKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRyZXR1cm4gYUludGVyY2VwdG9yO1xyXG5cdFx0XHR9KTtcclxuXHRcdHByb21pc2VzLnB1c2gocHJvbWlzZSk7XHJcblx0fSk7XHJcblx0XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGNoYWluKXtcclxuXHRcdGNvbnN0IGludGVyY2VwdG9ycyA9IGNoYWluLmZpbHRlcihmdW5jdGlvbihpbnRlcmNlcHRvcil7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgaW50ZXJjZXB0b3IgIT09IFwidW5kZWZpbmVkXCI7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Q0FDSEVbYURhdGEubWV0YWRhdGEub3JpZ2luXSA9IGludGVyY2VwdG9ycztcclxuXHRcdHJldHVybiBpbnRlcmNlcHRvcnM7XHJcblx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxufTtcclxuXHJcbmNvbnN0IGlzT3JpZ2luSWdub3JlZCA9IGZ1bmN0aW9uKGRhdGEsIG9yaWdpbnMpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBvcmlnaW5zLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoZGF0YS5tZXRhZGF0YS5vcmlnaW4gPT0gb3JpZ2luc1tpXSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgTWFuYWdlciA9IHtcclxuXHRjb25maWcgOiB7XHJcblx0XHRpZ25vcmVEb2N1bWVudE9yaWdpbiA6IHRydWUsXHJcblx0XHRpZ25vcmVPcmlnaW5zIDogW11cdFx0XHJcblx0fSxcclxuXHRpbnRlcmNlcHRvcnMgOiBbXSxcclxuXHRkb0ludGVyY2VwdCA6IGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdGlmKE1hbmFnZXIuY29uZmlnLmlnbm9yZURvY3VtZW50T3JpZ2luICYmIGFEYXRhLm1ldGFkYXRhLm9yaWdpbiA9PSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0aWYodHlwZW9mIE1hbmFnZXIuY29uZmlnLmlnbm9yZU9yaWdpbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNPcmlnaW5JZ25vcmVkKGFEYXRhLCBNYW5hZ2VyLmNvbmZpZy5pZ25vcmVPcmlnaW5zKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBnZXRDaGFpbihhRGF0YSlcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGNoYWluKXtcclxuXHRcdFx0aWYodHlwZW9mIGNoYWluID09PSBcInVuZGVmaW5lZFwiIHx8IGNoYWluLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGhhbmRsZXMgPSBbXTtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYURhdGEpO1xyXG5cdFx0XHRjaGFpbi5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRcdFx0cHJvbWlzZS50aGVuKGFJbnRlcmNlcHRvci5kb0hhbmRsZSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1xyXG5cdH0sXHJcblx0YWRkSW50ZXJjZXB0b3IgOiBmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1x0XHRcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggIT0gMSAmJiB0eXBlb2YgYUludGVyY2VwdG9yICE9PSBcIm9iamVjdFwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJmdW5jdGlvbiByZXF1aXJlZCBhbiBpbnRlcmNlcHRvclwiKTtcclxuXHRcdGlmKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9BY2NlcHQgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvQWNjZXB0XFxcIiBmdW5jdGlvbiFcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvSGFuZGxlICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0hhbmRsZVxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0XHJcblx0XHRJTlRFUkNFUFRPUlMucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0cmV0dXJuIE1hbmFnZXI7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyBcclxuXHJcblxyXG4iLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG5cclxuaWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKXtcdFxyXG5cdGNvbnN0IE9SR09QRU4gPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcclxuXHRjb25zdCBPUkdTRU5EID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ7XHJcblx0WE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IG1hdGNoID0gQ29uc3RhbnRzLlVSTFNQTElUVEVSLmV4ZWMoYXJndW1lbnRzWzFdKTtcclxuXHRcdHRoaXMuX19kYXRhID0ge1xyXG5cdFx0XHRcdHVybCA6IGFyZ3VtZW50c1sxXSxcclxuXHRcdFx0XHRyZXF1ZXN0IDogdGhpcyxcclxuXHRcdFx0XHRtZXRhZGF0YSA6IHtcclxuXHRcdFx0XHRcdG1ldGhvZCA6IGFyZ3VtZW50c1swXSxcclxuXHRcdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRcdGFzeW5jIDogdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gXCJib29sZWFuXCIgPyBhcmd1bWVudHNbMl0gOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0X19hcmd1bWVudHMgOiBhcmd1bWVudHNcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gT1JHT1BFTi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1x0XHJcblx0fTtcclxuXHRcclxuXHRYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCl7ICAgICAgICBcclxuXHQgICAgaWYodGhpcy5fX2RhdGEubWV0YWRhdGEuYXN5bmMpe1xyXG5cdCAgICAgICAgbGV0IHNlbmQgPSAoZnVuY3Rpb24oYXJncyl7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIE9SR1NFTkQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0ICAgICAgICB9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICBcdFx0TWFuYWdlci5kb0ludGVyY2VwdCh0aGlzLl9fZGF0YSlcclxuICAgIFx0XHQudGhlbihmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG4gICAgXHRcdFx0dHJ5e1xyXG4gICAgXHRcdFx0XHRyZXR1cm4gc2VuZCgpO1xyXG4gICAgXHRcdFx0fWNhdGNoIChlKSB7XHJcbiAgICBcdFx0XHRcdHRocm93IGU7XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cdCAgICB9XHJcblx0ICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoXCJyZXF1ZXN0IGludGVyY2VwdG9yIGRvbid0IHN1cHBvcnQgc3luY3Jvbml6ZWQgcmVxdWVzdHNcIikpO1xyXG5cdCAgICByZXR1cm4gT1JHU0VORC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdH07XHJcbn0iLCJpbXBvcnQgXCIuL1hNTEh0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCBcIi4vRmV0Y2hcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3JzIGZyb20gXCIuL2ludGVyY2VwdG9yc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1x0XHJcblx0R2xvYmFsLmRlID0gR2xvYmFsLmRlIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cyA9IEdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdCA9IEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0IHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0TWFuYWdlciA6IE1hbmFnZXIsXHJcblx0XHRpbnRlcmNlcHRvcnMgOiBJbnRlcmNlcHRvcnNcclxuXHR9O1xyXG5cdFxyXG5cdEdsb2JhbC5SZXF1ZXN0SW50ZXJjZXB0TWFuYWdlciA9IE1hbmFnZXI7XHJcbn0pKHdpbmRvd3x8IGdsb2JhbCB8fCB7fSk7IiwiaW1wb3J0IFRva2VuSW50ZXJjZXB0b3IgZnJvbSBcIi4vVG9rZW5JbnRlcmNlcHRvclwiXHJcblxyXG5cclxuY29uc3QgYXBwZW5kT25GZXRjaCA9IGZ1bmN0aW9uKGFEYXRhLCBhVG9rZW4pe1xyXG5cdGFEYXRhLnJlcXVlc3QuaGVhZGVycyA9IGFEYXRhLnJlcXVlc3QuaGVhZGVycyB8fCB7fTtcclxuXHRhRGF0YS5yZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBhVG9rZW47XHJcblx0cmV0dXJuIGFEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kT25YaHIgPSBmdW5jdGlvbihhRGF0YSwgYVRva2VuKXtcclxuXHRhRGF0YS5yZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIgLCBcIkJlYXJlciBcIiArIGFUb2tlbik7XHJcblx0cmV0dXJuIGFEYXRhO1xyXG59O1xyXG5cclxuY29uc3QgT0F1dGhJbnRlcmNlcHRvciA9IGZ1bmN0aW9uKGFTZXR1cCl7XHJcblx0bGV0IHNldHVwID0gYVNldHVwO1xyXG5cdHNldHVwLmZldGNoVG9rZW4gPSBmdW5jdGlvbigpe1xyXG5cdFx0cmV0dXJuIGZldGNoKHNldHVwLmxvZ2luLnVybCwge1xyXG5cdFx0XHRtZXRob2Q6IChzZXR1cC5sb2dpbi5tZXRob2QgfHwgXCJnZXRcIilcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKGFSZXNwb25zZSl7XHJcblx0XHRcdHJldHVybiBhUmVzcG9uc2Vbc2V0dXAubG9naW4ucmVzcG9uc2UudmFsdWVTZWxlY3Rvcl07XHJcblx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcjt9KTtcdFx0XHJcblx0fTtcclxuXHRzZXR1cC5hcHBlbmRPbkZldGNoID0gYXBwZW5kT25GZXRjaDtcclxuXHRzZXR1cC5hcHBlbmRPblhociA9IGFwcGVuZE9uWGhyO1xyXG5cdHJldHVybiBUb2tlbkludGVyY2VwdG9yKGFTZXR1cCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPQXV0aEludGVyY2VwdG9yO1xyXG4iLCJjb25zdCBUb2tlbkludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRjb25zdCBzZXR1cCA9IGFTZXR1cDsgXHJcblx0bGV0IHRva2VuID0gdW5kZWZpbmVkO1xyXG5cdFxyXG5cdGNvbnN0IGRlZmF1bHRSZWZyZXNoVG9rZW4gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIG5ldyBQcm9taXNlKHNldHVwLmZldGNoVG9rZW4pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24oYVRva2VuKXtcclxuICAgICAgICAgICAgdG9rZW4gPSBhVG9rZW47XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfTtcclxuXHRcclxuXHRpZihzZXR1cC5yZWZyZXNoSW50ZXJ2YWwgPiAwKXtcclxuXHQgICAgY29uc3QgcmVmcmVzaFRva2VuID0gZGVmYXVsdFJlZnJlc2hUb2tlblxyXG5cdCAgICBpZih0eXBlb2Ygc2V0dXAucmVmcmVzaFRva2VuID09PSBcImZ1bmN0aW9uXCIpe1xyXG5cdCAgICAgICAgcmVmcmVzaFRva2VuID0gZnVuY3Rpb24oKXtcclxuXHQgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoc2V0dXAucmVmcmVzaFRva2VuKCkpXHJcblx0ICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oYVRva2VuKXtcclxuXHQgICAgICAgICAgICAgICAgdG9rZW4gPSBhVG9rZW47XHJcblx0ICAgICAgICAgICAgfSk7IFxyXG5cdCAgICAgICAgfTtcclxuXHQgICAgfVxyXG5cdCAgICBzZXRJbnRlcnZhbChyZWZyZXNoVG9rZW4sIHNldHVwLnJlZnJlc2hJbnRlcnZhbCB8fCAoNjAgKiAxMDAwKSlcclxuXHR9XHJcblx0XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdGRvQWNjZXB0IDogc2V0dXAuZG9BY2NlcHQgfHwgZnVuY3Rpb24oYURhdGEpe1x0XHRcdFxyXG5cdFx0XHRsZXQgdHlwZSA9IHR5cGVvZiBzZXR1cC5jb25kaXRpb247IFxyXG5cdFx0XHRpZih0eXBlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXR1cC5jb25kaXRpb24oYURhdGEpKTtcclxuXHRcdFx0ZWxzZSBpZih0eXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuY29uZGl0aW9uID09IGFEYXRhLm1ldGFkYXRhLm9yaWdpbik7XHJcblx0XHRcdGVsc2UgaWYoc2V0dXAuY29uZGl0aW9uIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBzZXR1cC5jb25kaXRpb24ubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRpZihzZXR1cC5jb25kaXRpb25baV0gPT0gYURhdGEubWV0YWRhdGEub3JpZ2luKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xyXG5cdFx0XHR9XHRcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRkb0hhbmRsZSA6IGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRcdFx0bGV0IGlzWE1MSHR0cFJlcXVlc3QgPSBhRGF0YS5yZXF1ZXN0IGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3Q7XHRcclxuXHRcdFx0bGV0IGFwcGVuZE9uID0gaXNYTUxIdHRwUmVxdWVzdCA/IHNldHVwLmFwcGVuZE9uWGhyIDogc2V0dXAuYXBwZW5kT25GZXRjaDtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHRva2VuICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kT24oYURhdGEsIHRva2VuKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldHVwLmZldGNoVG9rZW4oYURhdGEpKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0XHRcdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kT24oYURhdGEsIHRva2VuKSk7XHJcblx0XHRcdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5JbnRlcmNlcHRvcjtcclxuIiwiaW1wb3J0IE9BdXRoSW50ZXJjZXB0b3IgZnJvbSBcIi4vT0F1dGhJbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCI7XHJcblxyXG5cclxuY29uc3QgRGF0YSA9IHtcclxuXHRPQXV0aEludGVyY2VwdG9yIDogT0F1dGhJbnRlcmNlcHRvcixcclxuXHRUb2tlbkludGVyY2VwdG9yIDogVG9rZW5JbnRlcmNlcHRvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9