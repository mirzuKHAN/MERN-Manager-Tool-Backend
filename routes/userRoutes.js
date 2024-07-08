const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const isAuth = require('../middleware/isAuth');

router.use(isAuth);

router.route('/')
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = router 