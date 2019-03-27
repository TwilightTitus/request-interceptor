import InterceptManager from "./InterceptManager";
import Constants from "./Constants";

if(typeof XMLHttpRequest !== "undefined"){	
	const ORGOPEN = XMLHttpRequest.prototype.open;
	const ORGSEND = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.open = function(){
		
		let match = Constants.URLSPLITTER.exec(arguments[1]);
		this.__interceptorRequestData = {
			method : arguments[0],
			url : arguments[1],
			protocol : (function(match){
				if(typeof match[1] === "undefined" || match[1] == "//")
					return document.location.protocol || "http:";
				else return match[2];			
			}).call(null, match),
			hostname: match[4] ||document.location.hostname,
			port: match[5],
			query: match[6],
			async : typeof arguments[2] === "boolean" ? arguments[2] : true
		};
		ORGOPEN.apply(this, arguments);	
	};
	
	 XMLHttpRequest.prototype.send = function(){		 
		return InterceptManager.doIntercept(this.__interceptorRequestData, this, ORGSEND.bind(this, arguments));
	};
}