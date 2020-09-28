const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    amount :{
        type:Number,
        required:true
    },
    customerId: {
        type:String,
        required:true
    },
    customerEmail: {
        type:String,
        required:true
    },
    customerPhone:{
        type:Number,
        required:true
    },
    status:Boolean,
    locations:String
})

module.exports = mongoose.model('payment',PaymentSchema)