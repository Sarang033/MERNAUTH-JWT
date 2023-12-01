const express = require("express");
const app = express();
const port = 8009;
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
require("./database/connection");

// app.get("/",(req,res) =>{
//     res.status(201).json("Server created")
// })

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`SERVER started at port number: ${port}`);
});
