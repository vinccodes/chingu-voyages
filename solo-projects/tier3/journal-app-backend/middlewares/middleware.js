const { request } = require("express")

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
    }

}