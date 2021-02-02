const  User  = require('../models/user'); 
const  keys  = require('../config/keys');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const e = require('express');


const Login = async (req, res) => {
   
    const email = req.body.email;
    const password = req.body.password;

 try{
     // Find user by email
    const user = await User.findOne({ email });
   
    // Check email and password
     if(user && user.password === password){
  
      const payload = { id: user._id, email: user.email }; 
  
      const token = jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 3600 });
  
        return  res.send({
          success: true,
          message: "Login Successful",
          token: 'Bearer ' + token
        });
   }
        return res.status(403).send({
          success: false,
          message: e.message || "Inccorect password or email !!"
      });
  
    } catch(e){
      return  res.status(404).send({
        success: false,
        message: e.message || "Login Unsuccessful",
      });
    }
}    
  
module.exports =  {Login};
  