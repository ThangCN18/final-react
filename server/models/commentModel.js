const mongoose = require("mongoose")


const conmentSchema = mongoose.Schema({
    username: {
        type: String,
    },
    idmovie: {
        type: mongoose.Schema.Types.ObjectId,
    },
    content : {
        type: String,
    },
    
})

module.exports = mongoose.model("conment", conmentSchema)