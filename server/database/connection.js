const mongoose = require("mongoose");

const DB = "mongodb+srv://sarangchamp2004:33333333@cluster0.7tpeeyp.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=> console.log("Database Connected")).catch((error)=>{
    console.log(error);
})