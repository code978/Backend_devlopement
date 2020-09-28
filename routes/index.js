const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>You are in home page.</h1>')
})

module.exports = router