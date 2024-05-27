const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
    {
        nom : String,
        age : Number,
        image : String,
        email : {type : String, required : true, unique : true}
    }
)

module.exports = mongoose.model("elvige",contactSchema)