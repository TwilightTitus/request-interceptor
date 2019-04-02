import Manager from "./Manager";
import Constants from "./Constants";

(function(Global){
	if(typeof Global.fetch === "function"){	
		const ORGFETCH = Global.fetch;
		Global.fetch = function(aUrl, aRequest){
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
			
			return new Promise(Manager.doIntercept.bind(Manager, data, request, ORGFETCH.bind(this, aUrl, request)));
		};
	};
})(window || global || {});