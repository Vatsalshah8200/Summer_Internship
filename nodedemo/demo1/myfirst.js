var http = require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    console.log("server started");

    fs.readFile('../../Weatherappui/index.html',function(err,data){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data);
    return res.end();
    });


    
    
    
}).listen(8080);
