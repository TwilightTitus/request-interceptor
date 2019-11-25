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
				method : request.method || "GET",
				url : aUrl,
				server: match[1],
				protocol : (function(match){
					if(typeof match[2] === "undefined" || match[3] == "//")
						return document.location.protocol || "http:";
					else return match[3];			
				}).call(null, match),
				hostname: match[4] ||document.location.hostname,
				port: match[6],
				query: match[7],
				async : true
			};
			
			return _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data, request)
			.then(function(){
				return ORGFETCH.bind(this, aUrl, request);
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
const CACHE = {};
const chaining = function(aChain, aData, aRequest){
	if(aChain.length == 0)
		return;
	
	let interceptor = aChain.shift();
	interceptor.doHandle(aData, aRequest, chaining.bind(null, aChain, aData, aRequest, aCallback));
};

const getChain = function(aData, aRequest){
	return new Promise(function(){
		let chain = CACHE[aData.server];
		if(typeof chain === "undefined"){
			chain = [];
			this.interceptors.forEach(function(aInterceptor){
				if(aInterceptor.doAccept(aData))
					chain.push(aInterceptor);
			});
			
			CACHE[aData.server] = chain;			
		}
		return chainM
	})	
};

const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest){		
		let chain = getChain(aData, aRequest);
		let promises = [];
		chain.forEach(function(aInterceptor){
			promises.push(aInterceptor.doHandle(aData, aRequest));
		});
		
		return Promise.all(promises);		
	},
	addInterceptor : function(aInterceptor){		
		if(arguments.length != 1 && typeof aInterceptor !== "object")
			throw new Error("function required an interceptor");
		if(typeof aInterceptor.doAccept !== "function")
			throw new Error("The interceptor required a \"doAccept\" function!");
		if(typeof aInterceptor.doHandle !== "function")
			throw new Error("The interceptor required a \"doHandle\" function!");
		
		return this.interceptors.push(aInterceptor);
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
			server: match[1],
			protocol : (function(match){
				if(typeof match[2] === "undefined" || match[3] == "//")
					return document.location.protocol || "http:";
				else return match[3];			
			}).call(null, match),
			hostname: match[4] ||document.location.hostname,
			port: match[6],
			query: match[7],
			async : typeof arguments[2] === "boolean" ? arguments[2] : true
		};
		ORGOPEN.apply(this, arguments);	
	};
	
	 XMLHttpRequest.prototype.send = function(){		 
		_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__interceptorRequestData, this)
		.then(function(){
			return  ORGSEND.bind(this, arguments);
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

/***/ "./src/interceptors/JWTInterceptor.js":
/*!********************************************!*\
  !*** ./src/interceptors/JWTInterceptor.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _JsonWebToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonWebToken */ "./src/interceptors/JsonWebToken.js");


const JWTInterceptor = function(aSetup){
	this.setup = aSetup;
	this.setup.refresh = this.setup.refresh || {interval : "always"}; 
	this.jwt;
	this.useFetch = typeof window.fetch === "function";
};

JWTInterceptor.DEFAULT = {
	// min refesh intervall time is 10 minutes
	MIN_REFRESH_INTERVALL_TIME : 10 * 60 * 1000
};

JWTInterceptor.prototype.doAccept = function(aData){
	let type = typeof this.setup.condition; 
	if(type === "function")
		return  this.setup.condition(aData);
	else if(type === "string")
		return this.setup.condition == aData.server;
	else if(this.setup.condition instanceof Array){
		for(let i = 0; i < this.setup.condition.length; i++)
			if(this.setup.condition[i] == aData.server)
				return true;
	}	
	return false;			
};

JWTInterceptor.prototype.doHandle = function(aData, aRequest, aCallback){	
	let isXMLHttpRequest = aRequest instanceof XMLHttpRequest;
	let appendJWT = JWTInterceptor.prototype[(isXMLHttpRequest ? "appendJwtXHR" : "appendJwt" )].bind(this, aRequest, aCallback);
	
	if(this.jwt && this.setup.refresh.interval !== "always")
		return appendJWT(this.jwt);
	else
		this.__loadToken(aCallback);
};
JWTInterceptor.prototype.__loadToken = function(aCallback){
	if(this.useFetch)
		return this.__loadTokenFetch(aCallback);	
	return this.__loadTokenByXHR(aCallback);
};

JWTInterceptor.prototype.__loadTokenFetch = function(aCallback){	
	return fetch(this.setup.login.url, {
		method: this.setup.login.method || "get"
	}).then(function(aResponse){return aResponse.json();})
	.then(JWTInterceptor.prototype.__extractToken.bind(this))
	.then(aCallback ? aCallback : function(){});
};

JWTInterceptor.prototype.__loadTokenByXHR = function(aCallback){
	let xhttp = new XMLHttpRequest();
	let extractToken = JWTInterceptor.prototype.__extractToken.bind(this);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4){
			extractToken(JSON.parse(this.response));
			if(aCallback)
				aCallback(this.jwt);
		}
	};
	xhttp.open(this.setup.login.method || "get", this.setup.login.url, !this.setup.login.sync);
	return xhttp.send();
};

