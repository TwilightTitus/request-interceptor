import Manager from "./Manager";
import Constants from "./Constants";

(function(Global){
	if(typeof Global.XMLHttpRequest === "undefined")
		return;
	
//	const org = Global.XMLHttpRequest;
//	Global.XMLHttpRequest = function (){
//		this.onreadystatechange = undefined;
//	};
//	xhr.prototype.addEventListener = function(aEvent, aFunction){
//	};
//	xhr.prototype.setRequestHeader(aHeader, aValue){
//	};
//	xhr.prototype.open = function(aMethod, aUrl, async, user, password){
//	};
//	xhr.prototype.send = function(){		
//	};
//	xhr.prototype.abort = function(){
//	};
	
	
	
	
	const ORGOPEN = XMLHttpRequest.prototype.open;
	const ORGSEND = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.open = function(){
		let result = ORGOPEN.apply(this, arguments);
		let match = Constants.URLSPLITTER.exec(arguments[1]);
		this.__data = {
				url : arguments[1],
				request : this,
				metadata : {
					method : arguments[0],
					origin: match[1] || document.location.origin,
					protocol : (function(match){
						if(typeof match[2] === "undefined" || match[3] == "//")
							return document.location.protocol || "http:";
						else return match[3];			
					}).call(null, match),
					hostname: match[4] || document.location.hostname,
					port: match[6],
					query: match[7],
					async : typeof arguments[2] === "boolean" ? arguments[2] : true
				},
			__arguments : arguments
		};
		return result;
	};
	
	XMLHttpRequest.prototype.send = function(){        
	    if(this.__data.metadata.async){
	        let send = (function(args){
	            return ORGSEND.apply(this, args);
	        }).bind(this, arguments);
    		Manager.doIntercept(this.__data)
    		.then(function(aData){
    			try{
    				return send();
    			}catch (e) {
    				throw e;
    			}
    		})["catch"](console.error);

            return this;
	    }
	    console.warn(new Error("request interceptor don't support syncronized requests"));
	    return ORGSEND.apply(this, arguments);
	};
})(window || global || self, this, {});