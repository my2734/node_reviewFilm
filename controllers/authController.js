const User = require('../models/User.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const register = async (req,res)=>{
    try{
        const userExist = await User.findOne({username: req.body.username})
        if(userExist){
            res.status(404).json('User exist')
        }else{
            try{
                const salt = bcrypt.genSaltSync(10);
                req.body.password = await bcrypt.hash(req.body.password,salt)
                const newUser = new User(req.body)
                const result = await newUser.save()
                const {password, ...info} = result._doc
                res.status(200).json(info)
            }catch(error){
                res.status(500).json('Loi server')
            }
        }
    }catch(error){
        res.status(500).json('Loi server')
    }
}

const login = async (req,res)=>{
    try{
        const userExist = await User.findOne({username: req.body.username})
        if(!userExist){
            res.status(404).json('User not exist. Register now!')
        }else{
            const statusPassword = await bcrypt.compare(req.body.password, userExist.password)
            if(!statusPassword){
                res.status(404).json("Password wrong")
            }
            const token = jwt.sign({
                id: userExist._id
            },process.env.TOKEN_SERECT)
            res.status(200).json(token)
        }
    }catch(error){
        res.status(500).json('Loi server')
    }
}

module.exports = {
    register,
    login
}