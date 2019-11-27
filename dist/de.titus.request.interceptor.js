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
	    if(this.__interceptorRequestData.asyc){
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
	    }
	    console.warn("request interceptor don't support syncronized requests");
	    return ORGSEND.apply(this, args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvT0F1dGhJbnRlcmNlcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3JzL1Rva2VuSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQixZQUFZO0FBQzVDLEc7QUFDQTtBQUNBO0FBQ2UseUVBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDMUNoQztBQUFBO0FBQWtEO0FBQ0E7OztBQUdsRDtBQUNBLG9CQUFvQixpRUFBZ0I7QUFDcEMsb0JBQW9CLGlFQUFnQjtBQUNwQzs7QUFFZSw2REFBSSxFIiwiZmlsZSI6ImRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zcmMvaW5kZXhcIjsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJjb25zdCBVUkxTUExJVFRFUiA9IC9eKCgoW146XFwvXSo6KT9cXC9cXC8pPyhbXjpcXC9dKikoXFw6KFswLTldKikpPykoXFwvLiopPyQvO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1VSTFNQTElUVEVSfTsiLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG4oZnVuY3Rpb24oR2xvYmFsKXtcclxuXHRpZih0eXBlb2YgR2xvYmFsLmZldGNoID09PSBcImZ1bmN0aW9uXCIpe1x0XHJcblx0XHRjb25zdCBPUkdGRVRDSCA9IEdsb2JhbC5mZXRjaDtcclxuXHRcdEdsb2JhbC5mZXRjaCA9IGZ1bmN0aW9uKGFVcmwsIGFSZXF1ZXN0KXtcclxuXHRcdFx0bGV0IHNlbmQgPSAoZnVuY3Rpb24oYXJncyl7XHJcblx0XHRcdFx0cmV0dXJuIE9SR0ZFVENILmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG5cdFx0XHR9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdGxldCByZXF1ZXN0ID0gYVJlcXVlc3QgfHwge307XHJcblx0XHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRtZXRob2QgOiByZXF1ZXN0Lm1ldGhvZCB8fCBcIkdFVFwiLFxyXG5cdFx0XHRcdHVybCA6IGFVcmwsXHJcblx0XHRcdFx0b3JpZ2luOiBtYXRjaFsxXSB8fCBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW4sXHJcblx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fCBkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0XHRxdWVyeTogbWF0Y2hbN10sXHJcblx0XHRcdFx0YXN5bmMgOiB0cnVlXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gTWFuYWdlci5kb0ludGVyY2VwdChkYXRhLCByZXF1ZXN0KVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiBzZW5kKCk7XHJcblx0XHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0XHR9O1xyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pOyIsImNvbnN0IElOVEVSQ0VQVE9SUyA9IFtdO1xyXG5jb25zdCBDQUNIRSA9IHt9O1xyXG5cclxuY29uc3QgZ2V0Q2hhaW4gPSBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdGxldCBjaGFpbiA9IENBQ0hFW2FEYXRhLnNlcnZlcl07XHJcblx0aWYodHlwZW9mIGNoYWluICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShjaGFpbik7XHJcblx0XHJcblx0Y2hhaW4gPSBbXTtcclxuXHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRJTlRFUkNFUFRPUlMuZm9yRWFjaChmdW5jdGlvbihhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0cHJvbWlzZXMucHVzaChcclxuXHRcdFx0YUludGVyY2VwdG9yLmRvQWNjZXB0KGFEYXRhKVxyXG5cdFx0XHQudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcblx0XHRcdFx0aWYodmFsdWUpXHJcblx0XHRcdFx0XHRjaGFpbi5wdXNoKGFJbnRlcmNlcHRvcik7XHJcblx0XHRcdH0pKTtcclxuXHR9KTtcclxuXHRcclxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcblx0LnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdENBQ0hFW2FEYXRhLm9yaWdpbl0gPSBjaGFpbjtcclxuXHRcdHJldHVybiBjaGFpbjtcclxuXHR9KVtcImNhdGNoXCJdKGZ1bmN0aW9uKGVycm9yKXt0aHJvdyBlcnJvcn0pO1xyXG59O1xyXG5cclxuY29uc3QgaXNPcmlnaW5JZ25vcmVkID0gZnVuY3Rpb24oZGF0YSwgb3JpZ2lucyl7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IG9yaWdpbnMubGVuZ3RoOyBpKyspXHJcblx0XHRpZihkYXRhLm9yaWdpbiA9PSBvcmlnaW5zW2ldKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBNYW5hZ2VyID0ge1xyXG5cdGNvbmZpZyA6IHtcclxuXHRcdGlnbm9yZURvY3VtZW50T3JpZ2luIDogdHJ1ZSxcclxuXHRcdGlnbm9yZU9yaWdpbnMgOiBbXVx0XHRcclxuXHR9LFxyXG5cdGludGVyY2VwdG9ycyA6IFtdLFxyXG5cdGRvSW50ZXJjZXB0IDogZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0KXtcclxuXHRcdGlmKE1hbmFnZXIuaWdub3JlRG9jdW1lbnRPcmlnaW4gJiYgYURhdGEub3JpZ2luID09IGRvY3VtZW50LmxvY2F0aW9uLm9yaWdpbilcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0aWYodHlwZW9mIGlnbm9yZU9yaWdpbnMgIT09IFwidW5kZWZpbmVkXCIgJiYgaXNPcmlnaW5JZ25vcmVkKGFEYXRhLCBNYW5hZ2VyLmlnbm9yZU9yaWdpbnMpKVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFEYXRhLCBhUmVxdWVzdCk7XHJcblx0XHRcclxuXHRcdHJldHVybiBnZXRDaGFpbihhRGF0YSwgYVJlcXVlc3QpXHJcblx0XHQudGhlbihmdW5jdGlvbihjaGFpbil7XHJcblx0XHRcdGlmKHR5cGVvZiBjaGFpbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCBjaGFpbi5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgaGFuZGxlcyA9IFtdO1xyXG5cdFx0XHRjaGFpbi5mb3JFYWNoKGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHJcblx0XHRcdFx0aGFuZGxlcy5wdXNoKGFJbnRlcmNlcHRvci5kb0hhbmRsZShhRGF0YSwgYVJlcXVlc3QpKTtcclxuXHRcdFx0fSk7XHRcdFx0XHJcblx0XHRcdHJldHVybiBQcm9taXNlLmFsbChoYW5kbGVzKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oKXtcclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhRGF0YSwgYVJlcXVlc3QpO1xyXG5cdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHR9LFxyXG5cdGFkZEludGVyY2VwdG9yIDogZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcdFx0XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICE9IDEgJiYgdHlwZW9mIGFJbnRlcmNlcHRvciAhPT0gXCJvYmplY3RcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZnVuY3Rpb24gcmVxdWlyZWQgYW4gaW50ZXJjZXB0b3JcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvQWNjZXB0ICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0FjY2VwdFxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0hhbmRsZSAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9IYW5kbGVcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdFxyXG5cdFx0SU5URVJDRVBUT1JTLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHRcdHJldHVybiBNYW5hZ2VyO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlcjsgXHJcblxyXG5cclxuIiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIil7XHRcclxuXHRjb25zdCBPUkdPUEVOID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW47XHJcblx0Y29uc3QgT1JHU0VORCA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1xyXG5cdFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKXtcclxuXHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFyZ3VtZW50c1sxXSk7XHJcblx0XHR0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YSA9IHtcclxuXHRcdFx0bWV0aG9kIDogYXJndW1lbnRzWzBdLFxyXG5cdFx0XHR1cmwgOiBhcmd1bWVudHNbMV0sXHJcblx0XHRcdG9yaWdpbjogbWF0Y2hbMV0gfHwgZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHwgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRxdWVyeTogbWF0Y2hbN10sXHJcblx0XHRcdGFzeW5jIDogdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gXCJib29sZWFuXCIgPyBhcmd1bWVudHNbMl0gOiB0cnVlXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIE9SR09QRU4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcdFxyXG5cdH07XHJcblx0XHJcblx0WE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbigpeyAgICAgICAgXHJcblx0ICAgIGlmKHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhLmFzeWMpe1xyXG5cdCAgICAgICAgbGV0IHNlbmQgPSAoZnVuY3Rpb24oYXJncyl7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIE9SR1NFTkQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0ICAgICAgICB9KS5iaW5kKHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICBcdFx0TWFuYWdlci5kb0ludGVyY2VwdCh0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YSwgdGhpcylcclxuICAgIFx0XHQudGhlbihmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG4gICAgXHRcdFx0dHJ5e1xyXG4gICAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9yZyByZXF1ZXN0XCIpO1xyXG4gICAgXHRcdFx0XHRyZXR1cm4gc2VuZCgpO1xyXG4gICAgXHRcdFx0fWNhdGNoIChlKSB7XHJcbiAgICBcdFx0XHRcdHRocm93IGU7XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fSlbXCJjYXRjaFwiXShjb25zb2xlLmVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cdCAgICB9XHJcblx0ICAgIGNvbnNvbGUud2FybihcInJlcXVlc3QgaW50ZXJjZXB0b3IgZG9uJ3Qgc3VwcG9ydCBzeW5jcm9uaXplZCByZXF1ZXN0c1wiKTtcclxuXHQgICAgcmV0dXJuIE9SR1NFTkQuYXBwbHkodGhpcywgYXJncyk7XHJcblx0fTtcclxufSIsImltcG9ydCBcIi4vWE1MSHR0cFJlcXVlc3RcIjtcclxuaW1wb3J0IFwiLi9GZXRjaFwiO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmNlcHRvcnMgZnJvbSBcIi4vaW50ZXJjZXB0b3JzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHRcclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0ID0gR2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0XHRNYW5hZ2VyIDogTWFuYWdlcixcclxuXHRcdGludGVyY2VwdG9ycyA6IEludGVyY2VwdG9yc1xyXG5cdH07XHJcblx0XHJcblx0R2xvYmFsLlJlcXVlc3RJbnRlcmNlcHRNYW5hZ2VyID0gTWFuYWdlcjtcclxufSkod2luZG93fHwgZ2xvYmFsIHx8IHt9KTsiLCJpbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCJcclxuXHJcblxyXG5jb25zdCBhcHBlbmRPbkZldGNoID0gZnVuY3Rpb24oYVJlcXVlc3QsIGFUb2tlbil7XHJcblx0YVJlcXVlc3QuaGVhZGVycyA9IGFSZXF1ZXN0LmhlYWRlciB8fCB7fTtcclxuXHRhUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYVRva2VuO1xyXG59O1xyXG5cclxuY29uc3QgYXBwZW5kT25YaHIgPSBmdW5jdGlvbihhUmVxdWVzdCwgYVRva2VuKXtcclxuXHRhUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiICwgXCJCZWFyZXIgXCIgKyBhVG9rZW4pO1x0XHJcbn07XHJcblxyXG5jb25zdCBPQXV0aEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHRsZXQgc2V0dXAgPSBhU2V0dXA7XHJcblx0c2V0dXAuZmV0Y2hUb2tlbiA9IGZ1bmN0aW9uKCl7XHJcblx0XHRyZXR1cm4gZmV0Y2goc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRcdG1ldGhvZDogKHNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiKVxyXG5cdFx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdFx0XHRyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHRcdFx0cmV0dXJuIGFSZXNwb25zZVtzZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXTtcclxuXHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yO30pO1x0XHRcclxuXHR9O1xyXG5cdHNldHVwLmFwcGVuZE9uRmV0Y2ggPSBhcHBlbmRPbkZldGNoO1xyXG5cdHNldHVwLmFwcGVuZE9uWGhyID0gYXBwZW5kT25YaHI7XHJcblx0cmV0dXJuIFRva2VuSW50ZXJjZXB0b3IoYVNldHVwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9BdXRoSW50ZXJjZXB0b3I7XHJcbiIsImNvbnN0IFRva2VuSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdGNvbnN0IHNldHVwID0gYVNldHVwOyBcclxuXHRsZXQgdG9rZW4gPSB1bmRlZmluZWQ7XHJcblx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdG5ldyBQcm9taXNlKHNldHVwLmZldGNoVG9rZW4pXHJcblx0XHQudGhlbihmdW5jdGlvbihhVG9rZW4pe1xyXG5cdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdH0pO1x0XHJcblx0fSwgc2V0dXAucmVmcmVzaEludGVydmFsIHx8ICg2MCAqIDEwMDApKTtcclxuXHRcclxuXHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0ZG9BY2NlcHQgOiBzZXR1cC5kb0FjY2VwdCB8fCBmdW5jdGlvbihhRGF0YSl7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKXtcclxuXHRcdFx0XHRsZXQgdHlwZSA9IHR5cGVvZiBzZXR1cC5jb25kaXRpb247IFxyXG5cdFx0XHRcdGlmKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0XHRcdHJlc29sdmUoc2V0dXAuY29uZGl0aW9uKGFEYXRhKSk7XHJcblx0XHRcdFx0ZWxzZSBpZih0eXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0cmVzb2x2ZShzZXR1cC5jb25kaXRpb24gPT0gYURhdGEub3JpZ2luKTtcclxuXHRcdFx0XHRlbHNlIGlmKHNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdFx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBzZXR1cC5jb25kaXRpb24ubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHRcdGlmKHNldHVwLmNvbmRpdGlvbltpXSA9PSBhRGF0YS5vcmlnaW4pXHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcclxuXHRcdFx0fSk7XHRcclxuXHRcdH0sXHJcblx0XHRkb0hhbmRsZSA6IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCl7XHJcblx0XHRcdGxldCBpc1hNTEh0dHBSZXF1ZXN0ID0gYVJlcXVlc3QgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdDtcdFxyXG5cdFx0XHRsZXQgYXBwZW5kT24gPSBpc1hNTEh0dHBSZXF1ZXN0ID8gc2V0dXAuYXBwZW5kT25YaHIgOiBzZXR1cC5hcHBlbmRPbkZldGNoO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRpZih0eXBlb2YgdG9rZW4gIT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhcHBlbmRPbihhUmVxdWVzdCwgdG9rZW4pKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0dXAuZmV0Y2hUb2tlbigpKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0XHRcdFx0XHR0b2tlbiA9IGFUb2tlbjtcclxuXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwZW5kT24oYVJlcXVlc3QsIHRva2VuKSk7XHJcblx0XHRcdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdH1cdFx0XHJcblx0fTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5JbnRlcmNlcHRvcjtcclxuIiwiaW1wb3J0IE9BdXRoSW50ZXJjZXB0b3IgZnJvbSBcIi4vT0F1dGhJbnRlcmNlcHRvclwiO1xyXG5pbXBvcnQgVG9rZW5JbnRlcmNlcHRvciBmcm9tIFwiLi9Ub2tlbkludGVyY2VwdG9yXCI7XHJcblxyXG5cclxuY29uc3QgRGF0YSA9IHtcclxuXHRPQXV0aEludGVyY2VwdG9yIDogT0F1dGhJbnRlcmNlcHRvcixcclxuXHRUb2tlbkludGVyY2VwdG9yIDogVG9rZW5JbnRlcmNlcHRvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9