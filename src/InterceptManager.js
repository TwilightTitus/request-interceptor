const Manager = {	
	
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
export default Manager; 


