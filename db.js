const mongoose=require('mongoose');
//const mongoURL='mongodb://localhost:27017/hotels'
const mongoURL='mongodb+srv://nautishubham:sn123456789@cluster0.syy90.mongodb.net/';
mongoose.connect(mongoURL,{
    useNewUrlParser: true,     
    useUnifiedTopology: true, 
})

const db=mongoose.connection;
db.on('connected',()=>{

    console.log('connnected successfully')
})

module.exports=db;