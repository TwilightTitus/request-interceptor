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
			let send = ORGFETCH.bind(this, arguments);
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

	console.log("promises", promises);
	return Promise.all(promises)
	.then(function(){
		CACHE[aData.origin] = chain;
		return chain;
	})["catch"](function(error){throw error});
};

const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest){
		console.log("origin", aData.origin);
//		if(aData.origin != "http://test.de")
//			return Promise.resolve(aData, aRequest);
		
		getChain(aData, aRequest)
		.then(function(chain){
			console.log("chain", chain);
			return chain;
		}).then(function(chain){
			let handles = [];
			chain.forEach(function(aInterceptor){
				handles.push(aInterceptor.doHandle(aData, aRequest));
			});			
			return Promise.all(handles);
		}).then(function(){
			return Promise.resolve(aData, aRequest);
		})["catch"](console.error);
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
		console.log("o1");
		let match = _Constants__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].URLSPLITTER.exec(arguments[1]);
		console.log("o2");
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
		console.log("o3");
		return ORGOPEN.apply(this, arguments);	
	};
	
	 XMLHttpRequest.prototype.send = function(){
		console.log("1");
		let send = ORGSEND.bind(this, arguments);
		console.log("2");
		let intercept = _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__interceptorRequestData, this);
		console.log("3", intercept);
		intercept.then(function(aData, aRequest){
			return send();
		})["catch"](function(error){throw error});
		
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
		VERSION : "1.0.0-beta2",
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



const appendJwtOnFetch = function(aRequest, aToken){
	return new Promise(function(){
		aRequest.headers = aRequest.header || {};
		aRequest.headers["Authorization"] = "Bearer " + aToken;
	});	
};

