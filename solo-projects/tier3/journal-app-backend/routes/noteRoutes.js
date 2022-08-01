const router = require('express').Router()
const notesController = require('../controllers/notesController')


router.get('/', notesController.getAllNotes)
router.get('/:id', notesController.getSingleNote)
router.post('/', notesController.createNote)
router.put('/:id', notesController.updateNote)
router.delete('/:id', notesController.deleteNote)


module.exports = router 