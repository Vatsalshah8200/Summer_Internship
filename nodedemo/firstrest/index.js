let express = require('express');
let apiRoutes = require("./routes");
let bodyParser = require('body-parser');
let mongoose = require('mongoose'); 

let app = express();

var port = process.env.port || 8080;

app.get('/',(req,res)=>

res.send('welcome to express'));  
app.listen(port,function(){
    console.log("Runnning firstrest on port "+ port);
})

app.use('/api',apiRoutes);
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());



const dbpath = 'mongodb://localhost/firstrest';
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const mongo = mongoose.connect(dbpath,options);

mongo.then(()=>{
    console.log('connected to database');
},error => {
    console.log(error, 'error');
})