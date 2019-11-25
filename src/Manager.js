const INTERCEPTORS = [];
const CACHE = {};

const getChain = function(aData, aRequest){
	return new Promise(function(resolve){
		let chain = CACHE[aData.server];
		if(typeof chain !== "undefined")
			return Promise.resolve(chain);
		
		chain = [];
		INTERCEPTORS.forEach(function(aInterceptor){
			Promise.resolve(aInterceptor.doAccept(aData))
			.then(function(value){
				if(value)
					chain.push(aInterceptor);
			});
		});
		
		Promise.all(chain)
		.then(function(chain){
			chain = chain.filter(function(interceptor){
				return typeof interceptor !== "undefined";
			});
			
			CACHE[aData.server] = chain;
			resolve(chain);
		})["catch"](console.error);
	});
};

const Manager = {	
	interceptors : [],
	doIntercept : function(aData, aRequest){
		debugger;
		let chain =  Promise.resolve(getChain(aData, aRequest));
		
		chain.then(function(chain){
			let handles = [];
			chain.forEach(function(aInterceptor){
				handles.push(aInterceptor.doHandle(aData, aRequest));
			});
			
			return Promise.all(handles);
		})["catch"](console.error);
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


