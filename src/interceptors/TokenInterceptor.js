const TokenInterceptor = function(aSetup){
	const setup = aSetup; 
	let token = undefined;
	
	const defaultRefreshToken = function(){
        new Promise(setup.fetchToken)
        .then(function(aToken){
            token = aToken;
        }); 
    };
	
	if(setup.refreshInterval > 0){
	    const refreshToken = defaultRefreshToken
	    if(typeof setup.refreshToken === "function"){
	        refreshToken = function(){
	            Promise.resolve(setup.refreshToken())
	            .then(function(aToken){
	                token = aToken;
	            }); 
	        };
	    }
	    setInterval(refreshToken, setup.refreshInterval || (60 * 1000))
	}
	
	
	return {
		doAccept : setup.doAccept || function(aData){			
			let type = typeof setup.condition; 
			if(type === "function")
				return Promise.resolve(setup.condition(aData));
			else if(type === "string")
				return Promise.resolve(setup.condition == aData.metadata.origin);
			else if(setup.condition instanceof Array){
				for(let i = 0; i < setup.condition.length; i++)
					if(setup.condition[i] == aData.metadata.origin)
						return Promise.resolve(true);
			}	
			return Promise.resolve(false);				
		},
		doHandle : function(aData){				
			if(typeof token !== "undefined")
				return Promise.resolve(appendOn(aData, token));
			else
				return Promise.resolve(setup.fetchToken(aData))
				.then(function(aToken){
					token = aToken;
					if(setup.appendToken instanceof Array){
						let promise = Promise.resolve(aData);
						setup.appendToken.forEach(function(appender){
							promise.then(function(aData){
								return Promise.resolve(appender(aData, token));
							});
						});
						return promise;
					}
					else
						return Promise.resolve(setup.appendToken(aData, token));
				})["catch"](function(error){throw error});
		}		
	};
};

export default TokenInterceptor;
