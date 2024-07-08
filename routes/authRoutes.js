const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

router.route('/login')
    .get(authController.login_get)
    .post(authController.login_post)

router.route('/logout')
    .post(authController.logout_post)

router.route('/dash')
    .get(authController.dashboard_get)

module.exports = router