const router = require('express').Router()
const usersController = require('../controllers/usersController')


router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getSingleUser)
router.post('/', usersController.createUser)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router