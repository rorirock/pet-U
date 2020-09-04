const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/pet-u'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/pet-u/index.html'));
});