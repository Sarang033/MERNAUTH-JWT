const express = require('express');
const app = express();
const port = 8009;
require("./database/connection")

app.get("/",(req,res) =>{
    res.status(201).json("Server created")
})

app.listen(port,()=>{
    console.log(`SERVER started at port number: ${port}`);
})