const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
var fs = require("fs");
var util = require('util');


var stock = {
"Apple":15,
"Orange":20,
"Grapes":15
};
const app= express();
var server = app.listen(8080,()=>{
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://localhost:' + port);
}) 
// app.set('view engine','html')
app.use(bodyParser.urlencoded({extended:false}));

 app.use(express.static("assets"));
app.get("/",function(req,res){
    // app.use(express.static(__dirname + '/q3front'));
     res.sendFile(path.join(__dirname,"/q3front.html"));
     
});
app.post("/ajaxdemo",function(req,res){
    var data = req.body;
    console.log(data);
});