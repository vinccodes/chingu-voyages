const router = require('express').Router()
const notesController = require('../controllers/notesController')
const { tokenExtractor, userExtractor } = require('../middlewares/middleware')


router.get('/', notesController.getAllNotes)
router.get('/:id', notesController.getSingleNote)
router.post('/', tokenExtractor, userExtractor, notesController.createNote)
router.put('/:id', tokenExtractor, userExtractor, notesController.updateNote)
router.delete('/:id', tokenExtractor, userExtractor, notesController.deleteNote)


module.exports = router 