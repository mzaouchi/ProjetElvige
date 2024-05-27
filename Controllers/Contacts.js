const Contact = require("../Models/Contact")

exports.addContact=async(req,res)=>{
    try {
        const found = await Contact.findOne({email : req.body.email})
        
        if(found){
            return res.status(400).send("Email already exists")
        }

        const newContact = new Contact(req.body)

        await newContact.save()

        res.status(200).send({msg :"Contact added",newContact})
    } catch (error) {
        res.status(500).send("Could not add contact")
    }
}

exports.getContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg :"Contacts list",contacts})
    } catch (error) {
        res.status(500).send("Could not get contacts")
    }
}

exports.getOneContact=async(req,res)=>{
    try {

        const {id} = req.params

        const contact = await Contact.findById(id)

        res.status(200).send({msg :"Contact",contact})
    } catch (error) {
        res.status(500).send("Could not get contact")
    }
}

exports.deleteContact=async(req,res)=>{
    try {

        const {id} = req.params

       await Contact.findByIdAndDelete(id)

        res.status(200).send({msg :"Contact deleted"})
    } catch (error) {
        res.status(500).send("Could not get contact")
    }
}

exports.updateContact=async(req,res)=>{
    try {

        const {id} = req.params

       await Contact.findByIdAndUpdate(id,{$set : req.body})

        res.status(200).send({msg :"Contact updated"})
    } catch (error) {
        res.status(500).send("Could not get contact")
    }
}