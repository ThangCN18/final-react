const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const Users = require('../models/usermodel')

const register = async (req, res)=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = await new Users({
        email: req.body.email,
        username: req.body.username,
        password: hash
    })
    await user.save((error)=>{
        if(error){
            console.log(error)
            return res.status(404).json('register fail')
        }else{
            return res.status(200).json({user: user})
        }
            
        
    })
} 

const login = async (req, res)=>{
   const user = await Users.findOne({username: req.body.username})
   if(!user){
       return res.status(404).json("Wrong UserName")
   }else{
    
      const valpassword = await bcrypt.compare(req.body.password, user.password)
    
      if(!valpassword){
        res.status(404).json("Wrong Password")
      }else{
        

        const {password, ...other} = user._doc

        const accessToken = await jwt.sign({user: other}, process.env.ACCESS_TOKEN, {expiresIn: "2h"})
        res.json({user: other, token: accessToken})
      }
   }
} 


module.exports = {
    register,
    login
}