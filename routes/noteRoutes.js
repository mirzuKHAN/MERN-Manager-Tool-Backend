const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const isAuth = require('../middleware/isAuth');

router.use(isAuth);

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router