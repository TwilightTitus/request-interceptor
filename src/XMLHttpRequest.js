import Manager from "./Manager";
import Constants from "./Constants";

(function(Global){
	if(typeof Global.XMLHttpRequest === "undefined")
		return;
	
	const ORGXHR = Global.XMLHttpRequest.prototype;
	const executeRequest = function(aData){
		ORGXHR.open.call(this, aData.request.method, aData.url, aData.metadata.async, aData.metadata.username, aData.metadata.password);
		Object.getOwnProperyNames(aData.request.headers).forEach((function(aHeader){
			ORGXHR.setRequestHeader.call(this, aHeader, aData.request.headers[aHeader]);
		}).bind(this));
		ORGXHR.send.call(aData.request.body);
	}
	
	Global.XMLHttpRequest.prototype.constructor = function (){
		let data = undefined; 
		
		this.setRequestHeader = function(aName, aValue){
			if(typeof data.request.headers === "undefined")
				data.request.headers = {};
			
			data.request.headers[aName] = aValue;
		};
		
		this.open = function(aMethod, aUrl, isAsync, aUsername, aPassword){		
			let match = Constants.URLSPLITTER.exec(aUrl);
			data = {
				url : aUrl,
				request : {
					method : aMethod
				},
				metadata : {
					method : aMethod,
					origin: match[1] || document.location.origin,
					protocol : (function(match){
						if(typeof match[2] === "undefined" || match[3] == "//")
							return document.location.protocol || "http:";
						else return match[3];			
					}).call(null, match),
					hostname: match[4] || document.location.hostname,
					port: match[6],
					query: match[7],
					async : typeof isAsync === "boolean" ? isAsync : true,
					username : aUsername,
					password : aPassword
				}
			};
		};
		
		this.send = function(aBody){
			if(data.metadata.async){
				data.request.body = aBody; 
	    		Manager.doIntercept(data)
	    		.then(executeRequest.bind(this))
	    		["catch"](console.error);
		    }
			else
				executeRequest.call(this, data);
		};
	};
})(window || global || self, this, {});