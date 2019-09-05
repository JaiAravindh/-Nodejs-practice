var express = require('express')
var app = express()

app.get('/',function(req,res){
  res.send('Hello World!')
 })
 
 app.listen(3000)
 
 var logger = function(req,res,next){
  console.log('LOGGED')
  next()
}

// app.use()

var express = require('express')
var app = express()

var logger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(logger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
