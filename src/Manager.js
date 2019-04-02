const chaining = function(aChain, aData, aRequest, aCallback){
	if(aChain.length == 0)
		return aCallback();
	
	let interceptor = aChain.shift();
	interceptor.doHandle(aData, aRequest, chaining.bind(null, aChain, aData, aRequest, aCallback));
};


const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest, aCallback){
		console.log(arguments);
		let chain = [];
		this.interceptors.forEach((function(aData, aInterceptor){
			if(aInterceptor.doAccept(aData))
				this.push(aInterceptor);
		}).bind(chain, aData));
		
		chaining(chain, aData, aRequest, aCallback);
	},
	addInterceptor : function(aInterceptor){		
		if(!arguments.length != 1 && typeof aInterceptor !== "object")
			throw new Error("function required an interceptor");
		if(typeof aInterceptor.doAccept !== "function")
			throw new Error("The interceptor required a \"doAccept\" function!");
		if(typeof aInterceptor.doHandle !== "function")
			throw new Error("The interceptor required a \"doHandle\" function!");
		
		return this.interceptors.push(aInterceptor);
	}
};
export default Manager; 


