const mongoose = require('mongoose');
const Schema = mongoose.Schema
const user = new Schema({
    kadı:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
    },
    // name:{
    //     type: String,
    //     require: true,
    // },
    // surname:{
    //     type: String,
    //     require: true
    // },
})

const User = mongoose.model('userSchema',user)
module.exports = User