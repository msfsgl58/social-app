const mongoose = require("mongoose")
const Schema = mongoose.Schema
const post = new Schema({
    user: String,
    img:{
        data: Buffer,
        contentType: String
    }
})

const Post = mongoose.model('postSchema',post)
module.exports = Post