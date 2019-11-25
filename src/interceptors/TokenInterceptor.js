const TokenInterceptor = function(aSetup){
	const setup = aSetup; 
	const token = undefined;
	setInterval(function(){
		new Promise(setup.fetchToken)
		.then(function(aToken){
			token = aToken;
		});	
	}, setup.refreshInterval || (60 * 1000));
	
	
	return {
		doAccept : setup.doAccept || function(aData){
			return new Promise(function(resolve){
				let type = typeof setup.condition; 
				if(type === "function")
					resolve(setup.condition(aData));
				else if(type === "string")
					resolve(setup.condition == aData.server);
				else if(setup.condition instanceof Array){
					for(let i = 0; i < setup.condition.length; i++)
						if(setup.condition[i] == aData.server)
							resolve(true);
				}	
				resolve(false);
			});	
		},
		doHandle : function(aData, aRequest){
			let isXMLHttpRequest = aRequest instanceof XMLHttpRequest;	
			let appendFunction = isXMLHttpRequest ? setup.appendJwtOnXhr : setup.appendJwtOnFetch;
				
			if(typeof token !== "undefined")
				return appendFunction(aRequest, token);
			else
				return new Promise(setup.fetchToken)
				.then(function(aToken){
					token = aToken;
					appendFunction(aRequest, token)
				});
		}		
	};
};
export default TokenInterceptor;
