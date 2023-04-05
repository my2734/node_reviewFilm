const Category = require('../models/category')

const getAll = async (req,res)=>{
    try{
        const result =await Category.find()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

module.exports = {
    getAll
}