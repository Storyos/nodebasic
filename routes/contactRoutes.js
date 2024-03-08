const express = require('express');
const { getAllContacts, createContact, getContact, updateContact, deleteContact,addContactForm } = require('../controllers/contactController')
const cookieParser = require("cookie-parser");
const checkLogin = require("../middlewares/checkLogin");
const router = express.Router();

router.use(cookieParser());


// checkLogin을 통해서, Login을 해야만 넘어가게 만들어줌.
router
    .route('/')
    .get(checkLogin,getAllContacts);

router
    .route("/add")
    .get(checkLogin,addContactForm)
    .post(checkLogin,createContact);
    
router.route('/:id')
    .get(checkLogin,getContact)
    .put(checkLogin,updateContact)
    .delete(checkLogin,deleteContact);

module.exports = router;