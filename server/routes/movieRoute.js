const express = require("express")
const { getMovie, createMovie } = require("../controllers/movieController")
const Router = express.Router()

Router.get("/", getMovie)
      .post("/", createMovie)

module.exports = Router