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
		if(Manager.ignoreDocumentOrigin && aData.origin == document.location.origin)
			return Promise.resolve(aData, aRequest);
		if(typeof ignoreOrigins !== "undefined" && isOriginIgnored(aData, Manager.ignoreOrigins))
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
		let send = (function(args){
			return ORGSEND.apply(this, args);
		}).bind(this, arguments);
		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__interceptorRequestData, this)
		.then(function(aData, aRequest){
			try{
				console.log("org request");
				return send();
			}catch (e) {
				throw e;
			}
		})["catch"](console.error);
		
		return this;
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
	setInterval(function(){
		new Promise(setup.fetchToken)
		.then(function(aToken){
			token = aToken;
		});	
	}, setup.refreshInterval || (60 * 1000));
	
	
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
				return Promise.resolve(setup.fetchToken())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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O0FBQ0EsS0FBSywyQkFBMkIsWUFBWTtBQUM1QyxHO0FBQ0E7QUFDQTtBQUNlLHlFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7OztBQzFDaEM7QUFBQTtBQUFrRDtBQUNBOzs7QUFHbEQ7QUFDQSxvQkFBb0IsaUVBQWdCO0FBQ3BDLG9CQUFvQixpRUFBZ0I7QUFDcEM7O0FBRWUsNkRBQUksRSIsImZpbGUiOiJkZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgVVJMU1BMSVRURVIgPSAvXigoKFteOlxcL10qOik/XFwvXFwvKT8oW146XFwvXSopKFxcOihbMC05XSopKT8pKFxcLy4qKT8kLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtVUkxTUExJVFRFUn07IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHJcblx0aWYodHlwZW9mIEdsb2JhbC5mZXRjaCA9PT0gXCJmdW5jdGlvblwiKXtcdFxyXG5cdFx0Y29uc3QgT1JHRkVUQ0ggPSBHbG9iYWwuZmV0Y2g7XHJcblx0XHRHbG9iYWwuZmV0Y2ggPSBmdW5jdGlvbihhVXJsLCBhUmVxdWVzdCl7XHJcblx0XHRcdGxldCBzZW5kID0gKGZ1bmN0aW9uKGFyZ3Mpe1xyXG5cdFx0XHRcdHJldHVybiBPUkdGRVRDSC5hcHBseSh0aGlzLCBhcmdzKTtcclxuXHRcdFx0fSkuYmluZCh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgcmVxdWVzdCA9IGFSZXF1ZXN0IHx8IHt9O1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhVXJsKTtcclxuXHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0bWV0aG9kIDogcmVxdWVzdC5tZXRob2QgfHwgXCJHRVRcIixcclxuXHRcdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRcdGFzeW5jIDogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIE1hbmFnZXIuZG9JbnRlcmNlcHQoZGF0YSwgcmVxdWVzdClcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXR1cm4gc2VuZCgpO1xyXG5cdFx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9KTsiLCJjb25zdCBJTlRFUkNFUFRPUlMgPSBbXTtcclxuY29uc3QgQ0FDSEUgPSB7fTtcclxuXHJcbmNvbnN0IGdldENoYWluID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRsZXQgY2hhaW4gPSBDQUNIRVthRGF0YS5zZXJ2ZXJdO1xyXG5cdGlmKHR5cGVvZiBjaGFpbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhaW4pO1xyXG5cdFxyXG5cdGNoYWluID0gW107XHJcblx0bGV0IHByb21pc2VzID0gW107XHJcblx0SU5URVJDRVBUT1JTLmZvckVhY2goZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcclxuXHRcdHByb21pc2VzLnB1c2goXHJcblx0XHRcdGFJbnRlcmNlcHRvci5kb0FjY2VwdChhRGF0YSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24odmFsdWUpe1xyXG5cdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0Y2hhaW4ucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0XHR9KSk7XHJcblx0fSk7XHJcblx0XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cdC50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRDQUNIRVthRGF0YS5vcmlnaW5dID0gY2hhaW47XHJcblx0XHRyZXR1cm4gY2hhaW47XHJcblx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxufTtcclxuXHJcbmNvbnN0IGlzT3JpZ2luSWdub3JlZCA9IGZ1bmN0aW9uKGRhdGEsIG9yaWdpbnMpe1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBvcmlnaW5zLmxlbmd0aDsgaSsrKVxyXG5cdFx0aWYoZGF0YS5vcmlnaW4gPT0gb3JpZ2luc1tpXSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgTWFuYWdlciA9IHtcclxuXHRjb25maWcgOiB7XHJcblx0XHRpZ25vcmVEb2N1bWVudE9yaWdpbiA6IHRydWUsXHJcblx0XHRpZ25vcmVPcmlnaW5zIDogW11cdFx0XHJcblx0fSxcclxuXHRpbnRlcmNlcHRvcnMgOiBbXSxcclxuXHRkb0ludGVyY2VwdCA6IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0XHRpZihNYW5hZ2VyLmlnbm9yZURvY3VtZW50T3JpZ2luICYmIGFEYXRhLm9yaWdpbiA9PSBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4pXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEsIGFSZXF1ZXN0KTtcclxuXHRcdGlmKHR5cGVvZiBpZ25vcmVPcmlnaW5zICE9PSBcInVuZGVmaW5lZFwiICYmIGlzT3JpZ2luSWdub3JlZChhRGF0YSwgTWFuYWdlci5pZ25vcmVPcmlnaW5zKSlcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gZ2V0Q2hhaW4oYURhdGEsIGFSZXF1ZXN0KVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oY2hhaW4pe1xyXG5cdFx0XHRpZih0eXBlb2YgY2hhaW4gPT09IFwidW5kZWZpbmVkXCIgfHwgY2hhaW4ubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGhhbmRsZXMgPSBbXTtcclxuXHRcdFx0Y2hhaW4uZm9yRWFjaChmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0XHRcdGhhbmRsZXMucHVzaChhSW50ZXJjZXB0b3IuZG9IYW5kbGUoYURhdGEsIGFSZXF1ZXN0KSk7XHJcblx0XHRcdH0pO1x0XHRcdFxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoaGFuZGxlcyk7XHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYURhdGEsIGFSZXF1ZXN0KTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0fSxcclxuXHRhZGRJbnRlcmNlcHRvciA6IGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHRcdFxyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAhPSAxICYmIHR5cGVvZiBhSW50ZXJjZXB0b3IgIT09IFwib2JqZWN0XCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImZ1bmN0aW9uIHJlcXVpcmVkIGFuIGludGVyY2VwdG9yXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0FjY2VwdCAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9BY2NlcHRcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdGlmKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9IYW5kbGUgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvSGFuZGxlXFxcIiBmdW5jdGlvbiFcIik7XHJcblx0XHRcclxuXHRcdElOVEVSQ0VQVE9SUy5wdXNoKGFJbnRlcmNlcHRvcik7XHJcblx0XHRyZXR1cm4gTWFuYWdlcjtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IFxyXG5cclxuXHJcbiIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcblxyXG5pZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpe1x0XHJcblx0Y29uc3QgT1JHT1BFTiA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuO1xyXG5cdGNvbnN0IE9SR1NFTkQgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDtcclxuXHRYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhcmd1bWVudHNbMV0pO1xyXG5cdFx0dGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEgPSB7XHJcblx0XHRcdG1ldGhvZCA6IGFyZ3VtZW50c1swXSxcclxuXHRcdFx0dXJsIDogYXJndW1lbnRzWzFdLFxyXG5cdFx0XHRvcmlnaW46IG1hdGNoWzFdIHx8IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbixcclxuXHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgfHwgXCJodHRwOlwiO1xyXG5cdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0aG9zdG5hbWU6IG1hdGNoWzRdIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRhc3luYyA6IHR5cGVvZiBhcmd1bWVudHNbMl0gPT09IFwiYm9vbGVhblwiID8gYXJndW1lbnRzWzJdIDogdHJ1ZVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBPUkdPUEVOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHRcclxuXHR9O1xyXG5cdFxyXG5cdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgc2VuZCA9IChmdW5jdGlvbihhcmdzKXtcclxuXHRcdFx0cmV0dXJuIE9SR1NFTkQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHR9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRNYW5hZ2VyLmRvSW50ZXJjZXB0KHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhLCB0aGlzKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRcdFx0dHJ5e1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwib3JnIHJlcXVlc3RcIik7XHJcblx0XHRcdFx0cmV0dXJuIHNlbmQoKTtcclxuXHRcdFx0fWNhdGNoIChlKSB7XHJcblx0XHRcdFx0dGhyb3cgZTtcclxuXHRcdFx0fVxyXG5cdFx0fSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSIsImltcG9ydCBcIi4vWE1MSHR0cFJlcXVlc3RcIjtcclxuaW1wb3J0IFwiLi9GZXRjaFwiO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmNlcHRvcnMgZnJvbSBcIi4vaW50ZXJjZXB0b3JzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHRcclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0ID0gR2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0XHRNYW5hZ2VyIDogTWFuYWdlcixcclxuXHRcdGludGVyY2VwdG9ycyA6IEludGVyY2VwdG9yc1xyXG5cdH07XHJcblx0XHJcblx0R2xvYmFsLlJlcXVlc3RJbnRlcmNlcHRNYW5hZ2VyID0gTWFuYWdlcjtcclxufSkod2luZG93fHwgZ2xvYmFsIHx8IHt9KTsiLCJpbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCJcclxuXHJcblxyXG5jb25zdCBhcHBlbmRPbkZldGNoID0gZnVuY3Rpb24oYVJlcXVlc3QsIGFUb2tlbil7XHJcblx0YVJlcXVlc3QuaGVhZGVycyA9IGFSZXF1ZXN0LmhlYWRlciB8fCB7fTtcclxuXHRhUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYVRva2VuO1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kT25YaHIgPSBmdW5jdGlvbihhUmVxdWVzdCwgYVRva2VuKXtcclxuXHRhUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiICwgXCJCZWFyZXIgXCIgKyBhVG9rZW4pO1x0XHJcbn07XHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1x0XHRcclxuXHR9O1xyXG5cdHNldHVwLmFwcGVuZE9uRmV0Y2ggPSBhcHBlbmRPbkZldGNoO1xyXG5cdHNldHVwLmFwcGVuZE9uWGhyID0gYXBwZW5kT25YaHI7XHJcblx0cmV0dXJuIFRva2VuSW50ZXJjZXB0b3IoYVNldHVwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9BdXRoSW50ZXJjZXB0b3I7XHJcbiIsImNvbnN0IFRva2VuSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdGNvbnN0IHNldHVwID0gYVNldHVwOyBcclxuXHRsZXQgdG9rZW4gPSB1bmRlZmluZWQ7XHJcblx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdG5ldyBQcm9taXNlKHNldHVwLmZldGNoVG9rZW4pXHJcblx0XHQudGhlbihmdW5jdGlvbihhVG9rZW4pe1xyXG5cdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdH0pO1x0XHJcblx0fSwgc2V0dXAucmVmcmVzaEludGVydmFsIHx8ICg2MCAqIDEwMDApKTtcclxuXHRcclxuXHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0ZG9BY2NlcHQgOiBzZXR1cC5kb0FjY2VwdCB8fCBmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKXtcclxuXHRcdFx0XHRsZXQgdHlwZSA9IHR5cGVvZiBzZXR1cC5jb25kaXRpb247IFxyXG5cdFx0XHRcdGlmKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdHJlc29sdmUoc2V0dXAuY29uZGl0aW9uKGFEYXRhKSk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShzZXR1cC5jb25kaXRpb24gPT0gYURhdGEub3JpZ2luKTtcclxuXHRcdFx0XHRlbHNlIGlmKHNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBzZXR1cC5jb25kaXRpb24ubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRcdGlmKHNldHVwLmNvbmRpdGlvbltpXSA9PSBhRGF0YS5vcmlnaW4pXHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcclxuXHRcdFx0fSk7XHRcclxuXHRcdH0sXHJcblx0XHRkb0hhbmRsZSA6IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0XHRcdGxldCBpc1hNTEh0dHBSZXF1ZXN0ID0gYVJlcXVlc3QgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdDtcdFxyXG5cdFx0XHRsZXQgYXBwZW5kT24gPSBpc1hNTEh0dHBSZXF1ZXN0ID8gc2V0dXAuYXBwZW5kT25YaHIgOiBzZXR1cC5hcHBlbmRPbkZldGNoO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgdG9rZW4gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhcHBlbmRPbihhUmVxdWVzdCwgdG9rZW4pKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuZmV0Y2hUb2tlbigpKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0XHRcdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kT24oYVJlcXVlc3QsIHRva2VuKSk7XHJcblx0XHRcdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5JbnRlcmNlcHRvcjtcclxuIiwiaW1wb3J0IE9BdXRoSW50ZXJjZXB0b3IgZnJvbSBcIi4vT0F1dGhJbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCI7XHJcblxyXG5cclxuY29uc3QgRGF0YSA9IHtcclxuXHRPQXV0aEludGVyY2VwdG9yIDogT0F1dGhJbnRlcmNlcHRvcixcclxuXHRUb2tlbkludGVyY2VwdG9yIDogVG9rZW5JbnRlcmNlcHRvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9