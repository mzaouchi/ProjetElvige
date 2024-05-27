const express = require("express")
const Contact = require("../Models/Contact")
const { addContact, getContacts, getOneContact, deleteContact, updateContact } = require("../Controllers/Contacts")

const contactRouter = express.Router()


contactRouter.post("/addContact",addContact)

contactRouter.get("/getContacts",getContacts)

contactRouter.get("/getOneContact/:id",getOneContact)


contactRouter.delete("/deleteContact/:id",deleteContact)


contactRouter.put("/updateContact/:id",updateContact)




module.exports = contactRouter