const express = require("express");
const dbConnect = require("./config/dbConnect");
const methodOverride = require("method-override");

const app = express();
app.set("view engine","ejs");
app.set("views","./views");

app.use(express.static("./public"));
app.use(methodOverride("_method"));

const port = 3000;

dbConnect();


// app.get("/",(req,res)=>{
//     res.send("HELLO NODE!");
// });

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/",require('./routes/loginRoutes'));
app.use("/contacts", require('./routes/contactRoutes'));

app.listen(port,()=>{
    console.log("서버 시작");
});








// 순서
// import
// instance
// route or middleware
// error handling
// 마지막 listen

// next()함수 --> 함수에서 응답을 종료하지 않고 다음 미들웨어로 연결함.