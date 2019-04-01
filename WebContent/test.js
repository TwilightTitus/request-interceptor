document.querySelector("#send-xhr-request").addEventListener("click", function() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			console.log("request finished!");
	};
	xhttp.open("GET", "http://localhost:8080/api/auth/login", true);
	xhttp.send();
});

document.querySelector("#send-fetch-request").addEventListener("click", function() {	
	fetch("http://localhost:8080/api/auth/login", {
		headers : {
			'Content-Type' : 'application/json'
		}
	}).then(function(aResponse){
		console.log("fetch request ready!", arguments);
	});
});

de.titus.request.interceptor.InterceptManager.addInterceptor("http://localhost:8080","http://localhost:8081", "http://localhost:8082", new de.titus.request.interceptor.interceptors.JWTInterceptor({
	login : {
		url : "http://localhost/jwt.json",
		method: "GET",
		response : {
			type: "authentication-header",
			headerType: "Bearer",
			valueType : "content",
			valueSelector: "jwt"
		}			
	},
	refreshInterval: "always",
	useXHR : false
}));
