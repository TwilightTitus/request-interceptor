const InterceptManager = window.InterceptManager = {	
	
	urlHandleMap: {},	
	doIntercept : function(aData, aRequest, aCallback){
		console.log("doIntercept (", arguments, ")");
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
		if(typeof this.urlHandleMap[aUrl] !== "undefined")
			throw new Error("A Handle for URL \"" + aUrl + "\" is defined!");			
		this.urlHandleMap[aUrl] = aInterceptor;		
	},
	removeInterceptor : function(aUrl){
		delete this.urlHandleMap[aUrl];
	}
};
export default InterceptManager; 


