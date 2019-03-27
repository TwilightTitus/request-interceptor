import InterceptManager from "./InterceptManager";
import Constants from "./Constants";

if(typeof fetch === "function"){	
	const ORGFETCH = fetch;
	fetch = function(aUrl, aRequest){
		console.log("arguments:", arguments);
		let request = aRequest || {};
		let match = Constants.URLSPLITTER.exec(aUrl);
		let data = {
			method : request.method || "GET",
			url : aUrl,
			protocol : (function(match){
				if(typeof match[1] === "undefined" || match[1] == "//")
					return document.location.protocol || "http:";
				else return match[2];			
			}).call(null, match),
			hostname: match[4] || document.location.hostname,
			port: match[5],
			query: match[6],
			async : true
		};
		
		return InterceptManager.doIntercept(data, request, ORGFETCH.bind(this, aUrl, request));
	};
}