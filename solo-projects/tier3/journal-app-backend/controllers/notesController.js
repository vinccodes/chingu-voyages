const Note = require('../models/Note')
const User = require('../models/User')
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

        
            console.log(token)
            // check the token from the request
            const user = req.user

            // token payload undefined 
            if (!user.id) {
                return res.status(400).json({
                    error: res.status,
                    message: "Missing or invalid token"
                })
            }


            // find the user
            const foundUser = await User.findById(user.id)
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
                user: user.id
            })

            const savedNote = await newNote.save()
            // update the user's notes []
            foundUser.notes.push(savedNote._id)
            console.log
            await foundUser.save()

            res.status(201).json({
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

            // get token from request
            const user = req.user

            // find the note
            const foundNote = await Note.findById(req.params.id)
            
            // check if note's owner (the user) matches the token.id 
            if (foundNote.user.toString() == user.id){
                // match owner, update the note

                // update the note
                const updatedNote = await foundNote.updateOne({
                    title,
                    body
                }, {returnOriginal: false})

                res.json({
                    message: 'note updated',
                    note: updatedNote
                })

                
            }
            else {
                res.status(401).json({
                    message: "unauthorized. missing or invalid token"
                })
            }

        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    },
    deleteNote: async(req, res, next) =>{
        try{
            
            // find the note
            const noteToRemove = await Note.findById(req.params.id)

            // get the user 
            const user = req.user

            // check if user.id matches note.user ObjectID
            if (noteToRemove.user.toString() == user.id){
                // match, delete note
                const deletedNote = await noteToRemove.deleteOne({new: true})

                res.status(204).json({
                    message: 'deleted note',
                    note: deletedNote
                })
                
            }
            else {
                res.status(401).json({
                    message: "Unauthorized. Missing or invalid token"
                })
            }
           
        }
        catch(err){
            if (err) { 
                next(err)
            }
        }
    }
}