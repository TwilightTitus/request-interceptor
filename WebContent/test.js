document.querySelector("#send-xhr-request").addEventListener("click", function() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			console.log("xhr request ready!", this);
	};
	xhttp.open("GET", "http://localhost:8080/api/auth/login", true);
	xhttp.send();
});

document.querySelector("#send-fetch-request").addEventListener("click", function() {
	fetch("http://localhost:8080/api/auth/login", {
		headers : {
			'Content-Type' : 'application/json'
		}
	}).then(function(aResponse) {
		console.log("fetch request ready!", arguments);
	});
});

RequestInterceptManager.addInterceptor(new de.titus.request.interceptor.interceptors.JWTInterceptor({
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
        refresh : {
            type : "login",
            interval : "always",
        }
    })
);
