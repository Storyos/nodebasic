const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")


// @desc Get All Contacts 
// @route Get /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    // template Engine을 사용하면 내용이 동적으로 바뀌는것을
    // 처리해줄 수 있다.
    console.log((contacts));
    // res.status(200).render("getAll",{    heading:"User List",contacts:contacts});
    res.render("index",{contacts:contacts})
});

// @desc View add Contact form
// @route Get /contacts/add 
const addContactForm =(req,res)=>{
    res.render("add");
}



// @desc create Contacts 
// @route Post /contacts/add
const createContact = async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("필수값 입력 X");
    }
    const contact = await Contact.create({ name, email, phone })
    res.redirect("/contacts");
};


// @desc get contact 
// @route Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update",{contact:contact})
});



// @desc put contact 
// @route put /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const {name,email,phone} = req.body;
    const contact = await Contact.findByIdAndUpdate(id);
    if(!contact){
        res.status(404);
        throw new Error("연락처가 없습니다.");
    }
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    contact.save();
    // save로 Update가 되나봐.
    // res.status(200).send(`update:${req.params.id}`);
    res.redirect("/contacts");
});

// @desc delete contact 
// @route Delete /contacts/:id
const deleteContact = asyncHandler(async (req, res) => { 
    const id = req.params.id;
    await Contact.findByIdAndDelete(id);
    res.redirect("/contacts")
    // res.status(200).send(`delete:${req.params.id}`)
});

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact,addContactForm }

