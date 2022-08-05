const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config'})

module.exports = {
    // get the token from the authorization header and set the token to request.token
    tokenExtractor: (req, res, next) =>{
        const token = req.get('authorization')
        // check if the token exists uses bearer scheme
        if (token && token.toLowerCase().startsWith('bearer ')) {
            req.token = token.substring(7) 
        }
        else {
            req.token = null 
        }
        next()
    },
    userExtractor: (req, res, next) =>{
        // verify the jwt token from the req.token 
        const tokenPayload = jwt.verify(req.token, process.env.JWT_SECRET)
        // set req.user 
        req.user = tokenPayload
        next()
    }

}