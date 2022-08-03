const connectDB = require('../config/database')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Note = require('../models/Note')
const { hashPassword } = require('./helpers')

const seedUsers = async () =>{
    
    try {
        // remove all existing users
        await User.deleteMany({})

        const newUser = new User({
            username: "bobtest1",
            name: "Bob Test",
            password: hashPassword("helloworld")
        })

        const savedUser = await newUser.save()
        console.log("Added user", savedUser)
    }
    catch(err){
        if (err){
            console.log(err)
        }
    }
} 
