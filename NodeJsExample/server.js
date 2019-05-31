/**
 * This is the Node JS Server File. 
 */

var http = require("http");
var server = http.createServer(function(request, response){
	response.writeHead(200,{"content-type":"text/html"});
	
	response.end("Hello world");
	console.log("Hello world!!!!!");
	}).listen(8888);

