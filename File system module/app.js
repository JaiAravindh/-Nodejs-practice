var fs = require('fs');

var read_string = fs.readFile('test.txt', 'utf8', function(err, data){
  if (err)
    return console.error(err);
  else
    return console.log(data);
});

console.log('the file is read');

fs.writeFile('test2.txt', read_string, function(err, data){
  if (err)
    return console.error(err);
  else
    return console.log(data);
});

