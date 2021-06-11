var http = require("http");
var fs = require("fs");
var util = require('util')

var stock = {
"Apple":15,
"Orange":20,
"Grapes":15
};
http.createServer(function(req,res){


    console.log("server started");

    
    console.log('Request received: ');
    req.on('data', function (chunk) {
        console.log('GOT DATA!');
    });
    
    return res.end('callback(\'{\"msg\": \"OK\"}\')');
    
  
}).listen(8080);