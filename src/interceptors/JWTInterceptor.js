import JsonWebToken from "./JsonWebToken";

const JWTInterceptor = function(aSetup){
	this.setup = aSetup;
	this.setup.refresh = this.setup.refresh || {interval : "always"}; 
	this.jwt;
	this.useFetch = typeof window.fetch === "function";
};

JWTInterceptor.DEFAULT = {
	// min refesh intervall time is 10 minutes
	MIN_REFRESH_INTERVALL_TIME : 10 * 60 * 1000
};

JWTInterceptor.prototype.doHandle = function(aData, aRequest, aCallback){	
	let isXMLHttpRequest = aRequest instanceof XMLHttpRequest;
	let appendJWT = JWTInterceptor.prototype[(isXMLHttpRequest ? "appendJwtXHR" : "appendJwt" )].bind(this, aRequest, aCallback);
	
	if(this.jwt && this.setup.refresh.interval !== "always")
		return appendJWT(this.jwt);
	else
		return this.__loadToken(appendJWT);
};

JWTInterceptor.prototype.__loadToken = function(aCallback){
	if(this.useFetch)
		return this.__loadTokenFetch(aCallback);	
	return this.__loadTokenByXHR(aCallback);
};

JWTInterceptor.prototype.__loadTokenFetch = function(aCallback){
	return fetch(this.setup.login.url, {
		method: this.setup.login.method || "get"
	})
	.then(function(aResponse){return aResponse.json();})
	.then(JWTInterceptor.prototype.__extractToken.bind(this))
	.then(aCallback ? aCallback : function(){});
};

JWTInterceptor.prototype.__loadTokenByXHR = function(aCallback){
	let xhttp = new XMLHttpRequest();
	let extractToken = JWTInterceptor.prototype.__extractToken.bind(this);
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4){
			extractToken(JSON.parse(this.response));
			if(aCallback)
				aCallback(this.jwt);
		}
	};
	xhttp.open(this.setup.login.method || "get", this.setup.login.url, !this.setup.login.sync);
	return xhttp.send();
};

JWTInterceptor.prototype.__extractToken = function(aResponse){
	this.jwt = new JsonWebToken(aResponse[this.setup.login.response.valueSelector]);
	
	if(this.setup.refreshInterval !== "always"){
		let intervall = this.setup.refresh.interval || JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME;
		if(typeof this.jwt.header.iat === "number" && typeof this.jwt.header.exp === "number"){
			let diff = this.jwt.header.exp - this.jwt.header.iat;			
			intervall = diff > 0 ? diff : this.jwt.header.exp;
		}
		else if(typeof this.jwt.header.exp === "number"){
			let diff = this.jwt.header.exp - Date.now();
			intervall = diff > 0 ? diff : this.jwt.header.exp;
		}		
		
		intervall = intervall > JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME ? intervall : JWTInterceptor.DEFAULT.MIN_REFRESH_INTERVALL_TIME;
		
		setTimeout(JWTInterceptor.prototype.__loadToken.bind(this), intervall);		
	}
	
	return this.jwt;
};

JWTInterceptor.prototype.appendJwt = function(aRequest, aCallback, aJWT){
	aRequest.headers = aRequest.header || {};
	aRequest.headers["Authorization"] = "Bearer " + aJWT.rawToken;	
	return typeof aCallback === "function" ? aCallback() : undefined;
}

JWTInterceptor.prototype.appendJwtXHR = function(aRequest, aCallback, aJWT){
	aRequest.setRequestHeader("Authorization" , "Bearer " + aJWT.rawToken);
	return typeof aCallback === "function" ? aCallback() : undefined;
};
export default JWTInterceptor;
