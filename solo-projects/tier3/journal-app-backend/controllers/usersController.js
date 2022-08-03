const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    getAllUsers: async(req, res, next)=>{
        try {
            const users = await User.find({}).populate('notes', { title: 1, createdAt: 1})
            res.json({users})
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    getSingleUser: async(req, res, next)=>{
        try {
            const singleUser = await User.findById(req.params.id).populate('notes', { title: 1, createdAt: 1 })
            res.json({singleUser})
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    createUser: async(req, res, next)=>{
        try{
            // get the user fields from the body 
            const { username, name, password } = req.body
            
            if (!username || !password){
                const error = {
                    message: "Missing username or password",
                    status: 400
                }
                next(error)
            }

            // generate password hash 
            const saltRounds = 10
            const passwordHash = await bcrypt.hash(password, saltRounds)


            const newUser = new User({
                username,
                name,
                passwordHash
            })

            const savedUser = await newUser.save()

            res.json({
                message: 'new user created',
                user: savedUser
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    updateUser: async(req, res, next) =>{
        try{

            const { username, name, password } = req.body
            
            const saltRounds = 10
            const passwordHash = await bcrypt.hash(password, saltRounds)


            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                username,
                name,
                passwordHash
            }, {new: true})

            

            res.json({
                message: 'user updated',
                user: updatedUser
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    deleteUser: async(req, res, next) =>{
        try{
            
            const deletedUser = await User.findByIdAndRemove(req.params.id, {new: true})
            if (!deletedUser) {
                const error = {
                    status: 400,
                    message: "Error deleting user"
                }
                next(error)
            }
            res.json({
                message: 'deleted user',
                user: deletedUser
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    }
}