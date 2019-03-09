// imports
var express = require("express");
// var config = require("../config/app");
var jwt = require('jsonwebtoken');

/**
 * authentication middleware that controls the JWT Token
 * @param {IncomingMessage} req 
 * @param {ServerResponse} res 
 * @param {function} next 
 */
function isAdminMiddleware(req, res, next) {
    const isAdmin = req.token && req.token.isAdmin
    if (!isAdmin) {
        return res.status(403).json({'error': 'you are not admin'})
    }
    next()
}

module.exports = isAdminMiddleware;
