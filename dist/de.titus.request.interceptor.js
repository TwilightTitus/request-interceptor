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
			
			return new Promise(_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept.bind(_Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], data, request, ORGFETCH.bind(this, aUrl, request)));
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
const chaining = function(aChain, aData, aRequest, aCallback){
	if(aChain.length == 0)
		return aCallback();
	
	let interceptor = aChain.shift();
	interceptor.doHandle(aData, aRequest, chaining.bind(null, aChain, aData, aRequest, aCallback));
};

const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest, aCallback){		
		let chain = CACHE[aData.server];
		if(typeof chain === "undefined"){
			chain = [];
			CACHE[aData.server] = chain;
		}
		
		this.interceptors.forEach((function(aData, aInterceptor){
			if(aInterceptor.doAccept(aData))
				this.push(aInterceptor);
		}).bind(chain, aData));
		
		chaining(chain, aData, aRequest, aCallback);
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
		return _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(this.__interceptorRequestData, this, ORGSEND.bind(this, arguments));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvSldUSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9Kc29uV2ViVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtB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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3NyYy9pbmRleFwiOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImNvbnN0IFVSTFNQTElUVEVSID0gL14oKChbXjpcXC9dKjopP1xcL1xcLyk/KFteOlxcL10qKShcXDooWzAtOV0qKSk/KShcXC8uKik/JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7VVJMU1BMSVRURVJ9OyIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1xyXG5cdGlmKHR5cGVvZiBHbG9iYWwuZmV0Y2ggPT09IFwiZnVuY3Rpb25cIil7XHRcclxuXHRcdGNvbnN0IE9SR0ZFVENIID0gR2xvYmFsLmZldGNoO1xyXG5cdFx0R2xvYmFsLmZldGNoID0gZnVuY3Rpb24oYVVybCwgYVJlcXVlc3Qpe1xyXG5cdFx0XHRsZXQgcmVxdWVzdCA9IGFSZXF1ZXN0IHx8IHt9O1xyXG5cdFx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhVXJsKTtcclxuXHRcdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdFx0bWV0aG9kIDogcmVxdWVzdC5tZXRob2QgfHwgXCJHRVRcIixcclxuXHRcdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRcdHNlcnZlcjogbWF0Y2hbMV0sXHJcblx0XHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0XHRhc3luYyA6IHRydWVcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShNYW5hZ2VyLmRvSW50ZXJjZXB0LmJpbmQoTWFuYWdlciwgZGF0YSwgcmVxdWVzdCwgT1JHRkVUQ0guYmluZCh0aGlzLCBhVXJsLCByZXF1ZXN0KSkpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59KSh3aW5kb3cgfHwgZ2xvYmFsIHx8IHt9KTsiLCJjb25zdCBDQUNIRSA9IHt9O1xyXG5jb25zdCBjaGFpbmluZyA9IGZ1bmN0aW9uKGFDaGFpbiwgYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spe1xyXG5cdGlmKGFDaGFpbi5sZW5ndGggPT0gMClcclxuXHRcdHJldHVybiBhQ2FsbGJhY2soKTtcclxuXHRcclxuXHRsZXQgaW50ZXJjZXB0b3IgPSBhQ2hhaW4uc2hpZnQoKTtcclxuXHRpbnRlcmNlcHRvci5kb0hhbmRsZShhRGF0YSwgYVJlcXVlc3QsIGNoYWluaW5nLmJpbmQobnVsbCwgYUNoYWluLCBhRGF0YSwgYVJlcXVlc3QsIGFDYWxsYmFjaykpO1xyXG59O1xyXG5cclxuY29uc3QgTWFuYWdlciA9IHtcdFxyXG5cdGludGVyY2VwdG9ycyA6IFtdLFxyXG5cdGRvSW50ZXJjZXB0IDogZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spe1x0XHRcclxuXHRcdGxldCBjaGFpbiA9IENBQ0hFW2FEYXRhLnNlcnZlcl07XHJcblx0XHRpZih0eXBlb2YgY2hhaW4gPT09IFwidW5kZWZpbmVkXCIpe1xyXG5cdFx0XHRjaGFpbiA9IFtdO1xyXG5cdFx0XHRDQUNIRVthRGF0YS5zZXJ2ZXJdID0gY2hhaW47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuaW50ZXJjZXB0b3JzLmZvckVhY2goKGZ1bmN0aW9uKGFEYXRhLCBhSW50ZXJjZXB0b3Ipe1xyXG5cdFx0XHRpZihhSW50ZXJjZXB0b3IuZG9BY2NlcHQoYURhdGEpKVxyXG5cdFx0XHRcdHRoaXMucHVzaChhSW50ZXJjZXB0b3IpO1xyXG5cdFx0fSkuYmluZChjaGFpbiwgYURhdGEpKTtcclxuXHRcdFxyXG5cdFx0Y2hhaW5pbmcoY2hhaW4sIGFEYXRhLCBhUmVxdWVzdCwgYUNhbGxiYWNrKTtcclxuXHR9LFxyXG5cdGFkZEludGVyY2VwdG9yIDogZnVuY3Rpb24oYUludGVyY2VwdG9yKXtcdFx0XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoICE9IDEgJiYgdHlwZW9mIGFJbnRlcmNlcHRvciAhPT0gXCJvYmplY3RcIilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZnVuY3Rpb24gcmVxdWlyZWQgYW4gaW50ZXJjZXB0b3JcIik7XHJcblx0XHRpZih0eXBlb2YgYUludGVyY2VwdG9yLmRvQWNjZXB0ICE9PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlRoZSBpbnRlcmNlcHRvciByZXF1aXJlZCBhIFxcXCJkb0FjY2VwdFxcXCIgZnVuY3Rpb24hXCIpO1xyXG5cdFx0aWYodHlwZW9mIGFJbnRlcmNlcHRvci5kb0hhbmRsZSAhPT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUaGUgaW50ZXJjZXB0b3IgcmVxdWlyZWQgYSBcXFwiZG9IYW5kbGVcXFwiIGZ1bmN0aW9uIVwiKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuaW50ZXJjZXB0b3JzLnB1c2goYUludGVyY2VwdG9yKTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IFxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG5cclxuaWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSBcInVuZGVmaW5lZFwiKXtcdFxyXG5cdGNvbnN0IE9SR09QRU4gPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcclxuXHRjb25zdCBPUkdTRU5EID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ7XHJcblx0WE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpe1x0XHRcclxuXHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFyZ3VtZW50c1sxXSk7XHJcblx0XHR0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YSA9IHtcclxuXHRcdFx0bWV0aG9kIDogYXJndW1lbnRzWzBdLFxyXG5cdFx0XHR1cmwgOiBhcmd1bWVudHNbMV0sXHJcblx0XHRcdHNlcnZlcjogbWF0Y2hbMV0sXHJcblx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRhc3luYyA6IHR5cGVvZiBhcmd1bWVudHNbMl0gPT09IFwiYm9vbGVhblwiID8gYXJndW1lbnRzWzJdIDogdHJ1ZVxyXG5cdFx0fTtcclxuXHRcdE9SR09QRU4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcdFxyXG5cdH07XHJcblx0XHJcblx0IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oKXtcdFx0IFxyXG5cdFx0cmV0dXJuIE1hbmFnZXIuZG9JbnRlcmNlcHQodGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEsIHRoaXMsIE9SR1NFTkQuYmluZCh0aGlzLCBhcmd1bWVudHMpKTtcclxuXHR9O1xyXG59IiwiaW1wb3J0IFwiLi9YTUxIdHRwUmVxdWVzdFwiO1xyXG5pbXBvcnQgXCIuL0ZldGNoXCI7XHJcbmltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IEludGVyY2VwdG9ycyBmcm9tIFwiLi9pbnRlcmNlcHRvcnNcIjtcclxuXHJcblxyXG4oZnVuY3Rpb24oR2xvYmFsKXtcdFxyXG5cdEdsb2JhbC5kZSA9IEdsb2JhbC5kZSB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMgPSBHbG9iYWwuZGUudGl0dXMgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgPSBHbG9iYWwuZGUudGl0dXMucmVxdWVzdCB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvciA9IHtcclxuXHRcdFZFUlNJT04gOiBcIiR7dmVyc2lvbn1cIixcclxuXHRcdE1hbmFnZXIgOiBNYW5hZ2VyLFxyXG5cdFx0aW50ZXJjZXB0b3JzIDogSW50ZXJjZXB0b3JzXHJcblx0fTtcclxuXHRcclxuXHRHbG9iYWwuUmVxdWVzdEludGVyY2VwdE1hbmFnZXIgPSBNYW5hZ2VyO1xyXG59KSh3aW5kb3d8fCBnbG9iYWwgfHwge30pOyIsImltcG9ydCBKc29uV2ViVG9rZW4gZnJvbSBcIi4vSnNvbldlYlRva2VuXCI7XHJcblxyXG5jb25zdCBKV1RJbnRlcmNlcHRvciA9IGZ1bmN0aW9uKGFTZXR1cCl7XHJcblx0dGhpcy5zZXR1cCA9IGFTZXR1cDtcclxuXHR0aGlzLnNldHVwLnJlZnJlc2ggPSB0aGlzLnNldHVwLnJlZnJlc2ggfHwge2ludGVydmFsIDogXCJhbHdheXNcIn07IFxyXG5cdHRoaXMuand0O1xyXG5cdHRoaXMudXNlRmV0Y2ggPSB0eXBlb2Ygd2luZG93LmZldGNoID09PSBcImZ1bmN0aW9uXCI7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5ERUZBVUxUID0ge1xyXG5cdC8vIG1pbiByZWZlc2ggaW50ZXJ2YWxsIHRpbWUgaXMgMTAgbWludXRlc1xyXG5cdE1JTl9SRUZSRVNIX0lOVEVSVkFMTF9USU1FIDogMTAgKiA2MCAqIDEwMDBcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5kb0FjY2VwdCA9IGZ1bmN0aW9uKGFEYXRhKXtcclxuXHRsZXQgdHlwZSA9IHR5cGVvZiB0aGlzLnNldHVwLmNvbmRpdGlvbjsgXHJcblx0aWYodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuICB0aGlzLnNldHVwLmNvbmRpdGlvbihhRGF0YSk7XHJcblx0ZWxzZSBpZih0eXBlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0cmV0dXJuIHRoaXMuc2V0dXAuY29uZGl0aW9uID09IGFEYXRhLnNlcnZlcjtcclxuXHRlbHNlIGlmKHRoaXMuc2V0dXAuY29uZGl0aW9uIGluc3RhbmNlb2YgQXJyYXkpe1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc2V0dXAuY29uZGl0aW9uLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZih0aGlzLnNldHVwLmNvbmRpdGlvbltpXSA9PSBhRGF0YS5zZXJ2ZXIpXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0fVx0XHJcblx0cmV0dXJuIGZhbHNlO1x0XHRcdFxyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLmRvSGFuZGxlID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spe1x0XHJcblx0bGV0IGlzWE1MSHR0cFJlcXVlc3QgPSBhUmVxdWVzdCBpbnN0YW5jZW9mIFhNTEh0dHBSZXF1ZXN0O1xyXG5cdGxldCBhcHBlbmRKV1QgPSBKV1RJbnRlcmNlcHRvci5wcm90b3R5cGVbKGlzWE1MSHR0cFJlcXVlc3QgPyBcImFwcGVuZEp3dFhIUlwiIDogXCJhcHBlbmRKd3RcIiApXS5iaW5kKHRoaXMsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spO1xyXG5cdFxyXG5cdGlmKHRoaXMuand0ICYmIHRoaXMuc2V0dXAucmVmcmVzaC5pbnRlcnZhbCAhPT0gXCJhbHdheXNcIilcclxuXHRcdHJldHVybiBhcHBlbmRKV1QodGhpcy5qd3QpO1xyXG5cdGVsc2VcclxuXHRcdHRoaXMuX19sb2FkVG9rZW4oYUNhbGxiYWNrKTtcclxufTtcclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fbG9hZFRva2VuID0gZnVuY3Rpb24oYUNhbGxiYWNrKXtcclxuXHRpZih0aGlzLnVzZUZldGNoKVxyXG5cdFx0cmV0dXJuIHRoaXMuX19sb2FkVG9rZW5GZXRjaChhQ2FsbGJhY2spO1x0XHJcblx0cmV0dXJuIHRoaXMuX19sb2FkVG9rZW5CeVhIUihhQ2FsbGJhY2spO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fbG9hZFRva2VuRmV0Y2ggPSBmdW5jdGlvbihhQ2FsbGJhY2spe1x0XHJcblx0cmV0dXJuIGZldGNoKHRoaXMuc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRtZXRob2Q6IHRoaXMuc2V0dXAubG9naW4ubWV0aG9kIHx8IFwiZ2V0XCJcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGFSZXNwb25zZSl7cmV0dXJuIGFSZXNwb25zZS5qc29uKCk7fSlcclxuXHQudGhlbihKV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19leHRyYWN0VG9rZW4uYmluZCh0aGlzKSlcclxuXHQudGhlbihhQ2FsbGJhY2sgPyBhQ2FsbGJhY2sgOiBmdW5jdGlvbigpe30pO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fbG9hZFRva2VuQnlYSFIgPSBmdW5jdGlvbihhQ2FsbGJhY2spe1xyXG5cdGxldCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdGxldCBleHRyYWN0VG9rZW4gPSBKV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19leHRyYWN0VG9rZW4uYmluZCh0aGlzKTtcclxuXHR4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh4aHR0cC5yZWFkeVN0YXRlID09IDQpe1xyXG5cdFx0XHRleHRyYWN0VG9rZW4oSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKSk7XHJcblx0XHRcdGlmKGFDYWxsYmFjaylcclxuXHRcdFx0XHRhQ2FsbGJhY2sodGhpcy5qd3QpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0eGh0dHAub3Blbih0aGlzLnNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiLCB0aGlzLnNldHVwLmxvZ2luLnVybCwgIXRoaXMuc2V0dXAubG9naW4uc3luYyk7XHJcblx0cmV0dXJuIHhodHRwLnNlbmQoKTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2V4dHJhY3RUb2tlbiA9IGZ1bmN0aW9uKGFSZXNwb25zZSl7XHJcblx0dGhpcy5qd3QgPSBuZXcgSnNvbldlYlRva2VuKGFSZXNwb25zZVt0aGlzLnNldHVwLmxvZ2luLnJlc3BvbnNlLnZhbHVlU2VsZWN0b3JdKTtcclxuXHRcclxuXHRpZih0aGlzLnNldHVwLnJlZnJlc2hJbnRlcnZhbCAhPT0gXCJhbHdheXNcIil7XHJcblx0XHRsZXQgaW50ZXJ2YWxsID0gdGhpcy5zZXR1cC5yZWZyZXNoLmludGVydmFsIHx8IEpXVEludGVyY2VwdG9yLkRFRkFVTFQuTUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUU7XHJcblx0XHRpZih0eXBlb2YgdGhpcy5qd3QuaGVhZGVyLmlhdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdGhpcy5qd3QuaGVhZGVyLmV4cCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdGxldCBkaWZmID0gdGhpcy5qd3QuaGVhZGVyLmV4cCAtIHRoaXMuand0LmhlYWRlci5pYXQ7XHRcdFx0XHJcblx0XHRcdGludGVydmFsbCA9IGRpZmYgPiAwID8gZGlmZiA6IHRoaXMuand0LmhlYWRlci5leHA7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHR5cGVvZiB0aGlzLmp3dC5oZWFkZXIuZXhwID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0bGV0IGRpZmYgPSB0aGlzLmp3dC5oZWFkZXIuZXhwIC0gRGF0ZS5ub3coKTtcclxuXHRcdFx0aW50ZXJ2YWxsID0gZGlmZiA+IDAgPyBkaWZmIDogdGhpcy5qd3QuaGVhZGVyLmV4cDtcclxuXHRcdH1cdFx0XHJcblx0XHRcclxuXHRcdGludGVydmFsbCA9IGludGVydmFsbCA+IEpXVEludGVyY2VwdG9yLkRFRkFVTFQuTUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUUgPyBpbnRlcnZhbGwgOiBKV1RJbnRlcmNlcHRvci5ERUZBVUxULk1JTl9SRUZSRVNIX0lOVEVSVkFMTF9USU1FO1xyXG5cdFx0XHJcblx0XHRzZXRUaW1lb3V0KEpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbi5iaW5kKHRoaXMpLCBpbnRlcnZhbGwpO1x0XHRcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHRoaXMuand0O1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLmFwcGVuZEp3dCA9IGZ1bmN0aW9uKGFSZXF1ZXN0LCBhQ2FsbGJhY2ssIGFKV1Qpe1xyXG5cdGFSZXF1ZXN0LmhlYWRlcnMgPSBhUmVxdWVzdC5oZWFkZXIgfHwge307XHJcblx0YVJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIGFKV1QucmF3VG9rZW47XHRcclxuXHRyZXR1cm4gdHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gYUNhbGxiYWNrKCkgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5hcHBlbmRKd3RYSFIgPSBmdW5jdGlvbihhUmVxdWVzdCwgYUNhbGxiYWNrLCBhSldUKXtcclxuXHRhUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiICwgXCJCZWFyZXIgXCIgKyBhSldULnJhd1Rva2VuKTtcclxuXHRyZXR1cm4gdHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gYUNhbGxiYWNrKCkgOiB1bmRlZmluZWQ7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEpXVEludGVyY2VwdG9yO1xyXG4iLCJjb25zdCBKc29uV2ViVG9rZW4gPSBmdW5jdGlvbihhVG9rZW4pe1xyXG5cdHRoaXMucmF3VG9rZW4gPSBhVG9rZW47XHJcblx0XHJcblx0bGV0IGZyYWdtZW50cyA9IGFUb2tlbi5zcGxpdChcIi5cIik7XHJcblx0aWYoZnJhZ21lbnRzLmxlbmd0aCAhPSAzKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsaWQganNvbiB3ZWIgdG9rZW4hIC0gXFxcIlwiK2FUb2tlbiArIFwiXFxcIlwiKTtcclxuXHRcclxuXHR0aGlzLmhlYWRlciA9IEpTT04ucGFyc2UoYXRvYihmcmFnbWVudHNbMF0pKTtcclxuXHR0aGlzLmJvZHkgPSBKU09OLnBhcnNlKGF0b2IoZnJhZ21lbnRzWzFdKSk7XHJcblx0dGhpcy5zaWduYXR1cmUgPSBmcmFnbWVudHNbMl07XHJcblx0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKc29uV2ViVG9rZW47ICIsImltcG9ydCBKc29uV2ViVG9rZW4gZnJvbSBcIi4vSnNvbldlYlRva2VuXCI7XHJcbmltcG9ydCBKV1RJbnRlcmNlcHRvciBmcm9tIFwiLi9KV1RJbnRlcmNlcHRvclwiO1xyXG5cclxuXHJcbmNvbnN0IERhdGEgPSB7XHJcblx0SnNvbldlYlRva2VuIDogSnNvbldlYlRva2VuLFxyXG5cdEpXVEludGVyY2VwdG9yIDogSldUSW50ZXJjZXB0b3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==