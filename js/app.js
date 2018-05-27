var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app            =         express();
// var mongodb = require('mongodb');

// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//root route
app.get('/',function(req,res){
    res.sendfile("index.html");
});


app.post('/', function (req, res) {
    var Step_number = req.body.stepNumber;
    var step_instruction = req.body.stepWidth;
    console.log(JSON.stringify(req.body));
    console.log('req.body.name', req.body['name']);
});

app.listen(4000, () => console.log('stitch-kitten server is listening on port 4000!'));

//add database and connect
//connect form
//if made step x dont allow to make another step x





    
