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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvWE1MSHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcmNlcHRvcnMvSldUSW50ZXJjZXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9Kc29uV2ViVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFZSwwREFBQyxZQUFZLEU7Ozs7Ozs7Ozs7OztBQ0Y1QjtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDLGdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyx3REFBTztBQUNoQjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUN6QkEsaUI7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRDtBQUNBLEVBQUU7QUFDRiwrQztBQUNBO0FBQ0EsaUU7O0FBRUE7QUFDQSxnQkFBZ0IsNEJBQTRCO0FBQzVDLGlEO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsZ0VBQU8sRTs7Ozs7Ozs7Ozs7Ozs7O0FDekJ0QjtBQUFBO0FBQWdDO0FBQ0k7O0FBRXBDLDBDO0FBQ0E7QUFDQTtBQUNBLDRDO0FBQ0EsY0FBYywwREFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQztBQUNBOztBQUVBLDZDO0FBQ0EsU0FBUyx3REFBTztBQUNoQjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNUO0FBQ2U7QUFDVTs7O0FBRzFDLGtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsWUFBWSx3REFBTztBQUNuQixpQkFBaUIsNkRBQVk7QUFDN0I7O0FBRUEsa0NBQWtDLHdEQUFPO0FBQ3pDLENBQUMsdUJBQXVCLEU7Ozs7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUEwQzs7QUFFMUM7QUFDQTtBQUNBLDZDQUE2QyxxQjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw2REFBWTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0Esd0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7QUFFQTs7QUFFQSx5RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHVFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDckY5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUscUVBQVksRTs7Ozs7Ozs7Ozs7OztBQ2IzQjtBQUFBO0FBQTBDO0FBQ0k7OztBQUc5QztBQUNBLGdCQUFnQiw2REFBWTtBQUM1QixrQkFBa0IsK0RBQWM7QUFDaEM7O0FBRWUsNkRBQUksRSIsImZpbGUiOiJkZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3JjL2luZGV4XCI7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiY29uc3QgVVJMU1BMSVRURVIgPSAvXigoKFteOlxcL10qOik/XFwvXFwvKT8oW146XFwvXSopKFxcOihbMC05XSopKT8pKFxcLy4qKT8kLztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtVUkxTUExJVFRFUn07IiwiaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5cclxuaWYodHlwZW9mIGZldGNoID09PSBcImZ1bmN0aW9uXCIpe1x0XHJcblx0Y29uc3QgT1JHRkVUQ0ggPSBmZXRjaDtcclxuXHRmZXRjaCA9IGZ1bmN0aW9uKGFVcmwsIGFSZXF1ZXN0KXtcclxuXHRcdGxldCByZXF1ZXN0ID0gYVJlcXVlc3QgfHwge307XHJcblx0XHRsZXQgbWF0Y2ggPSBDb25zdGFudHMuVVJMU1BMSVRURVIuZXhlYyhhVXJsKTtcclxuXHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRtZXRob2QgOiByZXF1ZXN0Lm1ldGhvZCB8fCBcIkdFVFwiLFxyXG5cdFx0XHR1cmwgOiBhVXJsLFxyXG5cdFx0XHRzZXJ2ZXI6IG1hdGNoWzFdLFxyXG5cdFx0XHRwcm90b2NvbCA6IChmdW5jdGlvbihtYXRjaCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIG1hdGNoWzJdID09PSBcInVuZGVmaW5lZFwiIHx8IG1hdGNoWzNdID09IFwiLy9cIilcclxuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCB8fCBcImh0dHA6XCI7XHJcblx0XHRcdFx0ZWxzZSByZXR1cm4gbWF0Y2hbM107XHRcdFx0XHJcblx0XHRcdH0pLmNhbGwobnVsbCwgbWF0Y2gpLFxyXG5cdFx0XHRob3N0bmFtZTogbWF0Y2hbNF0gfHxkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSxcclxuXHRcdFx0cG9ydDogbWF0Y2hbNl0sXHJcblx0XHRcdHF1ZXJ5OiBtYXRjaFs3XSxcclxuXHRcdFx0YXN5bmMgOiB0cnVlXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gTWFuYWdlci5kb0ludGVyY2VwdChkYXRhLCByZXF1ZXN0LCBPUkdGRVRDSC5iaW5kKHRoaXMsIGFVcmwsIHJlcXVlc3QpKTtcclxuXHR9O1xyXG59IiwiY29uc3QgTWFuYWdlciA9IHtcdFxyXG5cdFxyXG5cdHVybEhhbmRsZU1hcDoge30sXHRcclxuXHRkb0ludGVyY2VwdCA6IGZ1bmN0aW9uKGFEYXRhLCBhUmVxdWVzdCwgYUNhbGxiYWNrKXtcclxuXHRcdGxldCBpbnRlcmNlcHRvciA9IHRoaXMudXJsSGFuZGxlTWFwW2FEYXRhLnNlcnZlcl07XHJcblx0XHRsZXQgdHlwZSA9IHR5cGVvZiBpbnRlcmNlcHRvcjtcclxuXHRcdGlmKHR5cGUgPT09IFwidW5kZWZpbmVkXCIpXHJcblx0XHRcdHJldHVybiBhQ2FsbGJhY2soKTtcclxuXHRcdGVsc2UgaWYodHlwZSA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3IoYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spO1xyXG5cdFx0ZWxzZSBpZih0eXBlID09PSBcIm9iamVjdFwiKVxyXG5cdFx0XHRyZXR1cm4gaW50ZXJjZXB0b3IuZG9IYW5kbGUoYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spO1x0XHRcclxuXHR9LFxyXG5cdGFkZEludGVyY2VwdG9yIDogZnVuY3Rpb24oYVVybCwgYUludGVyY2VwdG9yKXtcdFx0XHJcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoIDwgMilcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiZnVuY3Rpb24gcmVxdWlyZWQgYSB1cmwgYW5kIGFuIGludGVyY2VwdG9yXCIpO1x0XHJcblx0XHRcclxuXHRcdGxldCBpbnRlcmNlcHRvciA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgKGFyZ3VtZW50cy5sZW5ndGggLSAxKTsgaSsrKVx0XHRcclxuXHRcdFx0dGhpcy51cmxIYW5kbGVNYXBbYXJndW1lbnRzW2ldXSA9IGludGVyY2VwdG9yO1x0XHRcclxuXHR9LFxyXG5cdHJlbW92ZUludGVyY2VwdG9yIDogZnVuY3Rpb24oYVVybCl7XHJcblx0XHRkZWxldGUgdGhpcy51cmxIYW5kbGVNYXBbYVVybF07XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyOyBcclxuXHJcblxyXG4iLCJpbXBvcnQgTWFuYWdlciBmcm9tIFwiLi9NYW5hZ2VyXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcblxyXG5pZih0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIpe1x0XHJcblx0Y29uc3QgT1JHT1BFTiA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5vcGVuO1xyXG5cdGNvbnN0IE9SR1NFTkQgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZDtcclxuXHRYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCl7XHRcdFxyXG5cdFx0bGV0IG1hdGNoID0gQ29uc3RhbnRzLlVSTFNQTElUVEVSLmV4ZWMoYXJndW1lbnRzWzFdKTtcclxuXHRcdHRoaXMuX19pbnRlcmNlcHRvclJlcXVlc3REYXRhID0ge1xyXG5cdFx0XHRtZXRob2QgOiBhcmd1bWVudHNbMF0sXHJcblx0XHRcdHVybCA6IGFyZ3VtZW50c1sxXSxcclxuXHRcdFx0c2VydmVyOiBtYXRjaFsxXSxcclxuXHRcdFx0cHJvdG9jb2wgOiAoZnVuY3Rpb24obWF0Y2gpe1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBtYXRjaFsyXSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtYXRjaFszXSA9PSBcIi8vXCIpXHJcblx0XHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgfHwgXCJodHRwOlwiO1xyXG5cdFx0XHRcdGVsc2UgcmV0dXJuIG1hdGNoWzNdO1x0XHRcdFxyXG5cdFx0XHR9KS5jYWxsKG51bGwsIG1hdGNoKSxcclxuXHRcdFx0aG9zdG5hbWU6IG1hdGNoWzRdIHx8ZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcblx0XHRcdHBvcnQ6IG1hdGNoWzZdLFxyXG5cdFx0XHRxdWVyeTogbWF0Y2hbN10sXHJcblx0XHRcdGFzeW5jIDogdHlwZW9mIGFyZ3VtZW50c1syXSA9PT0gXCJib29sZWFuXCIgPyBhcmd1bWVudHNbMl0gOiB0cnVlXHJcblx0XHR9O1xyXG5cdFx0T1JHT1BFTi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1x0XHJcblx0fTtcclxuXHRcclxuXHQgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbigpe1x0XHQgXHJcblx0XHRyZXR1cm4gTWFuYWdlci5kb0ludGVyY2VwdCh0aGlzLl9faW50ZXJjZXB0b3JSZXF1ZXN0RGF0YSwgdGhpcywgT1JHU0VORC5iaW5kKHRoaXMsIGFyZ3VtZW50cykpO1xyXG5cdH07XHJcbn0iLCJpbXBvcnQgXCIuL1hNTEh0dHBSZXF1ZXN0XCI7XHJcbmltcG9ydCBcIi4vRmV0Y2hcIjtcclxuaW1wb3J0IE1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlclwiO1xyXG5pbXBvcnQgSW50ZXJjZXB0b3JzIGZyb20gXCIuL2ludGVyY2VwdG9yc1wiO1xyXG5cclxuXHJcbihmdW5jdGlvbihHbG9iYWwpe1x0XHJcblx0R2xvYmFsLmRlID0gR2xvYmFsLmRlIHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cyA9IEdsb2JhbC5kZS50aXR1cyB8fCB7fTtcclxuXHRHbG9iYWwuZGUudGl0dXMucmVxdWVzdCA9IEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0IHx8IHt9O1xyXG5cdEdsb2JhbC5kZS50aXR1cy5yZXF1ZXN0LmludGVyY2VwdG9yID0ge1xyXG5cdFx0VkVSU0lPTiA6IFwiJHt2ZXJzaW9ufVwiLFxyXG5cdFx0TWFuYWdlciA6IE1hbmFnZXIsXHJcblx0XHRpbnRlcmNlcHRvcnMgOiBJbnRlcmNlcHRvcnNcclxuXHR9O1xyXG5cdFxyXG5cdEdsb2JhbC5SZXF1ZXN0SW50ZXJjZXB0TWFuYWdlciA9IE1hbmFnZXI7XHJcbn0pKHdpbmRvd3x8IGdsb2JhbCB8fCB7fSk7IiwiaW1wb3J0IEpzb25XZWJUb2tlbiBmcm9tIFwiLi9Kc29uV2ViVG9rZW5cIjtcclxuXHJcbmNvbnN0IEpXVEludGVyY2VwdG9yID0gZnVuY3Rpb24oYVNldHVwKXtcclxuXHR0aGlzLnNldHVwID0gYVNldHVwO1xyXG5cdHRoaXMuc2V0dXAucmVmcmVzaCA9IHRoaXMuc2V0dXAucmVmcmVzaCB8fCB7aW50ZXJ2YWwgOiBcImFsd2F5c1wifTsgXHJcblx0dGhpcy5qd3Q7XHJcblx0dGhpcy51c2VGZXRjaCA9IHR5cGVvZiB3aW5kb3cuZmV0Y2ggPT09IFwiZnVuY3Rpb25cIjtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLkRFRkFVTFQgPSB7XHJcblx0Ly8gbWluIHJlZmVzaCBpbnRlcnZhbGwgdGltZSBpcyAxMCBtaW51dGVzXHJcblx0TUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUUgOiAxMCAqIDYwICogMTAwMFxyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLmRvSGFuZGxlID0gZnVuY3Rpb24oYURhdGEsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spe1x0XHJcblx0bGV0IGlzWE1MSHR0cFJlcXVlc3QgPSBhUmVxdWVzdCBpbnN0YW5jZW9mIFhNTEh0dHBSZXF1ZXN0O1xyXG5cdGxldCBhcHBlbmRKV1QgPSBKV1RJbnRlcmNlcHRvci5wcm90b3R5cGVbKGlzWE1MSHR0cFJlcXVlc3QgPyBcImFwcGVuZEp3dFhIUlwiIDogXCJhcHBlbmRKd3RcIiApXS5iaW5kKHRoaXMsIGFSZXF1ZXN0LCBhQ2FsbGJhY2spO1xyXG5cdFxyXG5cdGlmKHRoaXMuand0ICYmIHRoaXMuc2V0dXAucmVmcmVzaC5pbnRlcnZhbCAhPT0gXCJhbHdheXNcIilcclxuXHRcdHJldHVybiBhcHBlbmRKV1QodGhpcy5qd3QpO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiB0aGlzLl9fbG9hZFRva2VuKGFwcGVuZEpXVCk7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19sb2FkVG9rZW4gPSBmdW5jdGlvbihhQ2FsbGJhY2spe1xyXG5cdGlmKHRoaXMudXNlRmV0Y2gpXHJcblx0XHRyZXR1cm4gdGhpcy5fX2xvYWRUb2tlbkZldGNoKGFDYWxsYmFjayk7XHRcclxuXHRyZXR1cm4gdGhpcy5fX2xvYWRUb2tlbkJ5WEhSKGFDYWxsYmFjayk7XHJcbn07XHJcblxyXG5KV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19sb2FkVG9rZW5GZXRjaCA9IGZ1bmN0aW9uKGFDYWxsYmFjayl7XHJcblx0cmV0dXJuIGZldGNoKHRoaXMuc2V0dXAubG9naW4udXJsLCB7XHJcblx0XHRtZXRob2Q6IHRoaXMuc2V0dXAubG9naW4ubWV0aG9kIHx8IFwiZ2V0XCJcclxuXHR9KVxyXG5cdC50aGVuKGZ1bmN0aW9uKGFSZXNwb25zZSl7cmV0dXJuIGFSZXNwb25zZS5qc29uKCk7fSlcclxuXHQudGhlbihKV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19leHRyYWN0VG9rZW4uYmluZCh0aGlzKSlcclxuXHQudGhlbihhQ2FsbGJhY2sgPyBhQ2FsbGJhY2sgOiBmdW5jdGlvbigpe30pO1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLl9fbG9hZFRva2VuQnlYSFIgPSBmdW5jdGlvbihhQ2FsbGJhY2spe1xyXG5cdGxldCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdGxldCBleHRyYWN0VG9rZW4gPSBKV1RJbnRlcmNlcHRvci5wcm90b3R5cGUuX19leHRyYWN0VG9rZW4uYmluZCh0aGlzKTtcclxuXHR4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh4aHR0cC5yZWFkeVN0YXRlID09IDQpe1xyXG5cdFx0XHRleHRyYWN0VG9rZW4oSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKSk7XHJcblx0XHRcdGlmKGFDYWxsYmFjaylcclxuXHRcdFx0XHRhQ2FsbGJhY2sodGhpcy5qd3QpO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0eGh0dHAub3Blbih0aGlzLnNldHVwLmxvZ2luLm1ldGhvZCB8fCBcImdldFwiLCB0aGlzLnNldHVwLmxvZ2luLnVybCwgIXRoaXMuc2V0dXAubG9naW4uc3luYyk7XHJcblx0cmV0dXJuIHhodHRwLnNlbmQoKTtcclxufTtcclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2V4dHJhY3RUb2tlbiA9IGZ1bmN0aW9uKGFSZXNwb25zZSl7XHJcblx0dGhpcy5qd3QgPSBuZXcgSnNvbldlYlRva2VuKGFSZXNwb25zZVt0aGlzLnNldHVwLmxvZ2luLnJlc3BvbnNlLnZhbHVlU2VsZWN0b3JdKTtcclxuXHRcclxuXHRpZih0aGlzLnNldHVwLnJlZnJlc2hJbnRlcnZhbCAhPT0gXCJhbHdheXNcIil7XHJcblx0XHRsZXQgaW50ZXJ2YWxsID0gdGhpcy5zZXR1cC5yZWZyZXNoLmludGVydmFsIHx8IEpXVEludGVyY2VwdG9yLkRFRkFVTFQuTUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUU7XHJcblx0XHRpZih0eXBlb2YgdGhpcy5qd3QuaGVhZGVyLmlhdCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdGhpcy5qd3QuaGVhZGVyLmV4cCA9PT0gXCJudW1iZXJcIil7XHJcblx0XHRcdGxldCBkaWZmID0gdGhpcy5qd3QuaGVhZGVyLmV4cCAtIHRoaXMuand0LmhlYWRlci5pYXQ7XHRcdFx0XHJcblx0XHRcdGludGVydmFsbCA9IGRpZmYgPiAwID8gZGlmZiA6IHRoaXMuand0LmhlYWRlci5leHA7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKHR5cGVvZiB0aGlzLmp3dC5oZWFkZXIuZXhwID09PSBcIm51bWJlclwiKXtcclxuXHRcdFx0bGV0IGRpZmYgPSB0aGlzLmp3dC5oZWFkZXIuZXhwIC0gRGF0ZS5ub3coKTtcclxuXHRcdFx0aW50ZXJ2YWxsID0gZGlmZiA+IDAgPyBkaWZmIDogdGhpcy5qd3QuaGVhZGVyLmV4cDtcclxuXHRcdH1cdFx0XHJcblx0XHRcclxuXHRcdGludGVydmFsbCA9IGludGVydmFsbCA+IEpXVEludGVyY2VwdG9yLkRFRkFVTFQuTUlOX1JFRlJFU0hfSU5URVJWQUxMX1RJTUUgPyBpbnRlcnZhbGwgOiBKV1RJbnRlcmNlcHRvci5ERUZBVUxULk1JTl9SRUZSRVNIX0lOVEVSVkFMTF9USU1FO1xyXG5cdFx0XHJcblx0XHRzZXRUaW1lb3V0KEpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5fX2xvYWRUb2tlbi5iaW5kKHRoaXMpLCBpbnRlcnZhbGwpO1x0XHRcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHRoaXMuand0O1xyXG59O1xyXG5cclxuSldUSW50ZXJjZXB0b3IucHJvdG90eXBlLmFwcGVuZEp3dCA9IGZ1bmN0aW9uKGFSZXF1ZXN0LCBhQ2FsbGJhY2ssIGFKV1Qpe1xyXG5cdGFSZXF1ZXN0LmhlYWRlcnMgPSBhUmVxdWVzdC5oZWFkZXIgfHwge307XHJcblx0YVJlcXVlc3QuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIkJlYXJlciBcIiArIGFKV1QucmF3VG9rZW47XHRcclxuXHRyZXR1cm4gdHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gYUNhbGxiYWNrKCkgOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbkpXVEludGVyY2VwdG9yLnByb3RvdHlwZS5hcHBlbmRKd3RYSFIgPSBmdW5jdGlvbihhUmVxdWVzdCwgYUNhbGxiYWNrLCBhSldUKXtcclxuXHRhUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiICwgXCJCZWFyZXIgXCIgKyBhSldULnJhd1Rva2VuKTtcclxuXHRyZXR1cm4gdHlwZW9mIGFDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gYUNhbGxiYWNrKCkgOiB1bmRlZmluZWQ7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEpXVEludGVyY2VwdG9yO1xyXG4iLCJjb25zdCBKc29uV2ViVG9rZW4gPSBmdW5jdGlvbihhVG9rZW4pe1xyXG5cdHRoaXMucmF3VG9rZW4gPSBhVG9rZW47XHJcblx0XHJcblx0bGV0IGZyYWdtZW50cyA9IGFUb2tlbi5zcGxpdChcIi5cIik7XHJcblx0aWYoZnJhZ21lbnRzLmxlbmd0aCAhPSAzKVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdmFsaWQganNvbiB3ZWIgdG9rZW4hIC0gXFxcIlwiK2FUb2tlbiArIFwiXFxcIlwiKTtcclxuXHRcclxuXHR0aGlzLmhlYWRlciA9IEpTT04ucGFyc2UoYXRvYihmcmFnbWVudHNbMF0pKTtcclxuXHR0aGlzLmJvZHkgPSBKU09OLnBhcnNlKGF0b2IoZnJhZ21lbnRzWzFdKSk7XHJcblx0dGhpcy5zaWduYXR1cmUgPSBmcmFnbWVudHNbMl07XHJcblx0XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKc29uV2ViVG9rZW47ICIsImltcG9ydCBKc29uV2ViVG9rZW4gZnJvbSBcIi4vSnNvbldlYlRva2VuXCI7XHJcbmltcG9ydCBKV1RJbnRlcmNlcHRvciBmcm9tIFwiLi9KV1RJbnRlcmNlcHRvclwiO1xyXG5cclxuXHJcbmNvbnN0IERhdGEgPSB7XHJcblx0SnNvbldlYlRva2VuIDogSnNvbldlYlRva2VuLFxyXG5cdEpXVEludGVyY2VwdG9yIDogSldUSW50ZXJjZXB0b3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==