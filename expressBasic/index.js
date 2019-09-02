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
app.listen(3000,function(){
	console.log('out server is live on port 3000');
});
