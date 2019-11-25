const INTERCEPTORS = [];
const CACHE = {};

const getChain = function(aData, aRequest){
	return new Promise(function(){
		let chain = CACHE[aData.server];
		if(typeof chain !== "undefined")
			return Promise.resolve(chain);
		
		chain = [];
		INTERCEPTORS.forEach(function(aInterceptor){
			chain.push(
				Promise.resolve(aInterceptor.doAccept(aData))
				.then(function(value){
					console.log(value);
					if(value)
						return aInterceptor;
				})
			);
		});
		
		return Promise.all(chain)
		.then(function(chain){
			chain = chain.filter(function(interceptor){
				return typeof interceptor !== "undefined";
			});
			
			return chain;
		})			
		.then(function(chain){
			CACHE[aData.server] = chain;
			return chain;
		});
	});
};

const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest){		
		return getChain(aData, aRequest)
		.then(function(chain){
			let handles = [];
			chain.forEach(function(aInterceptor){
				handles.push(aInterceptor.doHandle(aData, aRequest));
			});
			
			return Promise.all(handles);
		});				
	},
	addInterceptor : function(aInterceptor){		
		if(arguments.length != 1 && typeof aInterceptor !== "object")
			throw new Error("function required an interceptor");
		if(typeof aInterceptor.doAccept !== "function")
			throw new Error("The interceptor required a \"doAccept\" function!");
		if(typeof aInterceptor.doHandle !== "function")
			throw new Error("The interceptor required a \"doHandle\" function!");
		
		INTERCEPTORS.push(aInterceptor);
		return Manager;
	}
};
export default Manager; 


