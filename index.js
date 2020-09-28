const express = require('express')
const app = express()
const connectdb = require('./config/database')
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const port = process.env.PORT || 3000;

app.use(express.json())
connectdb()
app.use('/',require('./routes/index'))
app.use('/login',require('./routes/login'))
app.use('/payment',require('./routes/payment')) 
app.use('/mail',require('./routes/mail'))

app.listen(port,(req,res)=>{
    console.log(`port is running on locahost:${port}`)
})