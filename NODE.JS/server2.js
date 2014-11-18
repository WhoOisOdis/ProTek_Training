var http = require("http");

function onRequest(request, response) {
	console.log("THIS RECEIVED A REQUEST");
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("Hello Worlds!!!!!");
	response.end();
}
//I use console.log to output a text whenever the onRequest function (our callback) is triggered,
// and another text right after starting the HTTP server.
http.createServer(onRequest).listen(8888);
console.log("Server has been started");


// NOTE: INSTEAD OF CONCURRENT (computations executing during overlapping time periods) COMPUTING THERE IS SEQUENTIAL (ONE COMPLETING BEFORE THE NEXT STARTS)