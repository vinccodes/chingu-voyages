const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config/.env'})


module.exports = {
    login: async(req, res, next) =>{
        try {
            // get the username, password from the body
            const { username, password } = req.body

            // check if username or password is missing
            if (!username || !password ) {
                const error = {
                    status: 400,
                    message: "Missing username or password"
                }
                next(error)
            }

            // find the user
            const foundUser = await User.findOne({ username })

            // compare passwordHash
            const correctPassword = await bcrypt.compare(password, foundUser.passwordHash)

            if (!correctPassword){
                const error = {
                    status: 400,
                    message: "Invalid credentials"
                }
                next(error)
            }

            // generate the token
            const token = jwt.sign({
                username: foundUser.username,
                id: foundUser._id
            }, process.env.JWT_SECRET,
            { expiresIn: '1h'})

            res.json({
                token,
                username: foundUser.username,
                
            })

        }
        catch(err){
            if (err) {
                console.log(err)
            }
        }
    }
}