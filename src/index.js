import "./XMLHttpRequest";
import "./Fetch";
import Manager from "./Manager";
import Interceptors from "./interceptors";


(function(Global){	
	Global.de = Global.de || {};
	Global.de.titus = Global.de.titus || {};
	Global.de.titus.request = Global.de.titus.request || {};
	Global.de.titus.request.interceptor = {
		VERSION : "${version}",
		Manager : Manager,
		interceptors : Interceptors
	};
	
	Global.RequestInterceptManager = Manager;
})(window|| global || {});