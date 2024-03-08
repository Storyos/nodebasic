const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        required:[true,"전화번호를 꼭 기입하셔야 합니다."]
    },
},
{timestamps:true}
);

// Model명(Contact)는 첫글자 대문자에 단수형 이어야 한다.
const Contact = mongoose.model("Contact",contactSchema);

module.exports = Contact;
