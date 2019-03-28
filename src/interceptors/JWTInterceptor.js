const JWTInterceptor = function(aSetup){
	this.setup = aSetup;	
};


JWTInterceptor.prototype.doHandle = function(aData, aRequest, aCallback){	
	if(aRequest instanceof XMLHttpRequest)
		return this.__getJWTByXMLHttpRequest(aData, aRequest, aCallback);
	return this.__getJWTByFetch(aData, aRequest, aCallback);	
};

JWTInterceptor.prototype.__getJWTByFetch = function(aData, aRequest, aCallback){
	return fetch(this.setup.login.url, {
		method: this.setup.login.method || "get"
	}).then((function(aRequest, aCallback, aResponse){
		return aResponse.json().then(JWTInterceptor.prototype.appendJwt.bind(this,aRequest, aCallback));
	}).bind(this, aRequest, aCallback));
};

JWTInterceptor.prototype.__getJWTByXMLHttpRequest = function(aData, aRequest, aCallback){
	let xhttp = new XMLHttpRequest();
	let appendJwt = JWTInterceptor.prototype.appendJwtXHR.bind(this, aRequest, aCallback);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			appendJwt(JSON.parse(this.response));
	};
	xhttp.open(this.setup.login.method || "get", this.setup.login.url, !this.setup.login.sync);
	return xhttp.send();
};
JWTInterceptor.prototype.appendJwt = function(aRequest, aCallback, aJWT){
	console.log("use fetch", arguments);
	aRequest.headers = aRequest.header || {};
	aRequest.headers["Authorization"] = "Bearer " + aJWT[this.setup.login.response.valueSelector];	
	return aCallback();
}

JWTInterceptor.prototype.appendJwtXHR = function(aRequest, aCallback, aJWT){	
	aRequest.setRequestHeader("Authorization" , "Bearer " + aJWT[this.setup.login.response.valueSelector]);
	return aCallback();
};

export default JWTInterceptor;
