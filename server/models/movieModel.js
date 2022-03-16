const mongoose = require("mongoose")


const movieSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description : {
        type: String,
    },
    genre : {
        type: String
    },
    urlmovie : {
        type: String
    },
    urlimage : {
        type: String
    }
})

module.exports = mongoose.model("movie", movieSchema)