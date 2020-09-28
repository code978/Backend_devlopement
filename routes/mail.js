const express = require('express')
const router = express.Router();
const admin = require('./../models/admin')
const user = require('./../models/user')
// const nodemailer = require('nodemailer')

router.get('/',(req,res)=>{
    res.send('<h1>You are sending e-mail for confirmation.</h1>')
})

router.get('/send/',(req,res)=>{
    
    const user = user.find(req.params.email)
    const password = user.find(req.params.password)
    
    const transpotter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        requireTLS:true,
        auth:{
            user:user,
            pass:password
        }
    })
    var mailOptions = {
        from:'webdu@gmail.com',
        to:user,
        subject:user.type,
        text:`you are ${user.type}`,
    }
    
    transpotter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error.message)
        }else{
            console.log('mail send successfullly',info.response)
        }
    })
})

module.exports = router