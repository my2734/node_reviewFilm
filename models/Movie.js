const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    link_url: {
        type: String
    },
    description: {
        type: String
    }
},{
    timestamp: true
})

module.exports = mongoose.model('Movie',MovieSchema)