var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

res.writeHead(200, {'Content-Type' : 'text/plain'});

//creating a readeable stream
var readSream = fs.createReadStream('file.txt');

//using pipe we are sending stream to response 
readStream.pipe(res);

res.end('Hello world');
}).listen(3000);

console.log("server is running on http://127.0.0.1:3000")
