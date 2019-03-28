// Load all polyfills
import "./XMLHttpRequest";
import "./Fetch";

import InterceptManager from "./InterceptManager";
import JWTInterceptor from "./interceptors/JWTInterceptor";


(function(Global){	
	Global.de = Global.de || {};
	Global.de.titus = Global.de.titus || {};
	Global.de.titus.request = Global.de.titus.request || {};
	Global.de.titus.request.interceptor = {
		InterceptManager : InterceptManager,
		JWTInterceptor : JWTInterceptor
	};
	
	
})(window|| global || {});