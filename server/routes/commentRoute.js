const express = require("express")
const { getCommentsByIdMovie, createComment} = require("../controllers/commentController")
const Router = express.Router()
const authCommet = require("../controllers/auth")

Router.get("/:idmovie",  getCommentsByIdMovie)
      .post("/:idmovie", authCommet, createComment)

module.exports = Router