JWTInterceptor.prototype.__extractToken = function(aResponse){
	this.jwt = new _JsonWebToken__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](aResponse[this.setup.login.response.valueSelector]);
	
	if(this.setup.refreshInterval !== "always"){
		let intervall = this.setup.refresh.interval || JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME;
		if(typeof this.jwt.header.iat === "number" && typeof this.jwt.header.exp === "number"){
			let diff = this.jwt.header.exp - this.jwt.header.iat;			
			intervall = diff > 0 ? diff : this.jwt.header.exp;
		}
		else if(typeof this.jwt.header.exp === "number"){
			let diff = this.jwt.header.exp - Date.now();
			intervall = diff > 0 ? diff : this.jwt.header.exp;
		}		
		
		intervall = intervall > JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME ? intervall : JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME;
		
		setTimeout(JWTInterceptor.prototype.__loadToken.bind(this), intervall);		
	}
	
	return this.jwt;
};

JWTInterceptor.prototype.appendJwt = function(aRequest, aCallback, aJWT){
	aRequest.headers = aRequest.header || {};
	aRequest.headers["Authorization"] = "Bearer " + aJWT.rawToken;	
	return typeof aCallback === "function" ? aCallback() : undefined;
}

JWTInterceptor.prototype.appendJwtXHR = function(aRequest, aCallback, aJWT){
	aRequest.setRequestHeader("Authorization" , "Bearer " + aJWT.rawToken);
	return typeof aCallback === "function" ? aCallback() : undefined;
};
/* harmony default export */ __webpack_exports__["a"] = (JWTInterceptor);


/***/ }),

/***/ "./src/interceptors/JsonWebToken.js":
/*!******************************************!*\
  !*** ./src/interceptors/JsonWebToken.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const JsonWebToken = function(aToken){
	this.rawToken = aToken;
	
	let fragments = aToken.split(".");
	if(fragments.length != 3)
		throw new Error("No valid json web token! - \""+aToken + "\"");
	
	this.header = JSON.parse(atob(fragments[0]));
	this.body = JSON.parse(atob(fragments[1]));
	this.signature = fragments[2];
	
};

/* harmony default export */ __webpack_exports__["a"] = (JsonWebToken); 

/***/ }),

/***/ "./src/interceptors/index.js":
/*!***********************************!*\
  !*** ./src/interceptors/index.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _JsonWebToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JsonWebToken */ "./src/interceptors/JsonWebToken.js");
/* harmony import */ var _JWTInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JWTInterceptor */ "./src/interceptors/JWTInterceptor.js");




const Data = {
	JsonWebToken : _JsonWebToken__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
	JWTInterceptor : _JWTInterceptor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
};

