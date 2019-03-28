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
		
		return InterceptManager.doIntercept(data, request, ORGFETCH.bind(this, aUrl, request));
	};
}