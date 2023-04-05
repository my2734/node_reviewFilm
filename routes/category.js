const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get('/',categoryController.getAll)

router.get('/:id',(req,res)=>{
    res.json('get category detail')
})

router.post('/',(req,res)=>{
    res.json('create category')
})

router.put('/:id', (req,res)=>{
    res.json('update category')
})

router.delete('/',(req,res)=>{
    res.json('delete all category')
})

router.delete('/:id',(req,res)=>{
    res.json('delete one category')
})

module.exports = router