const jwt = require("jsonwebtoken")

const authCommet = async (req, res, next)=>{
    const token = req.headers.token.split(" ")[1]
    await jwt.verify(token, process.env.ACCESS_TOKEN, (error)=>{
        if(error){
            res.json("Pleace Login!")
        }else{
            next()
        }
    })
    

}
module.exports = authCommet