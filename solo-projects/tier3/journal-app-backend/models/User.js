const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: "user"
    },
    passwordHash: {
        type: String,

    },
    notes: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'notes'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject.__v
        delete returnedObject._id
        delete returnedObject.passwordHash
        
    }
})

module.exports = mongoose.model('users', userSchema)