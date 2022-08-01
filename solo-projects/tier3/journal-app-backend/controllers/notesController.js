const Note = require('../models/Note')

module.exports = {
    getAllNotes: async(req, res)=>{
        try {
            const notes = await Note.find({})
            res.json({notes})
        }
        catch(err){if (err) { console.log(err)}}
    },
    getSingleNote: async(req, res)=>{
        try {
            const singleNote = await Note.findById(req.params.id)
            res.json({singleNote})
        }
        catch(err){if (err) { console.log(err)}}
    },
    createNote: async(req, res)=>{
        try{
            // get the note object from the body 
            const { title, body } = req.body

            const newNote = new Note({
                title, 
                body
            })

            const savedNote = await newNote.save()

            res.json({
                message: 'new note created',
                note: savedNote
            })
        }
        catch(err){if (err) { console.log(err)}}
    },
    updateNote: async(req, res) =>{
        try{

            const { title, body } = req.body
            // find the note by id
            const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
                title,
                body
            })

            

            res.json({
                message: 'note updated',
                note: updatedNote
            })
        }
        catch(err){if (err) { console.log(err)}}
    },
    deleteNote: async(req, res) =>{
        try{
            
            const deletedNote = await Note.findByIdAndRemove(req.params.id, {new: true})
            res.json({
                message: 'deleted note',
                note: deletedNote
            })
        }
        catch(err){if (err) { console.log(err)}}
    }
}