/* harmony default export */ __webpack_exports__["a"] = (Data);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvSldUSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9Kc29uV2ViVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtB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QUFHOUM7QUFDQSxnQkFBZ0IsNkRBQVk7QUFDNUIsa0JBQWtCLCtEQUFjO0FBQ2hDOztBQUVlLDZEQUFJLEUiLCJmaWxlIjoiZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IFVSTFNQTElUVEVSID0gL14oKChbXjpcXC9dKjopP1xcL1xcLyk/KFteOlxcL10qKShcXDooWzAtOV0qKSk/KShcXC8uKik/JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7VVJMU1BMSVRURVJ9OyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1xyXG5cdGlmKHR5cGVvZiBHbG9iYWwuZmV0Y2ggPT09IFwiZnVuY3Rpb25cIil7XHRcclxuXHRcdGNvbnN0IE9SR0ZFVENIID0gR2xvYmFsLmZldGNoO1xyXG5cdFx0R2xvYmFsLmZldGNoID0gZnVuY3Rpb24oYVVybCwgYVJlcXVlc3Qpe1xyXG5cdFx0XHRsZXQgcmVxdWVzdCA9IGFSZXF1ZXN0IHx8IHt9O1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhVXJsKTtcclxuXHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0bWV0aG9kIDogcmVxdWVzdC5tZXRob2QgfHwgXCJHRVRcIixcclxuXHRcdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRcdHNlcnZlcjogbWF0Y2hbMV0sXHJcblx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRhc3luYyA6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBNYW5hZ2VyLmRvSW50ZXJjZXB0KGRhdGEsIHJlcXVlc3QpXHJcblx0XHRcdC50aGVuKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0cmV0dXJuIE9SR0ZFVENILmJpbmQodGhpcywgYVVybCwgcmVxdWVzdCk7XHJcblx0XHRcdH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24oZXJyb3Ipe3Rocm93IGVycm9yfSk7XHJcblx0XHR9O1xyXG5cdH07XHJcbn0pKHdpbmRvdyB8fCBnbG9iYWwgfHwge30pOyIsImNvbnN0IENBQ0hFID0ge307XHJcbmNvbnN0IGNoYWluaW5nID0gZnVuY3Rpb24oYUNoYWluLCBhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdGlmKGFDaGFpbi5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybjtcclxuXHRcclxuXHRsZXQgaW50ZXJjZXB0b3IgPSBhQ2hhaW4uc2hpZnQoKTtcclxuXHRpbnRlcmNlcHRvci5kb0hhbmRsZShhRGF0YSwgYVJlcXVlc3QsIGNoYWluaW5nLmJpbmQobnVsbCwgYUNoYWluLCBhRGF0YSwgYVJlcXVlc3QsIGFDYWxsYmFjaykpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhaW4gPSBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbigpe1xyXG5cdFx0bGV0IGNoYWluID0gQ0FDSEVbYURhdGEuc2VydmVyXTtcclxuXHRcdGlmKHR5cGVvZiBjaGFpbiA9PT0gXCJ1bmRlZmluZWRcIil7XHJcblx0XHRcdGNoYWluID0gW107XHJcblx0XHRcdHRoaXMuaW50ZXJjZXB0b3JzLmZvckVhY2goZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcclxuXHRcdFx0XHRpZihhSW50ZXJjZXB0b3IuZG9BY2NlcHQoYURhdGEpKVxyXG5cdFx0XHRcdFx0Y2hhaW4ucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdENBQ0hFW2FEYXRhLnNlcnZlcl0gPSBjaGFpbjtcdFx0XHRcclxuXHRcdH1cclxuXHRcdHJldHVybiBjaGFpbk1cclxuXHR9KVx0XHJcbn07XHJcblxyXG5jb25zdCBNYW5hZ2VyID0ge1x0XHJcblx0aW50ZXJjZXB0b3JzIDogW10sXHJcblx0ZG9JbnRlcmNlcHQgOiBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3Qpe1x0XHRcclxuXHRcdGxldCBjaGFpbiA9IGdldENoYWluKGFEYXRhLCBhUmVxdWVzdCk7XHJcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcclxuXHRcdGNoYWluLmZvckVhY2goZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcclxuXHRcdFx0cHJvbWlzZXMucHVzaChhSW50ZXJjZXB0b3IuZG9IYW5kbGUoYURhdGEsIGFSZXF1ZXN0KSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcdFx0XHJcblx0fSxcclxuXHRhZGRJbnRlcmNlcHRvciA6IGZ1bmN0aW9uKGFJbnRlcmNlcHRvcil7XHRcdFxyXG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCAhPSAxICYmIHR5cGVvZiBhSW50ZXJjZXB0b3IgIT09IFwib2JqZWN0XCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImZ1bmN0aW9uIHJlcXVpcmVkIGFuIGludGVyY2VwdG9yXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0FjY2VwdCAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9BY2NlcHRcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdGlmKHR5cGVvZiBhSW50ZXJjZXB0b3IuZG9IYW5kbGUgIT09IFwiZnVuY3Rpb25cIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVGhlIGludGVyY2VwdG9yIHJlcXVpcmVkIGEgXFxcImRvSGFuZGxlXFxcIiBmdW5jdGlvbiFcIik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzLmludGVyY2VwdG9ycy5wdXNoKGFJbnRlcmNlcHRvcik7XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyBcclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuXHJcbmlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIil7XHRcclxuXHRjb25zdCBPUkdPUEVOID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW47XHJcblx0Y29uc3QgT1JHU0VORCA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1xyXG5cdFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKXtcdFx0XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhcmd1bWVudHNbMV0pO1xyXG5cdFx0dGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEgPSB7XHJcblx0XHRcdG1ldGhvZCA6IGFyZ3VtZW50c1swXSxcclxuXHRcdFx0dXJsIDogYXJndW1lbnRzWzFdLFxyXG5cdFx0XHRzZXJ2ZXI6IG1hdGNoWzFdLFxyXG5cdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHxkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0YXN5bmMgOiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSBcImJvb2xlYW5cIiA/IGFyZ3VtZW50c1syXSA6IHRydWVcclxuXHRcdH07XHJcblx0XHRPUkdPUEVOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHRcclxuXHR9O1xyXG5cdFxyXG5cdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCl7XHRcdCBcclxuXHRcdE1hbmFnZXIuZG9JbnRlcmNlcHQodGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEsIHRoaXMpXHJcblx0XHQudGhlbihmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gIE9SR1NFTkQuYmluZCh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fSlbXCJjYXRjaFwiXShmdW5jdGlvbihlcnJvcil7dGhyb3cgZXJyb3J9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fTtcclxufSIsImltcG9ydCBcIi4vWE1MSHR0cFJlcXVlc3RcIjtcclxuaW1wb3J0IFwiLi9GZXRjaFwiO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmNlcHRvcnMgZnJvbSBcIi4vaW50ZXJjZXB0b3JzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHRcclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0ID0gR2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRWRVJTSU9OIDogXCIke3ZlcnNpb259XCIsXHJcblx0XHRNYW5hZ2VyIDogTWFuYWdlcixcclxuXHRcdGludGVyY2VwdG9ycyA6IEludGVyY2VwdG9yc1xyXG5cdH07XHJcblx0XHJcblx0R2xvYmFsLlJlcXVlc3RJbnRlcmNlcHRNYW5hZ2VyID0gTWFuYWdlcjtcclxufSkod2luZG93fHwgZ2xvYmFsIHx8IHt9KTsiLCJpbXBvcnQgSnNvbldlYlRva2VuIGZyb20gXCIuL0pzb25XZWJUb2tlblwiO1xyXG5cclxuY29uc3QgSldUSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdHRoaXMuc2V0dXAgPSBhU2V0dXA7XHJcblx0dGhpcy5zZXR1cC5yZWZyZXNoID0gdGhpcy5zZXR1cC5yZWZyZXNoIHx8IHtpbnRlcnZhbCA6IFwiYWx3YXlzXCJ9OyBcclxuXHR0aGlzLmp3dDtcclxuXHR0aGlzLnVzZUZldGNoID0gdHlwZW9mIHdpbmRvdy5mZXRjaCA9PT0gXCJmdW5jdGlvblwiO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IuREVGQVVMVCA9IHtcclxuXHQvLyBtaW4gcmVmZXNoIGludGVydmFsbCB0aW1lIGlzIDEwIG1pbnV0ZXNcclxuXHRNSU5fUkVGUkVTSF9JTlRFUlZBTExfVElNRSA6IDEwICogNjAgKiAxMDAwXHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuZG9BY2NlcHQgPSBmdW5jdGlvbihhRGF0YSl7XHJcblx0bGV0IHR5cGUgPSB0eXBlb2YgdGhpcy5zZXR1cC5jb25kaXRpb247IFxyXG5cdGlmKHR5cGUgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiAgdGhpcy5zZXR1cC5jb25kaXRpb24oYURhdGEpO1xyXG5cdGVsc2UgaWYodHlwZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiB0aGlzLnNldHVwLmNvbmRpdGlvbiA9PSBhRGF0YS5zZXJ2ZXI7XHJcblx0ZWxzZSBpZih0aGlzLnNldHVwLmNvbmRpdGlvbiBpbnN0YW5jZW9mIEFycmF5KXtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNldHVwLmNvbmRpdGlvbi5sZW5ndGg7IGkrKylcclxuXHRcdFx0aWYodGhpcy5zZXR1cC5jb25kaXRpb25baV0gPT0gYURhdGEuc2VydmVyKVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdH1cdFxyXG5cdHJldHVybiBmYWxzZTtcdFx0XHRcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5kb0hhbmRsZSA9IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCwgYUNhbGxiYWNrKXtcdFxyXG5cdGxldCBpc1hNTEh0dHBSZXF1ZXN0ID0gYVJlcXVlc3QgaW5zdGFuY2VvZiBYTUxIdHRwUmVxdWVzdDtcclxuXHRsZXQgYXBwZW5kSldUID0gSldUSW50ZXJjZXB0b3IucHJvdG90eXBlWyhpc1hNTEh0dHBSZXF1ZXN0ID8gXCJhcHBlbmRKd3RYSFJcIiA6IFwiYXBwZW5kSnd0XCIgKV0uYmluZCh0aGlzLCBhUmVxdWVzdCwgYUNhbGxiYWNrKTtcclxuXHRcclxuXHRpZih0aGlzLmp3dCAmJiB0aGlzLnNldHVwLnJlZnJlc2guaW50ZXJ2YWwgIT09IFwiYWx3YXlzXCIpXHJcblx0XHRyZXR1cm4gYXBwZW5kSldUKHRoaXMuand0KTtcclxuXHRlbHNlXHJcblx0XHR0aGlzLl9fbG9hZFRva2VuKGFDYWxsYmFjayk7XHJcbn07XHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbiA9IGZ1bmN0aW9uKGFDYWxsYmFjayl7XHJcblx0aWYodGhpcy51c2VGZXRjaClcclxuXHRcdHJldHVybiB0aGlzLl9fbG9hZFRva2VuRmV0Y2goYUNhbGxiYWNrKTtcdFxyXG5cdHJldHVybiB0aGlzLl9fbG9hZFRva2VuQnlYSFIoYUNhbGxiYWNrKTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbkZldGNoID0gZnVuY3Rpb24oYUNhbGxiYWNrKXtcdFxyXG5cdHJldHVybiBmZXRjaCh0aGlzLnNldHVwLmxvZ2luLnVybCwge1xyXG5cdFx0bWV0aG9kOiB0aGlzLnNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiXHJcblx0fSkudGhlbihmdW5jdGlvbihhUmVzcG9uc2Upe3JldHVybiBhUmVzcG9uc2UuanNvbigpO30pXHJcblx0LnRoZW4oSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fZXh0cmFjdFRva2VuLmJpbmQodGhpcykpXHJcblx0LnRoZW4oYUNhbGxiYWNrID8gYUNhbGxiYWNrIDogZnVuY3Rpb24oKXt9KTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbkJ5WEhSID0gZnVuY3Rpb24oYUNhbGxiYWNrKXtcclxuXHRsZXQgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRsZXQgZXh0cmFjdFRva2VuID0gSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fZXh0cmFjdFRva2VuLmJpbmQodGhpcyk7XHJcblx0eGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoeGh0dHAucmVhZHlTdGF0ZSA9PSA0KXtcclxuXHRcdFx0ZXh0cmFjdFRva2VuKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSkpO1xyXG5cdFx0XHRpZihhQ2FsbGJhY2spXHJcblx0XHRcdFx0YUNhbGxiYWNrKHRoaXMuand0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHhodHRwLm9wZW4odGhpcy5zZXR1cC5sb2dpbi5tZXRob2QgfHwgXCJnZXRcIiwgdGhpcy5zZXR1cC5sb2dpbi51cmwsICF0aGlzLnNldHVwLmxvZ2luLnN5bmMpO1xyXG5cdHJldHVybiB4aHR0cC5zZW5kKCk7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19leHRyYWN0VG9rZW4gPSBmdW5jdGlvbihhUmVzcG9uc2Upe1xyXG5cdHRoaXMuand0ID0gbmV3IEpzb25XZWJUb2tlbihhUmVzcG9uc2VbdGhpcy5zZXR1cC5sb2dpbi5yZXNwb25zZS52YWx1ZVNlbGVjdG9yXSk7XHJcblx0XHJcblx0aWYodGhpcy5zZXR1cC5yZWZyZXNoSW50ZXJ2YWwgIT09IFwiYWx3YXlzXCIpe1xyXG5cdFx0bGV0IGludGVydmFsbCA9IHRoaXMuc2V0dXAucmVmcmVzaC5pbnRlcnZhbCB8fCBKV1RJbnRlcmNlcHRvci5ERUZBVUxULk1JTl9SRUZSRVNIX0lOVEVSVkFMTF9USU1FO1xyXG5cdFx0aWYodHlwZW9mIHRoaXMuand0LmhlYWRlci5pYXQgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHRoaXMuand0LmhlYWRlci5leHAgPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRsZXQgZGlmZiA9IHRoaXMuand0LmhlYWRlci5leHAgLSB0aGlzLmp3dC5oZWFkZXIuaWF0O1x0XHRcdFxyXG5cdFx0XHRpbnRlcnZhbGwgPSBkaWZmID4gMCA/IGRpZmYgOiB0aGlzLmp3dC5oZWFkZXIuZXhwO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZih0eXBlb2YgdGhpcy5qd3QuaGVhZGVyLmV4cCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdGxldCBkaWZmID0gdGhpcy5qd3QuaGVhZGVyLmV4cCAtIERhdGUubm93KCk7XHJcblx0XHRcdGludGVydmFsbCA9IGRpZmYgPiAwID8gZGlmZiA6IHRoaXMuand0LmhlYWRlci5leHA7XHJcblx0XHR9XHRcdFxyXG5cdFx0XHJcblx0XHRpbnRlcnZhbGwgPSBpbnRlcnZhbGwgPiBKV1RJbnRlcmNlcHRvci5ERUZBVUxULk1JTl9SRUZSRVNIX0lOVEVSVkFMTF9USU1FID8gaW50ZXJ2YWxsIDogSldUSW50ZXJjZXB0b3IuREVGQVVMVC5NSU5fUkVGUkVTSF9JTlRFUlZBTExfVElNRTtcclxuXHRcdFxyXG5cdFx0c2V0VGltZW91dChKV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19sb2FkVG9rZW4uYmluZCh0aGlzKSwgaW50ZXJ2YWxsKTtcdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0aGlzLmp3dDtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5hcHBlbmRKd3QgPSBmdW5jdGlvbihhUmVxdWVzdCwgYUNhbGxiYWNrLCBhSldUKXtcclxuXHRhUmVxdWVzdC5oZWFkZXJzID0gYVJlcXVlc3QuaGVhZGVyIHx8IHt9O1xyXG5cdGFSZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJCZWFyZXIgXCIgKyBhSldULnJhd1Rva2VuO1x0XHJcblx0cmV0dXJuIHR5cGVvZiBhQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGFDYWxsYmFjaygpIDogdW5kZWZpbmVkO1xyXG59XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuYXBwZW5kSnd0WEhSID0gZnVuY3Rpb24oYVJlcXVlc3QsIGFDYWxsYmFjaywgYUpXVCl7XHJcblx0YVJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiAsIFwiQmVhcmVyIFwiICsgYUpXVC5yYXdUb2tlbik7XHJcblx0cmV0dXJuIHR5cGVvZiBhQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGFDYWxsYmFjaygpIDogdW5kZWZpbmVkO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBKV1RJbnRlcmNlcHRvcjtcclxuIiwiY29uc3QgSnNvbldlYlRva2VuID0gZnVuY3Rpb24oYVRva2VuKXtcclxuXHR0aGlzLnJhd1Rva2VuID0gYVRva2VuO1xyXG5cdFxyXG5cdGxldCBmcmFnbWVudHMgPSBhVG9rZW4uc3BsaXQoXCIuXCIpO1xyXG5cdGlmKGZyYWdtZW50cy5sZW5ndGggIT0gMylcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHZhbGlkIGpzb24gd2ViIHRva2VuISAtIFxcXCJcIithVG9rZW4gKyBcIlxcXCJcIik7XHJcblx0XHJcblx0dGhpcy5oZWFkZXIgPSBKU09OLnBhcnNlKGF0b2IoZnJhZ21lbnRzWzBdKSk7XHJcblx0dGhpcy5ib2R5ID0gSlNPTi5wYXJzZShhdG9iKGZyYWdtZW50c1sxXSkpO1xyXG5cdHRoaXMuc2lnbmF0dXJlID0gZnJhZ21lbnRzWzJdO1xyXG5cdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSnNvbldlYlRva2VuOyAiLCJpbXBvcnQgSnNvbldlYlRva2VuIGZyb20gXCIuL0pzb25XZWJUb2tlblwiO1xyXG5pbXBvcnQgSldUSW50ZXJjZXB0b3IgZnJvbSBcIi4vSldUSW50ZXJjZXB0b3JcIjtcclxuXHJcblxyXG5jb25zdCBEYXRhID0ge1xyXG5cdEpzb25XZWJUb2tlbiA6IEpzb25XZWJUb2tlbixcclxuXHRKV1RJbnRlcmNlcHRvciA6IEpXVEludGVyY2VwdG9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhOyJdLCJzb3VyY2VSb290IjoiIn0=