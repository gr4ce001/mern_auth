const bcryptjs = require('bcryptjs')
const User = require('../models/userModel')
const errorhandler = require('../utils/error')

const createUser = async (req,res,next)=>{
    const {name,email,mobile,password} = req.body
    const hashpassword = bcryptjs.hashSync(password , 10 )
    const newUser = new User({name , email , mobile, password : hashpassword})
    try{
        await newUser.save();
        res.status(200).json({message : 'user created'})
    }
    catch (error){
       next(errorhandler(300,"fuck off"))
    }
    
}

module.exports = { createUser }