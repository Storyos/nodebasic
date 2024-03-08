const express = require ('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Hello Node!");
});

app.use(router);
app.listen(port,()=>{
    console.log("서버 시작");
});
