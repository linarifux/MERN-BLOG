const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        rquired: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date
    }
})

const Post = mongoose.model('post', PostSchema)
module.exports = Post