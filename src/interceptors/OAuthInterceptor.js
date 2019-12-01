import TokenInterceptor from "./TokenInterceptor"


const appendOnFetch = function(aData, aToken){
	aData.request.headers = aData.request.headers || {};
	aData.request.headers["Authorization"] = "Bearer " + aToken;
	return aData;
};

const appendOnXhr = function(aData, aToken){
	aData.request.setRequestHeader("Authorization" , "Bearer " + aToken);
	return aData;
};

const OAuthInterceptor = function(aSetup){
	let setup = aSetup;
	setup.fetchToken = function(){
		return fetch(setup.login.url, {
			method: (setup.login.method || "get")
		}).then(function(aResponse){
			return aResponse.json();
		}).then(function(aResponse){
			return aResponse[setup.login.response.valueSelector];
		})["catch"](function(error){throw error;});		
	};
	setup.appendOnFetch = appendOnFetch;
	setup.appendOnXhr = appendOnXhr;
	return TokenInterceptor(aSetup);
};

export default OAuthInterceptor;
