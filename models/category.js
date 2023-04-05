const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema({
    category: {
        type:String
    }
},{
    timestamp: true
})

module.exports = mongoose.model('Category', CategorySchema)