const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = async() =>{
    try{
        const connect = await mongoose.connect(process.env.DB_ATLAS_URL);
        console.log("DB 연결 성공");
    } catch(err){
        console.error(err.message);
    }
}

module.exports = dbConnect;