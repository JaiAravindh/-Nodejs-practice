var fs = require('fs');

//this method will allow to read our files synchronous
var read_string = fs.readFileSync('test.txt', 'utf8');

console.log(read_string);

//write file synchronous
fs.writeFileSync('test2.txt', read_string);

