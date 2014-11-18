var http = require("http"); // This first line requires the http module that ships with Node.js, were making it accessible via the variable http

http.createServer(function(request, response) { // THE REASON THIS FUNCTION IS PASSED AS A PARAMETER IS BECAUSE IT'LL NOW MAKE IT ASYNCHRONOUS (can be called back later)
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World!!!!");
	response.end();
}).listen(8888);

// THE CODE ABOVE IS THE SAME AS THE CODE BELOW

var http = require("http");

function onRequest(request, response) {
	console.log("THIS RECEIVED A REQUEST");
	response.writeHead(200, {
		"Content-Type": "text/plain"
	});
	response.write("Hello WorldS!");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has been started");







// createServer is a function that the HTTP MODULE offers.
// createServer returns an object and the object has a method named listen << which takes a numeric value to indicate the port # our http server will listen on. 

// LINKS BELOW
// ---------------------------------
// http://www.nodebeginner.org/
// http://stackoverflow.com/questions/1884724/what-is-node-js
// http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb
// http://en.wikipedia.org/wiki/Callback_(computer_programming)

// LINKS FOR LEARNING BASH SHELL
// ------------------------
// http://linuxcommand.org/learning_the_shell.php