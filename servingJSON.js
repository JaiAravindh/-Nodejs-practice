//using node.js for serving JSON Data

var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

	res.writeHead(200, {'Content-Type':'application/json'});
	var jsonObj = {
		name : 'tyler',
		surname : 'durdem',
		age: 26,
	};
res.end(JSON.stringify(jsonObj))
}).listen(3000)

console.log("server is running on http://127.0.0.1:3000");
