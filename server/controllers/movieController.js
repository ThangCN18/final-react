const Movie = require("../models/movieModel")

const getMovie = async (req, res) =>{
    const movies = await Movie.find()
    res.json(movies)
} 
const createMovie = async (req, res) =>{
    const newMovie = await new Movie({
        name: req.body.name,
        description : req.body.description,
        genre : req.body.genre,
        urlmovie :req.body.urlmovie,
        urlimage : req.body.urlimage,
    })
    await newMovie.save((error)=>{
        if(error){
            res.status(404).json("create fail!")
        }else{
            res.status(200).json("create success")
        }
    })
    
} 
module.exports = {
    getMovie,
    createMovie
}