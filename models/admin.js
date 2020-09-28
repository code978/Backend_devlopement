const mongoose = require('mongoose')

const AdminSchmea = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:Date,
    location:String
})

module.exports = mongoose.model('admin',AdminSchmea)