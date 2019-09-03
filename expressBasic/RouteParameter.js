var express = require('express');

var app = express();

//GET
//POST
//PUT
//DELETE

app.get('/',function(req,res){
	res.send('this is home page');
});

app.get('/about',function(req,res){
	res.send('this is about page');
});

app.get('/content',function(req,res){
	res.send('this is content page');
});

var students = {
	1: 'Mark',
	2: 'TOm',
	3: 'john',
}


app.get('/students/:id',function(req,res){
	rep.send('you have requested to see the student id:' +req.params.id);
})

app.get('/students/:id',function(req,res){
	rep.send('you have requested to see the student name:' + students[req.params.id]);
})



app.listen(3000,function(){
	console.log('out server is live on port 3000');
});
