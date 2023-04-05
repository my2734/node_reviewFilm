const express = require('express')

const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.getAll)

router.get('/:id',movieController.getDetail)

router.post('/',movieController.create)

router.put('/:id',movieController.update)

router.delete('/',movieController.deleteAll)

router.delete('/:id',movieController.deleteOne)

module.exports = router