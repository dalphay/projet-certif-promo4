// imports
var jwt = require("jsonwebtoken");
var models = require("../models");
var bcrypt = require('bcrypt');
var generateToken = require('../utils/token').generateToken
var config = require("../config/app");


/**
 * Controller responsible of the authentication
 */
class AuthController {

  /**
   * log the user out
   * @param {IncomingMessage} req 
   * @param {ServerResponse} res 
   */
  static logout(req, res) {
    // simply remove cookie
    res.cookie(
      'access_token',
      '',
      {
        expires: new Date(0) // date in the past
      }
    )
    res.status(204).send()
  }

  /**
   *  log the user in
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  static login(req, res) {
    
    // input
    const email = req.body.email
    const password = req.body.password

    // validation

    // find user with email
    models.User.findOne({ where: {
      email: email
    }})
      .then((user) => {
        // if user found
        if (user) {
          const isPasswordCorrect = bcrypt.compareSync(password, user.password) // compare password and hased password
          // if password ok
          if(isPasswordCorrect) {
            
            // generate token
            const token = generateToken({
              userId: user.id,
              isAdmin: user.isAdmin
            });
            
            // set cookie with token
            res.cookie("access_token", token, {
              httpOnly: false, // if true, the cookie won't be accessible from the JS code (prevent XSS)
              sameSite: false, // partially prevent CSRF 
              secure: false, // force the cookie to be delivered over HTTPS
              expires: new Date(Date.now() + config.token.expiresIn * 1000) // expiry date
            }); 

            // return sucess
            res.status(200).json({
              userId: user.id
            })
          }
          // else
          else {
            // return wrong password
            res.status(403).json({
              'error' : 'password incorrect'
            })
          }
        }
        // else
        else {
          // return user not found
            res.status(404).json({
              'error' : 'User not found'
            })
        }
      })
      .catch((error) => {
        console.error(error)
        res.status(500).json({
          'error': 'unable to verify user'
        })
    })
  }

  /**
   *  register a user
   * @param {IncomingMessage} req
   * @param {ServerResponse} res
   */
  static register(req, res) {

    // input
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    // hash the password (with a factor 12)
    var hashedPassword = bcrypt.hashSync(password, 12);

    // verify if the user already exists
    models.User.findOne({
      where: {
        email: email
      }
    })
      .then(userFound => {
        // if user already exists
        if (userFound) {
          res.status(409).json({ error: "user already exists" });
        }
        // otherwise create the new user
        else {
          models.User.create({
            email,
            name,
            password: hashedPassword,
          })
          // if the user is successfully created
          .then((newUser) => {
            res.status(201).json({ user_id: newUser.id })
          })
          // if there was an error creating the user
          .catch((error) => {
            res.status(500).json({ error: 'cannot add user' })
          })
        }
      })
      // if there was an error trying to find the user
      .catch(error => {
        res.status(500).json({ error: "cannot verify user" });
      });

  }
}

module.exports = AuthController;