const appendJwtOnXhr = function(aRequest, aJWT){
	return new Promise(function(){
		aRequest.setRequestHeader("Authorization" , "Bearer " + aToken);
	});
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
		});
	};
	setup.appendJwtOnFetch = appendJwtOnFetch;
	setup.appendJwtOnXhr = appendJwtOnXhr;
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
	const token = undefined;
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
			let appendFunction = isXMLHttpRequest ? setup.appendJwtOnXhr : setup.appendJwtOnFetch;
				
			if(typeof token !== "undefined")
				return appendFunction(aRequest, token);
			else
				return new Promise(setup.fetchToken)
				.then(function(aToken){
					token = aToken;
					appendFunction(aRequest, token)
				});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QTtBQUFrRDtBQUNBOzs7QUFHbEQ7QUFDQSxvQkFBb0IsaUVBQWdCO0FBQ3BDLG9CQUFvQixpRUFBZ0I7QUFDcEM7O0FBRWUsNkRBQUksRSIsImZpbGUiOiJkZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgVVJMU1BMSVRURVIgPSAvXigoKFteOlxcL10qOik/XFwvXFwvKT8oW146XFwvXSopKFxcOihbMC05XSopKT8pKFxcLy4qKT8kLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtVUkxTUExJVFRFUn07IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHJcblx0aWYodHlwZW9mIEdsb2JhbC5mZXRjaCA9PT0gXCJmdW5jdGlvblwiKXtcdFxyXG5cdFx0Y29uc3QgT1JHRkVUQ0ggPSBHbG9iYWwuZmV0Y2g7XHJcblx0XHRHbG9iYWwuZmV0Y2ggPSBmdW5jdGlvbihhVXJsLCBhUmVxdWVzdCl7XHRcdFx0XHJcblx0XHRcdGxldCBzZW5kID0gT1JHRkVUQ0guYmluZCh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRsZXQgcmVxdWVzdCA9IGFSZXF1ZXN0IHx8IHt9O1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhVXJsKTtcclxuXHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0bWV0aG9kIDogcmVxdWVzdC5tZXRob2QgfHwgXCJHRVRcIixcclxuXHRcdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRcdGFzeW5jIDogdHJ1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0cmV0dXJuIE1hbmFnZXIuZG9JbnRlcmNlcHQoZGF0YSwgcmVxdWVzdClcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRyZXR1cm4gc2VuZCgpO1xyXG5cdFx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9KTsiLCJjb25zdCBJTlRFUkNFUFRPUlMgPSBbXTtcclxuY29uc3QgQ0FDSEUgPSB7fTtcclxuXHJcbmNvbnN0IGdldENoYWluID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRsZXQgY2hhaW4gPSBDQUNIRVthRGF0YS5zZXJ2ZXJdO1xyXG5cdGlmKHR5cGVvZiBjaGFpbiAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoY2hhaW4pO1xyXG5cdFxyXG5cdGNoYWluID0gW107XHJcblx0bGV0IHByb21pc2VzID0gW107XHJcblx0SU5URVJDRVBUT1JTLmZvckVhY2goZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcclxuXHRcdHByb21pc2VzLnB1c2goXHJcblx0XHRcdGFJbnRlcmNlcHRvci5kb0FjY2VwdChhRGF0YSlcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24odmFsdWUpe1xyXG5cdFx0XHRcdGlmKHZhbHVlKVxyXG5cdFx0XHRcdFx0Y2hhaW4ucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0XHR9KSk7XHJcblx0fSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKFwicHJvbWlzZXNcIiwgcHJvbWlzZXMpO1xyXG5cdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHQudGhlbihmdW5jdGlvbigpe1xyXG5cdFx0Q0FDSEVbYURhdGEub3JpZ2luXSA9IGNoYWluO1xyXG5cdFx0cmV0dXJuIGNoYWluO1xyXG5cdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcbn07XHJcblxyXG5jb25zdCBNYW5hZ2VyID0ge1x0XHJcblx0aW50ZXJjZXB0b3JzIDogW10sXHJcblx0ZG9JbnRlcmNlcHQgOiBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJvcmlnaW5cIiwgYURhdGEub3JpZ2luKTtcclxuLy9cdFx0aWYoYURhdGEub3JpZ2luICE9IFwiaHR0cDovL3Rlc3QuZGVcIilcclxuLy9cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEYXRhLCBhUmVxdWVzdCk7XHJcblx0XHRcclxuXHRcdGdldENoYWluKGFEYXRhLCBhUmVxdWVzdClcclxuXHRcdC50aGVuKGZ1bmN0aW9uKGNoYWluKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJjaGFpblwiLCBjaGFpbik7XHJcblx0XHRcdHJldHVybiBjaGFpbjtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oY2hhaW4pe1xyXG5cdFx0XHRsZXQgaGFuZGxlcyA9IFtdO1xyXG5cdFx0XHRjaGFpbi5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRcdFx0aGFuZGxlcy5wdXNoKGFJbnRlcmNlcHRvci5kb0hhbmRsZShhRGF0YSwgYVJlcXVlc3QpKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChoYW5kbGVzKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0fSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHR9LFxyXG5cdGFkZEludGVyY2VwdG9yIDogZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcdFx0XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICE9IDEgJiYgdHlwZW9mIGFJbnRlcmNlcHRvciAhPT0gXCJvYmplY3RcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZnVuY3Rpb24gcmVxdWlyZWQgYW4gaW50ZXJjZXB0b3JcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvQWNjZXB0ICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0FjY2VwdFxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0hhbmRsZSAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9IYW5kbGVcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdFxyXG5cdFx0SU5URVJDRVBUT1JTLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHRcdHJldHVybiBNYW5hZ2VyO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIil7XHRcclxuXHRjb25zdCBPUkdPUEVOID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW47XHJcblx0Y29uc3QgT1JHU0VORCA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1xyXG5cdFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnNvbGUubG9nKFwibzFcIik7XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhcmd1bWVudHNbMV0pO1xyXG5cdFx0Y29uc29sZS5sb2coXCJvMlwiKTtcclxuXHRcdHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhID0ge1xyXG5cdFx0XHRtZXRob2QgOiBhcmd1bWVudHNbMF0sXHJcblx0XHRcdHVybCA6IGFyZ3VtZW50c1sxXSxcclxuXHRcdFx0b3JpZ2luOiBtYXRjaFsxXSB8fCBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sXHJcblx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fCBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0YXN5bmMgOiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSBcImJvb2xlYW5cIiA/IGFyZ3VtZW50c1syXSA6IHRydWVcclxuXHRcdH07XHJcblx0XHRjb25zb2xlLmxvZyhcIm8zXCIpO1xyXG5cdFx0cmV0dXJuIE9SR09QRU4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcdFxyXG5cdH07XHJcblx0XHJcblx0IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdGNvbnNvbGUubG9nKFwiMVwiKTtcclxuXHRcdGxldCBzZW5kID0gT1JHU0VORC5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIjJcIik7XHJcblx0XHRsZXQgaW50ZXJjZXB0ID0gTWFuYWdlci5kb0ludGVyY2VwdCh0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YSwgdGhpcyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIjNcIiwgaW50ZXJjZXB0KTtcclxuXHRcdGludGVyY2VwdC50aGVuKGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0XHRcdHJldHVybiBzZW5kKCk7XHJcblx0XHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9O1xyXG59IiwiaW1wb3J0IFwiLi9YTUxIdHRwUmVxdWVzdFwiO1xyXG5pbXBvcnQgXCIuL0ZldGNoXCI7XHJcbmltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IEludGVyY2VwdG9ycyBmcm9tIFwiLi9pbnRlcmNlcHRvcnNcIjtcclxuXHJcblxyXG4oZnVuY3Rpb24oR2xvYmFsKXtcdFxyXG5cdEdsb2JhbC5kZSA9IEdsb2JhbC5kZSB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMgPSBHbG9iYWwuZGUudGl0dXMgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgPSBHbG9iYWwuZGUudGl0dXMucmVxdWVzdCB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvciA9IHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRcdE1hbmFnZXIgOiBNYW5hZ2VyLFxyXG5cdFx0aW50ZXJjZXB0b3JzIDogSW50ZXJjZXB0b3JzXHJcblx0fTtcclxuXHRcclxuXHRHbG9iYWwuUmVxdWVzdEludGVyY2VwdE1hbmFnZXIgPSBNYW5hZ2VyO1xyXG59KSh3aW5kb3d8fCBnbG9iYWwgfHwge30pOyIsImltcG9ydCBUb2tlbkludGVyY2VwdG9yIGZyb20gXCIuL1Rva2VuSW50ZXJjZXB0b3JcIlxyXG5cclxuXHJcbmNvbnN0IGFwcGVuZEp3dE9uRmV0Y2ggPSBmdW5jdGlvbihhUmVxdWVzdCwgYVRva2VuKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oKXtcclxuXHRcdGFSZXF1ZXN0LmhlYWRlcnMgPSBhUmVxdWVzdC5oZWFkZXIgfHwge307XHJcblx0XHRhUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYVRva2VuO1xyXG5cdH0pO1x0XHJcbn07XHJcblxyXG5jb25zdCBhcHBlbmRKd3RPblhociA9IGZ1bmN0aW9uKGFSZXF1ZXN0LCBhSldUKXtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oKXtcclxuXHRcdGFSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIgLCBcIkJlYXJlciBcIiArIGFUb2tlbik7XHJcblx0fSk7XHJcbn07XHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblx0c2V0dXAuYXBwZW5kSnd0T25GZXRjaCA9IGFwcGVuZEp3dE9uRmV0Y2g7XHJcblx0c2V0dXAuYXBwZW5kSnd0T25YaHIgPSBhcHBlbmRKd3RPblhocjtcclxuXHRyZXR1cm4gVG9rZW5JbnRlcmNlcHRvcihhU2V0dXApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT0F1dGhJbnRlcmNlcHRvcjtcclxuIiwiY29uc3QgVG9rZW5JbnRlcmNlcHRvciA9IGZ1bmN0aW9uKGFTZXR1cCl7XHJcblx0Y29uc3Qgc2V0dXAgPSBhU2V0dXA7IFxyXG5cdGNvbnN0IHRva2VuID0gdW5kZWZpbmVkO1xyXG5cdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRuZXcgUHJvbWlzZShzZXR1cC5mZXRjaFRva2VuKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24oYVRva2VuKXtcclxuXHRcdFx0dG9rZW4gPSBhVG9rZW47XHJcblx0XHR9KTtcdFxyXG5cdH0sIHNldHVwLnJlZnJlc2hJbnRlcnZhbCB8fCAoNjAgKiAxMDAwKSk7XHJcblx0XHJcblx0XHJcblx0cmV0dXJuIHtcclxuXHRcdGRvQWNjZXB0IDogc2V0dXAuZG9BY2NlcHQgfHwgZnVuY3Rpb24oYURhdGEpe1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSl7XHJcblx0XHRcdFx0bGV0IHR5cGUgPSB0eXBlb2Ygc2V0dXAuY29uZGl0aW9uOyBcclxuXHRcdFx0XHRpZih0eXBlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdFx0XHRyZXNvbHZlKHNldHVwLmNvbmRpdGlvbihhRGF0YSkpO1xyXG5cdFx0XHRcdGVsc2UgaWYodHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0XHRcdHJlc29sdmUoc2V0dXAuY29uZGl0aW9uID09IGFEYXRhLm9yaWdpbik7XHJcblx0XHRcdFx0ZWxzZSBpZihzZXR1cC5jb25kaXRpb24gaW5zdGFuY2VvZiBBcnJheSl7XHJcblx0XHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgc2V0dXAuY29uZGl0aW9uLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0XHRpZihzZXR1cC5jb25kaXRpb25baV0gPT0gYURhdGEub3JpZ2luKVxyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUodHJ1ZSk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0cmVzb2x2ZShmYWxzZSk7XHJcblx0XHRcdH0pO1x0XHJcblx0XHR9LFxyXG5cdFx0ZG9IYW5kbGUgOiBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdFx0XHRsZXQgaXNYTUxIdHRwUmVxdWVzdCA9IGFSZXF1ZXN0IGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3Q7XHRcclxuXHRcdFx0bGV0IGFwcGVuZEZ1bmN0aW9uID0gaXNYTUxIdHRwUmVxdWVzdCA/IHNldHVwLmFwcGVuZEp3dE9uWGhyIDogc2V0dXAuYXBwZW5kSnd0T25GZXRjaDtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYodHlwZW9mIHRva2VuICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHRcdHJldHVybiBhcHBlbmRGdW5jdGlvbihhUmVxdWVzdCwgdG9rZW4pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKHNldHVwLmZldGNoVG9rZW4pXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oYVRva2VuKXtcclxuXHRcdFx0XHRcdHRva2VuID0gYVRva2VuO1xyXG5cdFx0XHRcdFx0YXBwZW5kRnVuY3Rpb24oYVJlcXVlc3QsIHRva2VuKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVx0XHRcclxuXHR9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkludGVyY2VwdG9yO1xyXG4iLCJpbXBvcnQgT0F1dGhJbnRlcmNlcHRvciBmcm9tIFwiLi9PQXV0aEludGVyY2VwdG9yXCI7XHJcbmltcG9ydCBUb2tlbkludGVyY2VwdG9yIGZyb20gXCIuL1Rva2VuSW50ZXJjZXB0b3JcIjtcclxuXHJcblxyXG5jb25zdCBEYXRhID0ge1xyXG5cdE9BdXRoSW50ZXJjZXB0b3IgOiBPQXV0aEludGVyY2VwdG9yLFxyXG5cdFRva2VuSW50ZXJjZXB0b3IgOiBUb2tlbkludGVyY2VwdG9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=