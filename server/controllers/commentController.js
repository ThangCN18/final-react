const Comment = require("../models/commentModel")

const getCommentsByIdMovie = async (req, res) =>{
    const conments = await Comment.find({idmovie: req.params.idmovie})
    res.json(conments);
}
const createComment = async (req, res) =>{
    const newComment = new Comment({
        username: req.body.username,
        idmovie: req.params.idmovie,
        content: req.body.content
    })
    const conment = await newComment.save()
    res.json(conment)
    
}

module.exports = {
    getCommentsByIdMovie,
    createComment
}