//using streams on node js

//using the same readStream code...
var fs = require('fs');

var readStream = fs.createReadStream('lipsum.txt');
var data = '';

// step 1 - add the writefile 
var writeStream = fs.createWriteStream('write_file.txt');

readStream.on('data',function(chunk){
	      console.log('-----------------')
	      //step 2 - write the chunks			
	      writeStream.write(chunk);
	      })

readStream.on('end', function(chunk){
	      console.log(data)
	      console.log('--------------end---------');
})	
