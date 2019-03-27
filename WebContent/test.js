document.querySelector("#send-xhr-request").addEventListener("click", function() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4)
			console.log("request finished!");
	};
	xhttp.open("GET", "http://localhost:8080/index.html", true);
	xhttp.send();

});

document.querySelector("#send-fetch-request").addEventListener("click", function() {

	fetch("http://localhost:8080/index.html", {
	    headers : {
		    'Content-Type' : 'application/json'
	    }
	});
});
