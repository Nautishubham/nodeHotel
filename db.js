const mongoose=require('mongoose');
//const mongoURL='mongodb://localhost:27017/hotels'

require('dotenv').config()
const mongoURL=process.env.mongoURL;
mongoose.connect(mongoURL,{
    useNewUrlParser: true,     
    useUnifiedTopology: true, 
})

const db=mongoose.connection;
db.on('connected',()=>{

    console.log('connnected successfully')
})

module.exports=db;