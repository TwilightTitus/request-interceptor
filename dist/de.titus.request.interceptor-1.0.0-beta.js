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
/* harmony import */ var _Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager */ "./src/Manager.js");
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants */ "./src/Constants.js");



if(typeof fetch === "function"){	
	const ORGFETCH = fetch;
	fetch = function(aUrl, aRequest){
		console.log("arguments:", arguments);
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
		
		return _Manager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].doIntercept(data, request, ORGFETCH.bind(this, aUrl, request));
	};
}

/***/ }),

/***/ "./src/Manager.js":
/*!************************!*\
  !*** ./src/Manager.js ***!
  \************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Manager = {	
	
	urlHandleMap: {},	
	doIntercept : function(aData, aRequest, aCallback){
		let interceptor = this.urlHandleMap[aData.server];
		let type = typeof interceptor;
		if(type === "undefined")
			return aCallback();
		else if(type === "function")
			return interceptor(aData, aRequest, aCallback);
		else if(type === "object")
			return interceptor.doHandle(aData, aRequest, aCallback);		
	},
	addInterceptor : function(aUrl, aInterceptor){		
		if(arguments.length < 2)
			throw new Error("function required a url and an interceptor");	
		
		let interceptor = arguments[arguments.length - 1];
		for(let i = 0; i < (arguments.length - 1); i++)		
			this.urlHandleMap[arguments[i]] = interceptor;		
	},
	removeInterceptor : function(aUrl){
		delete this.urlHandleMap[aUrl];
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

JWTInterceptor.prototype.doHandle = function(aData, aRequest, aCallback){	
	let isXMLHttpRequest = aRequest instanceof XMLHttpRequest;
	let appendJWT = JWTInterceptor.prototype[(isXMLHttpRequest ? "appendJwtXHR" : "appendJwt" )].bind(this, aRequest, aCallback);
	
	if(this.jwt && this.setup.refresh.interval !== "always")
		return appendJWT(this.jwt);
	else
		return this.__loadToken(appendJWT);
};

JWTInterceptor.prototype.__loadToken = function(aCallback){
	if(this.useFetch)
		return this.__loadTokenFetch(aCallback);	
	return this.__loadTokenByXHR(aCallback);
};

JWTInterceptor.prototype.__loadTokenFetch = function(aCallback){
	return fetch(this.setup.login.url, {
		method: this.setup.login.method || "get"
	})
	.then(function(aResponse){return aResponse.json();})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvSldUSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9Kc29uV2ViVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFZSwwREFBQyxZQUFZLEU7Ozs7Ozs7Ozs7OztBQ0Y1QjtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDLGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLHdEQUFPO0FBQ2hCO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQzFCQSxpQjs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEO0FBQ0EsRUFBRTtBQUNGLCtDO0FBQ0E7QUFDQSxpRTs7QUFFQTtBQUNBLGdCQUFnQiw0QkFBNEI7QUFDNUMsaUQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDZSxnRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnRCO0FBQUE7QUFBZ0M7QUFDSTs7QUFFcEMsMEM7QUFDQTtBQUNBO0FBQ0EsNEM7QUFDQSxjQUFjLDBEQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDO0FBQ0E7O0FBRUEsNkM7QUFDQSxTQUFTLHdEQUFPO0FBQ2hCO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ1Q7QUFDZTtBQUNVOzs7QUFHMUMsa0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQU87QUFDbkIsaUJBQWlCLDZEQUFZO0FBQzdCOztBQUVBLGtDQUFrQyx3REFBTztBQUN6QyxDQUFDLHVCQUF1QixFOzs7Ozs7Ozs7Ozs7OztBQ2hCeEI7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQSw2Q0FBNkMscUI7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDJCQUEyQix5QkFBeUI7QUFDcEQ7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsNkRBQVk7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLHdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUE7O0FBRUEseUU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSx1RUFBYyxFQUFDOzs7Ozs7Ozs7Ozs7OztBQ3JGOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVlLHFFQUFZLEU7Ozs7Ozs7Ozs7Ozs7QUNiM0I7QUFBQTtBQUEwQztBQUNJOzs7QUFHOUM7QUFDQSxnQkFBZ0IsNkRBQVk7QUFDNUIsa0JBQWtCLCtEQUFjO0FBQ2hDOztBQUVlLDZEQUFJLEUiLCJmaWxlIjoiZGUudGl0dXMucmVxdWVzdC5pbnRlcmNlcHRvci0xLjAuMC1iZXRhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgVVJMU1BMSVRURVIgPSAvXigoKFteOlxcL10qOik/XFwvXFwvKT8oW146XFwvXSopKFxcOihbMC05XSopKT8pKFxcLy4qKT8kLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtVUkxTUExJVFRFUn07IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuaWYodHlwZW9mIGZldGNoID09PSBcImZ1bmN0aW9uXCIpe1x0XHJcblx0Y29uc3QgT1JHRkVUQ0ggPSBmZXRjaDtcclxuXHRmZXRjaCA9IGZ1bmN0aW9uKGFVcmwsIGFSZXF1ZXN0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwiYXJndW1lbnRzOlwiLCBhcmd1bWVudHMpO1xyXG5cdFx0bGV0IHJlcXVlc3QgPSBhUmVxdWVzdCB8fCB7fTtcclxuXHRcdGxldCBtYXRjaCA9IENvbnN0YW50cy5VUkxTUExJVFRFUi5leGVjKGFVcmwpO1xyXG5cdFx0bGV0IGRhdGEgPSB7XHJcblx0XHRcdG1ldGhvZCA6IHJlcXVlc3QubWV0aG9kIHx8IFwiR0VUXCIsXHJcblx0XHRcdHVybCA6IGFVcmwsXHJcblx0XHRcdHNlcnZlcjogbWF0Y2hbMV0sXHJcblx0XHRcdHByb3RvY29sIDogKGZ1bmN0aW9uKG1hdGNoKXtcclxuXHRcdFx0XHRpZih0eXBlb2YgbWF0Y2hbMl0gPT09IFwidW5kZWZpbmVkXCIgfHwgbWF0Y2hbM10gPT0gXCIvL1wiKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sIHx8IFwiaHR0cDpcIjtcclxuXHRcdFx0XHRlbHNlIHJldHVybiBtYXRjaFszXTtcdFx0XHRcclxuXHRcdFx0fSkuY2FsbChudWxsLCBtYXRjaCksXHJcblx0XHRcdGhvc3RuYW1lOiBtYXRjaFs0XSB8fGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLFxyXG5cdFx0XHRwb3J0OiBtYXRjaFs2XSxcclxuXHRcdFx0cXVlcnk6IG1hdGNoWzddLFxyXG5cdFx0XHRhc3luYyA6IHRydWVcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBNYW5hZ2VyLmRvSW50ZXJjZXB0KGRhdGEsIHJlcXVlc3QsIE9SR0ZFVENILmJpbmQodGhpcywgYVVybCwgcmVxdWVzdCkpO1xyXG5cdH07XHJcbn0iLCJjb25zdCBNYW5hZ2VyID0ge1x0XHJcblx0XHJcblx0dXJsSGFuZGxlTWFwOiB7fSxcdFxyXG5cdGRvSW50ZXJjZXB0IDogZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spe1xyXG5cdFx0bGV0IGludGVyY2VwdG9yID0gdGhpcy51cmxIYW5kbGVNYXBbYURhdGEuc2VydmVyXTtcclxuXHRcdGxldCB0eXBlID0gdHlwZW9mIGludGVyY2VwdG9yO1xyXG5cdFx0aWYodHlwZSA9PT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0cmV0dXJuIGFDYWxsYmFjaygpO1xyXG5cdFx0ZWxzZSBpZih0eXBlID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBpbnRlcmNlcHRvcihhRGF0YSwgYVJlcXVlc3QsIGFDYWxsYmFjayk7XHJcblx0XHRlbHNlIGlmKHR5cGUgPT09IFwib2JqZWN0XCIpXHJcblx0XHRcdHJldHVybiBpbnRlcmNlcHRvci5kb0hhbmRsZShhRGF0YSwgYVJlcXVlc3QsIGFDYWxsYmFjayk7XHRcdFxyXG5cdH0sXHJcblx0YWRkSW50ZXJjZXB0b3IgOiBmdW5jdGlvbihhVXJsLCBhSW50ZXJjZXB0b3Ipe1x0XHRcclxuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJmdW5jdGlvbiByZXF1aXJlZCBhIHVybCBhbmQgYW4gaW50ZXJjZXB0b3JcIik7XHRcclxuXHRcdFxyXG5cdFx0bGV0IGludGVyY2VwdG9yID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAoYXJndW1lbnRzLmxlbmd0aCAtIDEpOyBpKyspXHRcdFxyXG5cdFx0XHR0aGlzLnVybEhhbmRsZU1hcFthcmd1bWVudHNbaV1dID0gaW50ZXJjZXB0b3I7XHRcdFxyXG5cdH0sXHJcblx0cmVtb3ZlSW50ZXJjZXB0b3IgOiBmdW5jdGlvbihhVXJsKXtcclxuXHRcdGRlbGV0ZSB0aGlzLnVybEhhbmRsZU1hcFthVXJsXTtcclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXI7IFxyXG5cclxuXHJcbiIsImltcG9ydCBNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXJcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuXHJcbmlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gXCJ1bmRlZmluZWRcIil7XHRcclxuXHRjb25zdCBPUkdPUEVOID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW47XHJcblx0Y29uc3QgT1JHU0VORCA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kO1xyXG5cdFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKXtcdFx0XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhcmd1bWVudHNbMV0pO1xyXG5cdFx0dGhpcy5fX2ludGVyY2VwdG9yUmVxdWVzdERhdGEgPSB7XHJcblx0XHRcdG1ldGhvZCA6IGFyZ3VtZW50c1swXSxcclxuXHRcdFx0dXJsIDogYXJndW1lbnRzWzFdLFxyXG5cdFx0XHRzZXJ2ZXI6IG1hdGNoWzFdLFxyXG5cdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHxkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0YXN5bmMgOiB0eXBlb2YgYXJndW1lbnRzWzJdID09PSBcImJvb2xlYW5cIiA/IGFyZ3VtZW50c1syXSA6IHRydWVcclxuXHRcdH07XHJcblx0XHRPUkdPUEVOLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHRcclxuXHR9O1xyXG5cdFxyXG5cdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCl7XHRcdCBcclxuXHRcdHJldHVybiBNYW5hZ2VyLmRvSW50ZXJjZXB0KHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhLCB0aGlzLCBPUkdTRU5ELmJpbmQodGhpcywgYXJndW1lbnRzKSk7XHJcblx0fTtcclxufSIsImltcG9ydCBcIi4vWE1MSHR0cFJlcXVlc3RcIjtcclxuaW1wb3J0IFwiLi9GZXRjaFwiO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBJbnRlcmNlcHRvcnMgZnJvbSBcIi4vaW50ZXJjZXB0b3JzXCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uKEdsb2JhbCl7XHRcclxuXHRHbG9iYWwuZGUgPSBHbG9iYWwuZGUgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzID0gR2xvYmFsLmRlLnRpdHVzIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0ID0gR2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QgfHwge307XHJcblx0R2xvYmFsLmRlLnRpdHVzLnJlcXVlc3QuaW50ZXJjZXB0b3IgPSB7XHJcblx0XHRNYW5hZ2VyIDogTWFuYWdlcixcclxuXHRcdGludGVyY2VwdG9ycyA6IEludGVyY2VwdG9yc1xyXG5cdH07XHJcblx0XHJcblx0R2xvYmFsLlJlcXVlc3RJbnRlcmNlcHRNYW5hZ2VyID0gTWFuYWdlcjtcclxufSkod2luZG93fHwgZ2xvYmFsIHx8IHt9KTsiLCJpbXBvcnQgSnNvbldlYlRva2VuIGZyb20gXCIuL0pzb25XZWJUb2tlblwiO1xyXG5cclxuY29uc3QgSldUSW50ZXJjZXB0b3IgPSBmdW5jdGlvbihhU2V0dXApe1xyXG5cdHRoaXMuc2V0dXAgPSBhU2V0dXA7XHJcblx0dGhpcy5zZXR1cC5yZWZyZXNoID0gdGhpcy5zZXR1cC5yZWZyZXNoIHx8IHtpbnRlcnZhbCA6IFwiYWx3YXlzXCJ9OyBcclxuXHR0aGlzLmp3dDtcclxuXHR0aGlzLnVzZUZldGNoID0gdHlwZW9mIHdpbmRvdy5mZXRjaCA9PT0gXCJmdW5jdGlvblwiO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IuREVGQVVMVCA9IHtcclxuXHQvLyBtaW4gcmVmZXNoIGludGVydmFsbCB0aW1lIGlzIDEwIG1pbnV0ZXNcclxuXHRNSU5fUkVGUkVTSF9JTlRFUlZBTExfVElNRSA6IDEwICogNjAgKiAxMDAwXHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuZG9IYW5kbGUgPSBmdW5jdGlvbihhRGF0YSwgYVJlcXVlc3QsIGFDYWxsYmFjayl7XHRcclxuXHRsZXQgaXNYTUxIdHRwUmVxdWVzdCA9IGFSZXF1ZXN0IGluc3RhbmNlb2YgWE1MSHR0cFJlcXVlc3Q7XHJcblx0bGV0IGFwcGVuZEpXVCA9IEpXVEludGVyY2VwdG9yLnByb3RvdHlwZVsoaXNYTUxIdHRwUmVxdWVzdCA/IFwiYXBwZW5kSnd0WEhSXCIgOiBcImFwcGVuZEp3dFwiICldLmJpbmQodGhpcywgYVJlcXVlc3QsIGFDYWxsYmFjayk7XHJcblx0XHJcblx0aWYodGhpcy5qd3QgJiYgdGhpcy5zZXR1cC5yZWZyZXNoLmludGVydmFsICE9PSBcImFsd2F5c1wiKVxyXG5cdFx0cmV0dXJuIGFwcGVuZEpXVCh0aGlzLmp3dCk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHRoaXMuX19sb2FkVG9rZW4oYXBwZW5kSldUKTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbiA9IGZ1bmN0aW9uKGFDYWxsYmFjayl7XHJcblx0aWYodGhpcy51c2VGZXRjaClcclxuXHRcdHJldHVybiB0aGlzLl9fbG9hZFRva2VuRmV0Y2goYUNhbGxiYWNrKTtcdFxyXG5cdHJldHVybiB0aGlzLl9fbG9hZFRva2VuQnlYSFIoYUNhbGxiYWNrKTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbkZldGNoID0gZnVuY3Rpb24oYUNhbGxiYWNrKXtcclxuXHRyZXR1cm4gZmV0Y2godGhpcy5zZXR1cC5sb2dpbi51cmwsIHtcclxuXHRcdG1ldGhvZDogdGhpcy5zZXR1cC5sb2dpbi5tZXRob2QgfHwgXCJnZXRcIlxyXG5cdH0pXHJcblx0LnRoZW4oZnVuY3Rpb24oYVJlc3BvbnNlKXtyZXR1cm4gYVJlc3BvbnNlLmpzb24oKTt9KVxyXG5cdC50aGVuKEpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2V4dHJhY3RUb2tlbi5iaW5kKHRoaXMpKVxyXG5cdC50aGVuKGFDYWxsYmFjayA/IGFDYWxsYmFjayA6IGZ1bmN0aW9uKCl7fSk7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19sb2FkVG9rZW5CeVhIUiA9IGZ1bmN0aW9uKGFDYWxsYmFjayl7XHJcblx0bGV0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0bGV0IGV4dHJhY3RUb2tlbiA9IEpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2V4dHJhY3RUb2tlbi5iaW5kKHRoaXMpO1xyXG5cdHhodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHhodHRwLnJlYWR5U3RhdGUgPT0gNCl7XHJcblx0XHRcdGV4dHJhY3RUb2tlbihKU09OLnBhcnNlKHRoaXMucmVzcG9uc2UpKTtcclxuXHRcdFx0aWYoYUNhbGxiYWNrKVxyXG5cdFx0XHRcdGFDYWxsYmFjayh0aGlzLmp3dCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHR4aHR0cC5vcGVuKHRoaXMuc2V0dXAubG9naW4ubWV0aG9kIHx8IFwiZ2V0XCIsIHRoaXMuc2V0dXAubG9naW4udXJsLCAhdGhpcy5zZXR1cC5sb2dpbi5zeW5jKTtcclxuXHRyZXR1cm4geGh0dHAuc2VuZCgpO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fZXh0cmFjdFRva2VuID0gZnVuY3Rpb24oYVJlc3BvbnNlKXtcclxuXHR0aGlzLmp3dCA9IG5ldyBKc29uV2ViVG9rZW4oYVJlc3BvbnNlW3RoaXMuc2V0dXAubG9naW4ucmVzcG9uc2UudmFsdWVTZWxlY3Rvcl0pO1xyXG5cdFxyXG5cdGlmKHRoaXMuc2V0dXAucmVmcmVzaEludGVydmFsICE9PSBcImFsd2F5c1wiKXtcclxuXHRcdGxldCBpbnRlcnZhbGwgPSB0aGlzLnNldHVwLnJlZnJlc2guaW50ZXJ2YWwgfHwgSldUSW50ZXJjZXB0b3IuREVGQVVMVC5NSU5fUkVGUkVTSF9JTlRFUlZBTExfVElNRTtcclxuXHRcdGlmKHR5cGVvZiB0aGlzLmp3dC5oZWFkZXIuaWF0ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB0aGlzLmp3dC5oZWFkZXIuZXhwID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0bGV0IGRpZmYgPSB0aGlzLmp3dC5oZWFkZXIuZXhwIC0gdGhpcy5qd3QuaGVhZGVyLmlhdDtcdFx0XHRcclxuXHRcdFx0aW50ZXJ2YWxsID0gZGlmZiA+IDAgPyBkaWZmIDogdGhpcy5qd3QuaGVhZGVyLmV4cDtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodHlwZW9mIHRoaXMuand0LmhlYWRlci5leHAgPT09IFwibnVtYmVyXCIpe1xyXG5cdFx0XHRsZXQgZGlmZiA9IHRoaXMuand0LmhlYWRlci5leHAgLSBEYXRlLm5vdygpO1xyXG5cdFx0XHRpbnRlcnZhbGwgPSBkaWZmID4gMCA/IGRpZmYgOiB0aGlzLmp3dC5oZWFkZXIuZXhwO1xyXG5cdFx0fVx0XHRcclxuXHRcdFxyXG5cdFx0aW50ZXJ2YWxsID0gaW50ZXJ2YWxsID4gSldUSW50ZXJjZXB0b3IuREVGQVVMVC5NSU5fUkVGUkVTSF9JTlRFUlZBTExfVElNRSA/IGludGVydmFsbCA6IEpXVEludGVyY2VwdG9yLkRFRkFVTFQuTUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUU7XHJcblx0XHRcclxuXHRcdHNldFRpbWVvdXQoSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fbG9hZFRva2VuLmJpbmQodGhpcyksIGludGVydmFsbCk7XHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGhpcy5qd3Q7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuYXBwZW5kSnd0ID0gZnVuY3Rpb24oYVJlcXVlc3QsIGFDYWxsYmFjaywgYUpXVCl7XHJcblx0YVJlcXVlc3QuaGVhZGVycyA9IGFSZXF1ZXN0LmhlYWRlciB8fCB7fTtcclxuXHRhUmVxdWVzdC5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiQmVhcmVyIFwiICsgYUpXVC5yYXdUb2tlbjtcdFxyXG5cdHJldHVybiB0eXBlb2YgYUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgPyBhQ2FsbGJhY2soKSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLmFwcGVuZEp3dFhIUiA9IGZ1bmN0aW9uKGFSZXF1ZXN0LCBhQ2FsbGJhY2ssIGFKV1Qpe1xyXG5cdGFSZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIgLCBcIkJlYXJlciBcIiArIGFKV1QucmF3VG9rZW4pO1xyXG5cdHJldHVybiB0eXBlb2YgYUNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgPyBhQ2FsbGJhY2soKSA6IHVuZGVmaW5lZDtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSldUSW50ZXJjZXB0b3I7XHJcbiIsImNvbnN0IEpzb25XZWJUb2tlbiA9IGZ1bmN0aW9uKGFUb2tlbil7XHJcblx0dGhpcy5yYXdUb2tlbiA9IGFUb2tlbjtcclxuXHRcclxuXHRsZXQgZnJhZ21lbnRzID0gYVRva2VuLnNwbGl0KFwiLlwiKTtcclxuXHRpZihmcmFnbWVudHMubGVuZ3RoICE9IDMpXHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB2YWxpZCBqc29uIHdlYiB0b2tlbiEgLSBcXFwiXCIrYVRva2VuICsgXCJcXFwiXCIpO1xyXG5cdFxyXG5cdHRoaXMuaGVhZGVyID0gSlNPTi5wYXJzZShhdG9iKGZyYWdtZW50c1swXSkpO1xyXG5cdHRoaXMuYm9keSA9IEpTT04ucGFyc2UoYXRvYihmcmFnbWVudHNbMV0pKTtcclxuXHR0aGlzLnNpZ25hdHVyZSA9IGZyYWdtZW50c1syXTtcclxuXHRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpzb25XZWJUb2tlbjsgIiwiaW1wb3J0IEpzb25XZWJUb2tlbiBmcm9tIFwiLi9Kc29uV2ViVG9rZW5cIjtcclxuaW1wb3J0IEpXVEludGVyY2VwdG9yIGZyb20gXCIuL0pXVEludGVyY2VwdG9yXCI7XHJcblxyXG5cclxuY29uc3QgRGF0YSA9IHtcclxuXHRKc29uV2ViVG9rZW4gOiBKc29uV2ViVG9rZW4sXHJcblx0SldUSW50ZXJjZXB0b3IgOiBKV1RJbnRlcmNlcHRvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTsiXSwic291cmNlUm9vdCI6IiJ9