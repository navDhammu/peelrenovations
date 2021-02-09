const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

const port = process.env.PORT || 8080;

app.listen(port);