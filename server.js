const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.get('/images', (req,res)=>{
    fs.readdir('./public/images/fetch-gallery', (err,files) => res.send(files));
});

const port = process.env.PORT || 8080;

app.listen(port);
