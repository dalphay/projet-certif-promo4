const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var http = require('http');
var https = require('https');

//
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// import router in indexjs

const router = require('./router');
app.use('/', router)



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(process.env.NODE_ENV)

})