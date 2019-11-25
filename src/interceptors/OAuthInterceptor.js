import TokenInterceptor from "./TokenInterceptor"


const appendJwtOnFetch = function(aRequest, aToken){
	return new Promise(function(){
		aRequest.headers = aRequest.header || {};
		aRequest.headers["Authorization"] = "Bearer " + aToken;
	});	
};

const appendJwtOnXhr = function(aRequest, aJWT){
	return new Promise(function(){
		aRequest.setRequestHeader("Authorization" , "Bearer " + aToken);
	});
};

const OAuthInterceptor = function(aSetup){
	let setup = aSetup;
	setup.fetchToken = function(){
		return fetch(setup.login.url, {
			method: setup.login.method || "get"
		})
		.then(function(aResponse){return aResponse.json();})
		.then(function(aResponse){return aResponse[setup.login.response.valueSelector];
		});
	};
	setup.appendJwtOnFetch = appendJwtOnFetch;
	setup.appendJwtOnXhr = appendJwtOnXhr;
	return TokenInterceptor(aSetup);
};

export default OAuthInterceptor;
