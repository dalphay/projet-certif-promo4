const express = require('express')
const app = express()
var cookieParser = require('cookie-parser')
var bodyParser = require("body-parser");
var http = require('http');
var https = require('https');
var fs = require('fs');
// var express = require('express');

// To configure the Express 4.x server for https
var options = {
    key: fs.readFileSync( './certificatHttps/localhost.key' ),
    cert: fs.readFileSync( './certificatHttps/localhost.cert' ),
    requestCert: false,
    rejectUnauthorized: false
};


var port = process.env.PORT || 8443;


//
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// import router in indexjs

const router = require('./router');
app.use('/', router)

var serverHttps = https.createServer( options, app );

serverHttps.listen( port, function () {
    console.log( 'Express server listening on port ' + serverHttps.address().port );
} );


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(process.env.NODE_ENV)

})