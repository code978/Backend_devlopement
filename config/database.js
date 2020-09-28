const mongoose = require('mongoose')

const connectdb = async () =>{
    const db_url = 'your_db_url'
    try{
        await mongoose.connect(db_url, {useNewUrlParser: true,useUnifiedTopology:true});
        console.log('databse is sucessfully connected.')
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connectdb
