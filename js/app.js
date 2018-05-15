var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var app            =         express();

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("index.html");
});


app.post('/', function (req, res) {
    var Step_number = req.body.stepNumber;
    var step_instruction = req.body.stepWidth;
    console.log(JSON.stringify(req.body));
    console.log('req.body.name', req.body['name']);
});

app.listen(process.env.PORT || 63342, process.env.IP || '0.0.0.0' );
