const express = require ('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Node!");
});


app.use("/contacts",require('./contactRoutes'));


app.listen(port,()=>{
    console.log("서버 시작");
});
