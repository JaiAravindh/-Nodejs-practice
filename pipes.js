var fs = require('fs');
var http = require('http');

http.createServer(function(req,res){

res.writeHead(200, {'Content-Type' : 'html'});

//creating a readeable stream
var readSream = fs.createReadStream('index.html');

//using pipe we are sending stream to response 
readStream.pipe(res);
}).listen(3000);

console.log("server is running on http://127.0.0.1:3000")
