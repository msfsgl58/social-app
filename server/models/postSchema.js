const mongoose = require("mongoose")
const Schema = mongoose.Schema
const post = new Schema({
    postUser:{
        type: String,
        require: true
    },
    photo:{
        data: Buffer,
        contentType: String
    },
    uploadTime:{
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('postSchema',post)
module.exports = Post