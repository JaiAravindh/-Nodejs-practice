//using streams on node js
//if you want to read a large data we'll need to read it in chunks
//streams allows us to do the same


var fs = require('fs');

//lipsum.txt contains 5 paragraphs and 322 characters.
//'createReadStream' inherits form eventEmitter
var readStream = fs.createReadStream('lipsum.txt',utf8 );

readStream.on('data', function(chunk){
	console.log('-----------------------');
	console.log(chunk);
			
})


