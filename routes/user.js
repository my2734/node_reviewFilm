const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/',userController.getAll)

router.delete('/',userController.deleteAll)

module.exports = router