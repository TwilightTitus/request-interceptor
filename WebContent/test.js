document.querySelector("#send-xhr-request").addEventListener("click", function() {
	console.log("send-xhr-request");
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			console.log("xhr request ready!", this);
	};
	xhttp.open("GET", "http://localhost:8080/api/auth/login", true);
	xhttp.send();
});

document.querySelector("#send-fetch-request").addEventListener("click", function() {
	console.log("send-fetch-request");
	fetch("http://localhost:8080/api/auth/login", {
		headers : {
			'Content-Type' : 'application/json'
		}
	}).then(function(aResponse) {
		console.log("fetch request ready!", arguments);
	})["catch"](console.error);
});

RequestInterceptManager.addInterceptor(new de.titus.request.interceptor.interceptors.OAuthInterceptor({
    	condition: [ "http://localhost:8080", "http://localhost:8081", "http://localhost:8082" ],
        login : {
            url : "http://localhost/jwt.json",
            method : "GET",
            response : {
                type : "authentication-header",
                headerType : "Bearer",
                valueType : "content",
                valueSelector : "jwt"
            }
        },
        refreshInterval : 10 * 60 * 1000
    })
);
