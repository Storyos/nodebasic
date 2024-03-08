const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();
const app = express();
const port = 3000;
// 세션은 express-session
// 쿠키는 cookieparser

app.use(session({
    secret:"secret code",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: process.env.DB_ATLAS_URL}),
    cookie: { MaxAge: 60 * 60 * 24 * 1000},
}));

app.get("/",(req,res)=>{
    
    if(req.session.count){
        req.session.count++;
        res.send(`${req.session.count}번째 방문입니다.`)
    }else{
        req.session.count=1;
        res.send('첫번째 방문입니다.');
    }
})

app.get("/session",(req,res)=>{
    res.send(req.sessionID)
})

app.get("/delete-session",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
        } else{
            res.clearCookie("connect.sid");
        }
        res.send("세션 삭제")
    })
})

app.listen(port,()=>{
    console.log("서버 시작");
});