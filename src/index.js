const express =require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || process.env.port || "3000";
app.listen(port,(err)=>{
    if (err) throw err;
})
