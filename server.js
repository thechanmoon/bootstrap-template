const express = require('express');
const app = express();

app.listen(8088, function(){
    console.log('listening on 8080');
});

app.get('/pet',function(req,res){
    res.send("Welcom pet !!");
});

app.get('/beauty',function(req,res){
    res.send("Welcom beauty !!");
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
});

// npm install express
// npm install -g nodemon
// nodemon server.js