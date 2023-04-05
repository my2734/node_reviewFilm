const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email:{
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true,
    }
},{
    timestamp: true
})

module.exports = mongoose.model('User', UserSchema)

