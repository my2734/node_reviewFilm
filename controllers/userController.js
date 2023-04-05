const User = require('../models/User')

const getAll = async (req,res)=>{
    try{
        const result = await User.find()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const deleteAll = async (req,res)=>{
    try{
        const result = await User.deleteMany()
        res.status(200).json('Delete user success')
    }catch(error){
        res.status(500).json('Loi server')
    }
}

module.exports = {
    getAll,
    deleteAll
}