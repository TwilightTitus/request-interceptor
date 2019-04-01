# de.titus.request.interceptor

This lib provide an function to intercept requests and change the orginal request in html sites. The main use case is to make sso authentications in enterprise environment with microservices.

The web site from service A with url https://service-a.com want to call an ajax request from service B with url https://service-b.com. The main challenge for the developer is, how to authenticate the user at service B. If you calling only some different services and you know all the services, you solve the problem with custom code to make the authentication to the services.

BUT, if you don't know all the services, because you have an web portal or something else, or you have an high number of services to include, then you can do the authentication with this libs, very easily.
    


# Sample for JWT
```javascript
RequestInterceptManager.addInterceptor("[service-b","service-b", "service-...", new de.titus.request.interceptor.interceptors.JWTInterceptor({
	login : {
		url : "url to get json web token",
		method: "GET", //"POST", ...
		body : "[optional]",
		response : { // how to change the interceped request
			type: "authentication-header",
			headerType: "Bearer",
			valueType : "content",
			valueSelector: "jwt"
		}			
	},	
	refresh : {
		interval: 10000 // default refresh interval time in ms to refresh the token
		//interval: "always" // this tells, that refresh the jwt at every request 
	} 
})); 