// imports
var express = require("express");
var config = require("../config/app");
var jwt = require('jsonwebtoken');

/**
 * authentication middleware that controls the JWT Token
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 * @param {function} next 
 */
function authMiddleware(req, res, next) {
  var token = req.cookies.access_token;
  // if token
  if (token) {
    jwt.verify(token, config.token.secret, (err, decoded) => {
      // if token not verified
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Failed to authenticate token."
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.token = decoded;
        next();
      }
    });
  }
  // else
  else {
    res.status(403).json({
      error: "no token provided"
    });
  }

}

module.exports = authMiddleware;
