const Note = require('../models/Note')
const User = require('../models/User')
const { getBearerToken } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
require('dotenv').config({path: '../config'})

module.exports = {
    getAllNotes: async(req, res, next)=>{
        try {
            const notes = await Note.find({}).populate('user', { username: 1 })
            res.json({notes})
        }
        catch(err){if (err) { next(err)}}
    },
    getSingleNote: async(req, res, next)=>{
        try {
            const singleNote = await Note.findById(req.params.id).populate('user', { username: 1})
            res.json({singleNote})
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }   
    },
    createNote: async(req, res, next)=>{
        try{
            // get the note object from the body 
            const { title, body } = req.body

            // get the token from the request.token
            const token = req.token
            console.log(token)
            // check the token
            const tokenPayload = jwt.verify(token, process.env.JWT_SECRET)
            console.log(tokenPayload)

            // token payload undefined 
            if (!tokenPayload.id) {
                return res.status(400).json({
                    error: res.status,
                    message: "Missing or invalid token"
                })
            }


            // find the user
            const foundUser = await User.findById(tokenPayload.id)
            if (!foundUser) {
                const error = {
                    status: 400,
                    message: "Unauthorized access to request"
                }
                next(error)
            }
            

            if (!title || !body){
                const error = {
                    message: "Missing title or body",
                    status: 400
                }
                next(error)
            }
            const newNote = new Note({
                title, 
                body,
                user: tokenPayload.id
            })

            const savedNote = await newNote.save()
            // update the user's notes []
            foundUser.notes.push(savedNote._id)
            console.log
            await foundUser.save()

            res.json({
                message: 'new note created',
                note: savedNote
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    updateNote: async(req, res, next) =>{
        try{

            const { title, body } = req.body
            // find the note by id
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
                title,
                body
            }, {new: true})

            

            res.json({
                message: 'note updated',
                note: updatedNote
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    deleteNote: async(req, res, next) =>{
        try{
            
            const deletedNote = await Note.findByIdAndRemove(req.params.id, {new: true})
            res.json({
                message: 'deleted note',
                note: deletedNote
            })
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    }
}