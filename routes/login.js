const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>You are in login page.</h1>')
})

// routes for user and admin login
router.use('/admin',require('./admin'))
router.use('/user',require('./user'))

module.exports = router