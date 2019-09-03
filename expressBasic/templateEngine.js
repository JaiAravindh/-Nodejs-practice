var express = require('express');

var app = express();

app.set('view engine' , 'ejs');

app.get('/',function(req, res){
	rep.sendFile('__dirname' + '/index.html');
});

app.get('/about', function(req,res){
	rep.sendFile('__dirname' + '/about.html');
})

var students ={

	1: 'Mark',
	2: 'Tom',
	3: 'john',
}

app.get('/students/:id',function(req,res){
	rep.render('students', { name : students[req.params.id], id : req.params.id});
	
})

app.listen(3000, function(){
	console.log('our server is live on port 3000');
});
