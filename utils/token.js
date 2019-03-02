var config = require('../config/app')
var jwt  = require('jsonwebtoken')

/**
 * Generate a JWT access token for authentication
 * @param {Object} payload 
 * @param {Date} expiresIn 
 */
function generateToken(payload) {
    let { secret, expiresIn }  = config.token;
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
}

module.exports = {
    generateToken
}