const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    password: {
        type: String,
        unique: true,
        minlength: 6
    }
    
})

module.exports = mongoose.model("users", userSchema)