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
			let send = (function(args){
				return ORGFETCH.apply(this, args);
			}).bind(this, arguments);
			let request = aRequest || {};
			let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(aUrl);
			let data = {
				method : request.method || "GET",
				url : aUrl,
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
			};
			
			return _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data, request)
			.then(function(){
				return send();
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
	let chain = CACHE[aData.server];
	if(typeof chain !== "undefined")
		return Promise.resolve(chain);
	
	chain = [];
	let promises = [];
	INTERCEPTORS.forEach(function(aInterceptor){
		promises.push(
			aInterceptor.doAccept(aData)
			.then(function(value){
				if(value)
					chain.push(aInterceptor);
			}));
	});
	
	return Promise.all(promises)
	.then(function(){
		CACHE[aData.origin] = chain;
		return chain;
	})["catch"](function(error){throw error});
};

const isOriginIgnored = function(data, origins){
	for(let i = 0; i < origins.length; i++)
		if(data.origin == origins[i])
			return true;
	
	return false;
};

const Manager = {
	config : {
		ignoreDocumentOrigin : true,
		ignoreOrigins : []		
	},
	interceptors : [],
	doIntercept : function(aData, aRequest){
		if(Manager.config.ignoreDocumentOrigin && aData.origin == document.location.origin)
			return Promise.resolve(aData, aRequest);
		if(typeof Manager.config.ignoreOrigins !== "undefined" && isOriginIgnored(aData, Manager.config.ignoreOrigins))
			return Promise.resolve(aData, aRequest);
		
		return getChain(aData, aRequest)
		.then(function(chain){
			if(typeof chain === "undefined" || chain.length == 0)
				return Promise.resolve();
			
			let handles = [];
			chain.forEach(function(aInterceptor){
				handles.push(aInterceptor.doHandle(aData, aRequest));
			});			
			return Promise.all(handles);
		}).then(function(){
			return Promise.resolve(aData, aRequest);
		})["catch"](function(error){throw error});
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
		this.__interceptorRequestData = {
			method : arguments[0],
			url : arguments[1],
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
		};
		return ORGOPEN.apply(this, arguments);	
	};
	
	XMLHttpRequest.prototype.send = function(){        
	    if(this.__interceptorRequestData.async){
	        let send = (function(args){
	            return ORGSEND.apply(this, args);
	        }).bind(this, arguments);
    		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__interceptorRequestData, this)
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



const appendOnFetch = function(aRequest, aToken){
	aRequest.headers = aRequest.header || {};
	aRequest.headers["Authorization"] = "Bearer " + aToken;
};

const appendOnXhr = function(aRequest, aToken){
	aRequest.setRequestHeader("Authorization" , "Bearer " + aToken);	
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
			return new Promise(function(resolve){
				let type = typeof setup.condition; 
				if(type === "function")
					resolve(setup.condition(aData));
				else if(type === "string")
					resolve(setup.condition == aData.origin);
				else if(setup.condition instanceof Array){
					for(let i = 0; i < setup.condition.length; i++)
						if(setup.condition[i] == aData.origin)
							resolve(true);
				}	
				resolve(false);
			});	
		},
		doHandle : function(aData, aRequest){
			let isXMLHttpRequest = aRequest instanceof XMLHttpRequest;	
			let appendOn = isXMLHttpRequest ? setup.appendOnXhr : setup.appendOnFetch;
				
			if(typeof token !== "undefined")
				return Promise.resolve(appendOn(aRequest, token));
			else
				return Promise.resolve(setup.fetchToken(aData))
				.then(function(aToken){
					token = aToken;
					return Promise.resolve(appendOn(aRequest, token));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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SztBQUNBO0FBQ0EsSUFBSSxFO0FBQ0osR0FBRztBQUNIO0FBQ0EsNkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCLFlBQVk7QUFDNUMsRztBQUNBO0FBQ0E7QUFDZSx5RUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7QUN4RGhDO0FBQUE7QUFBa0Q7QUFDQTs7O0FBR2xEO0FBQ0Esb0JBQW9CLGlFQUFnQjtBQUNwQyxvQkFBb0IsaUVBQWdCO0FBQ3BDOztBQUVlLDZEQUFJLEUiLCJmaWxlIjoiZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IFVSTFNQTElUVEVSID0gL14oKChbXjpcXC9dKjopP1xcL1xcLyk/KFteOlxcL10qKShcXDooWzAtOV0qKSk/KShcXC8uKik/JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7VVJMU1BMSVRURVJ9OyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1xyXG5cdGlmKHR5cGVvZiBHbG9iYWwuZmV0Y2ggPT09IFwiZnVuY3Rpb25cIil7XHRcclxuXHRcdGNvbnN0IE9SR0ZFVENIID0gR2xvYmFsLmZldGNoO1xyXG5cdFx0R2xvYmFsLmZldGNoID0gZnVuY3Rpb24oYVVybCwgYVJlcXVlc3Qpe1xyXG5cdFx0XHRsZXQgc2VuZCA9IChmdW5jdGlvbihhcmdzKXtcclxuXHRcdFx0XHRyZXR1cm4gT1JHRkVUQ0guYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdH0pLmJpbmQodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdFx0bGV0IHJlcXVlc3QgPSBhUmVxdWVzdCB8fCB7fTtcclxuXHRcdFx0bGV0IG1hdGNoID0gQ29uc3RhbnRzLlVSTFNQTElUVEVSLmV4ZWMoYVVybCk7XHJcblx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdG1ldGhvZCA6IHJlcXVlc3QubWV0aG9kIHx8IFwiR0VUXCIsXHJcblx0XHRcdFx0dXJsIDogYVVybCxcclxuXHRcdFx0XHRvcmlnaW46IG1hdGNoWzFdIHx8IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbixcclxuXHRcdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgfHwgXCJodHRwOlwiO1xyXG5cdFx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdFx0aG9zdG5hbWU6IG1hdGNoWzRdIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRhc3luYyA6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBNYW5hZ2VyLmRvSW50ZXJjZXB0KGRhdGEsIHJlcXVlc3QpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIHNlbmQoKTtcclxuXHRcdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdH07XHJcblx0fTtcclxufSkod2luZG93IHx8IGdsb2JhbCB8fCB7fSk7IiwiY29uc3QgSU5URVJDRVBUT1JTID0gW107XHJcbmNvbnN0IENBQ0hFID0ge307XHJcblxyXG5jb25zdCBnZXRDaGFpbiA9IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0bGV0IGNoYWluID0gQ0FDSEVbYURhdGEuc2VydmVyXTtcclxuXHRpZih0eXBlb2YgY2hhaW4gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNoYWluKTtcclxuXHRcclxuXHRjaGFpbiA9IFtdO1xyXG5cdGxldCBwcm9taXNlcyA9IFtdO1xyXG5cdElOVEVSQ0VQVE9SUy5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRwcm9taXNlcy5wdXNoKFxyXG5cdFx0XHRhSW50ZXJjZXB0b3IuZG9BY2NlcHQoYURhdGEpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcclxuXHRcdFx0XHRpZih2YWx1ZSlcclxuXHRcdFx0XHRcdGNoYWluLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHRcdFx0fSkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHQudGhlbihmdW5jdGlvbigpe1xyXG5cdFx0Q0FDSEVbYURhdGEub3JpZ2luXSA9IGNoYWluO1xyXG5cdFx0cmV0dXJuIGNoYWluO1xyXG5cdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcbn07XHJcblxyXG5jb25zdCBpc09yaWdpbklnbm9yZWQgPSBmdW5jdGlvbihkYXRhLCBvcmlnaW5zKXtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgb3JpZ2lucy5sZW5ndGg7IGkrKylcclxuXHRcdGlmKGRhdGEub3JpZ2luID09IG9yaWdpbnNbaV0pXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IE1hbmFnZXIgPSB7XHJcblx0Y29uZmlnIDoge1xyXG5cdFx0aWdub3JlRG9jdW1lbnRPcmlnaW4gOiB0cnVlLFxyXG5cdFx0aWdub3JlT3JpZ2lucyA6IFtdXHRcdFxyXG5cdH0sXHJcblx0aW50ZXJjZXB0b3JzIDogW10sXHJcblx0ZG9JbnRlcmNlcHQgOiBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdFx0aWYoTWFuYWdlci5jb25maWcuaWdub3JlRG9jdW1lbnRPcmlnaW4gJiYgYURhdGEub3JpZ2luID09IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbilcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0aWYodHlwZW9mIE1hbmFnZXIuY29uZmlnLmlnbm9yZU9yaWdpbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNPcmlnaW5JZ25vcmVkKGFEYXRhLCBNYW5hZ2VyLmNvbmZpZy5pZ25vcmVPcmlnaW5zKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZ2V0Q2hhaW4oYURhdGEsIGFSZXF1ZXN0KVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oY2hhaW4pe1xyXG5cdFx0XHRpZih0eXBlb2YgY2hhaW4gPT09IFwidW5kZWZpbmVkXCIgfHwgY2hhaW4ubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGhhbmRsZXMgPSBbXTtcclxuXHRcdFx0Y2hhaW4uZm9yRWFjaChmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0XHRcdGhhbmRsZXMucHVzaChhSW50ZXJjZXB0b3IuZG9IYW5kbGUoYURhdGEsIGFSZXF1ZXN0KSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoaGFuZGxlcyk7XHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEsIGFSZXF1ZXN0KTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0fSxcclxuXHRhZGRJbnRlcmNlcHRvciA6IGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHRcdFxyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAhPSAxICYmIHR5cGVvZiBhSW50ZXJjZXB0b3IgIT09IFwib2JqZWN0XCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImZ1bmN0aW9uIHJlcXVpcmVkIGFuIGludGVyY2VwdG9yXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0FjY2VwdCAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9BY2NlcHRcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdGlmKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9IYW5kbGUgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvSGFuZGxlXFxcIiBmdW5jdGlvbiFcIik7XHJcblx0XHRcclxuXHRcdElOVEVSQ0VQVE9SUy5wdXNoKGFJbnRlcmNlcHRvcik7XHJcblx0XHRyZXR1cm4gTWFuYWdlcjtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IFxyXG5cclxuXHJcbiIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcblxyXG5pZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpe1x0XHJcblx0Y29uc3QgT1JHT1BFTiA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuO1xyXG5cdGNvbnN0IE9SR1NFTkQgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDtcclxuXHRYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhcmd1bWVudHNbMV0pO1xyXG5cdFx0dGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEgPSB7XHJcblx0XHRcdG1ldGhvZCA6IGFyZ3VtZW50c1swXSxcclxuXHRcdFx0dXJsIDogYXJndW1lbnRzWzFdLFxyXG5cdFx0XHRvcmlnaW46IG1hdGNoWzFdIHx8IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbixcclxuXHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgfHwgXCJodHRwOlwiO1xyXG5cdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0aG9zdG5hbWU6IG1hdGNoWzRdIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRhc3luYyA6IHR5cGVvZiBhcmd1bWVudHNbMl0gPT09IFwiYm9vbGVhblwiID8gYXJndW1lbnRzWzJdIDogdHJ1ZVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBPUkdPUEVOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHRcclxuXHR9O1xyXG5cdFxyXG5cdFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKXsgICAgICAgIFxyXG5cdCAgICBpZih0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YS5hc3luYyl7XHJcblx0ICAgICAgICBsZXQgc2VuZCA9IChmdW5jdGlvbihhcmdzKXtcclxuXHQgICAgICAgICAgICByZXR1cm4gT1JHU0VORC5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHQgICAgICAgIH0pLmJpbmQodGhpcywgYXJndW1lbnRzKTtcclxuICAgIFx0XHRNYW5hZ2VyLmRvSW50ZXJjZXB0KHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhLCB0aGlzKVxyXG4gICAgXHRcdC50aGVuKGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcbiAgICBcdFx0XHR0cnl7XHJcbiAgICBcdFx0XHRcdHJldHVybiBzZW5kKCk7XHJcbiAgICBcdFx0XHR9Y2F0Y2ggKGUpIHtcclxuICAgIFx0XHRcdFx0dGhyb3cgZTtcclxuICAgIFx0XHRcdH1cclxuICAgIFx0XHR9KVtcImNhdGNoXCJdKGNvbnNvbGUuZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcblx0ICAgIH1cclxuXHQgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcihcInJlcXVlc3QgaW50ZXJjZXB0b3IgZG9uJ3Qgc3VwcG9ydCBzeW5jcm9uaXplZCByZXF1ZXN0c1wiKSk7XHJcblx0ICAgIHJldHVybiBPUkdTRU5ELmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0fTtcclxufSIsImltcG9ydCBcIi4vWE1MSHR0cFJlcXVlc3RcIjtcclxuaW1wb3J0IFwiLi9GZXRjaFwiO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmNlcHRvcnMgZnJvbSBcIi4vaW50ZXJjZXB0b3JzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHRcclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0ID0gR2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0XHRNYW5hZ2VyIDogTWFuYWdlcixcclxuXHRcdGludGVyY2VwdG9ycyA6IEludGVyY2VwdG9yc1xyXG5cdH07XHJcblx0XHJcblx0R2xvYmFsLlJlcXVlc3RJbnRlcmNlcHRNYW5hZ2VyID0gTWFuYWdlcjtcclxufSkod2luZG93fHwgZ2xvYmFsIHx8IHt9KTsiLCJpbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCJcclxuXHJcblxyXG5jb25zdCBhcHBlbmRPbkZldGNoID0gZnVuY3Rpb24oYVJlcXVlc3QsIGFUb2tlbil7XHJcblx0YVJlcXVlc3QuaGVhZGVycyA9IGFSZXF1ZXN0LmhlYWRlciB8fCB7fTtcclxuXHRhUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYVRva2VuO1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kT25YaHIgPSBmdW5jdGlvbihhUmVxdWVzdCwgYVRva2VuKXtcclxuXHRhUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiICwgXCJCZWFyZXIgXCIgKyBhVG9rZW4pO1x0XHJcbn07XHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1x0XHRcclxuXHR9O1xyXG5cdHNldHVwLmFwcGVuZE9uRmV0Y2ggPSBhcHBlbmRPbkZldGNoO1xyXG5cdHNldHVwLmFwcGVuZE9uWGhyID0gYXBwZW5kT25YaHI7XHJcblx0cmV0dXJuIFRva2VuSW50ZXJjZXB0b3IoYVNldHVwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9BdXRoSW50ZXJjZXB0b3I7XHJcbiIsImNvbnN0IFRva2VuSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdGNvbnN0IHNldHVwID0gYVNldHVwOyBcclxuXHRsZXQgdG9rZW4gPSB1bmRlZmluZWQ7XHJcblx0XHJcblx0Y29uc3QgZGVmYXVsdFJlZnJlc2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbmV3IFByb21pc2Uoc2V0dXAuZmV0Y2hUb2tlbilcclxuICAgICAgICAudGhlbihmdW5jdGlvbihhVG9rZW4pe1xyXG4gICAgICAgICAgICB0b2tlbiA9IGFUb2tlbjtcclxuICAgICAgICB9KTsgXHJcbiAgICB9O1xyXG5cdFxyXG5cdGlmKHNldHVwLnJlZnJlc2hJbnRlcnZhbCA+IDApe1xyXG5cdCAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBkZWZhdWx0UmVmcmVzaFRva2VuXHJcblx0ICAgIGlmKHR5cGVvZiBzZXR1cC5yZWZyZXNoVG9rZW4gPT09IFwiZnVuY3Rpb25cIil7XHJcblx0ICAgICAgICByZWZyZXNoVG9rZW4gPSBmdW5jdGlvbigpe1xyXG5cdCAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShzZXR1cC5yZWZyZXNoVG9rZW4oKSlcclxuXHQgICAgICAgICAgICAudGhlbihmdW5jdGlvbihhVG9rZW4pe1xyXG5cdCAgICAgICAgICAgICAgICB0b2tlbiA9IGFUb2tlbjtcclxuXHQgICAgICAgICAgICB9KTsgXHJcblx0ICAgICAgICB9O1xyXG5cdCAgICB9XHJcblx0ICAgIHNldEludGVydmFsKHJlZnJlc2hUb2tlbiwgc2V0dXAucmVmcmVzaEludGVydmFsIHx8ICg2MCAqIDEwMDApKVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0ZG9BY2NlcHQgOiBzZXR1cC5kb0FjY2VwdCB8fCBmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKXtcclxuXHRcdFx0XHRsZXQgdHlwZSA9IHR5cGVvZiBzZXR1cC5jb25kaXRpb247IFxyXG5cdFx0XHRcdGlmKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdHJlc29sdmUoc2V0dXAuY29uZGl0aW9uKGFEYXRhKSk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShzZXR1cC5jb25kaXRpb24gPT0gYURhdGEub3JpZ2luKTtcclxuXHRcdFx0XHRlbHNlIGlmKHNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBzZXR1cC5jb25kaXRpb24ubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRcdGlmKHNldHVwLmNvbmRpdGlvbltpXSA9PSBhRGF0YS5vcmlnaW4pXHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcclxuXHRcdFx0fSk7XHRcclxuXHRcdH0sXHJcblx0XHRkb0hhbmRsZSA6IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0XHRcdGxldCBpc1hNTEh0dHBSZXF1ZXN0ID0gYVJlcXVlc3QgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdDtcdFxyXG5cdFx0XHRsZXQgYXBwZW5kT24gPSBpc1hNTEh0dHBSZXF1ZXN0ID8gc2V0dXAuYXBwZW5kT25YaHIgOiBzZXR1cC5hcHBlbmRPbkZldGNoO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgdG9rZW4gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhcHBlbmRPbihhUmVxdWVzdCwgdG9rZW4pKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuZmV0Y2hUb2tlbihhRGF0YSkpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oYVRva2VuKXtcclxuXHRcdFx0XHRcdHRva2VuID0gYVRva2VuO1xyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhcHBlbmRPbihhUmVxdWVzdCwgdG9rZW4pKTtcclxuXHRcdFx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkludGVyY2VwdG9yO1xyXG4iLCJpbXBvcnQgT0F1dGhJbnRlcmNlcHRvciBmcm9tIFwiLi9PQXV0aEludGVyY2VwdG9yXCI7XHJcbmltcG9ydCBUb2tlbkludGVyY2VwdG9yIGZyb20gXCIuL1Rva2VuSW50ZXJjZXB0b3JcIjtcclxuXHJcblxyXG5jb25zdCBEYXRhID0ge1xyXG5cdE9BdXRoSW50ZXJjZXB0b3IgOiBPQXV0aEludGVyY2VwdG9yLFxyXG5cdFRva2VuSW50ZXJjZXB0b3IgOiBUb2tlbkludGVyY2VwdG9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=