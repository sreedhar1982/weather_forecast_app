var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Client/dist/')));

app.use('/', express.static(path.join(__dirname, '../Client/dist/')));
var port = 8080;
app.listen(port, function(){
  console.log("Server started at port :"+port);
});
