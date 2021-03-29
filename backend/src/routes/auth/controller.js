const  User  = require('../../models/user'); 
const  keys  = require('../../config/keys');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validateLoginInput = require('../../validations/login');
const validateSignUpInput = require('../../validations/login');

const SignUp = async (req, res) =>{
 
const {errors, isValid} = validateSignUpInput(req.body);

if (!isValid) {
  return res.status(400).json(errors);
}

const email = req.body.email;

const user = await User.findOne({ email });

const newUser = new User({
  ...req.body
}); 

if (user) {
  errors.email = 'Email already exists';
  return res.status(400).json(errors);
} 
 
try{
  await newUser.save();

  return res.send({
      success: true,
      message: 'Sign up successful',
      newUser

  }); 
} catch(e){
   return res.send({
    success: false,
    message: e.message || 'Sign up unsuccessful',
   })
 }
}


const Login = async (req, res) => {
   const {errors, isValid} = validateLoginInput(req.body);

   if (!isValid) {
    return res.status(400).json(errors);
  }

    const email = req.body.email;
    const password = req.body.password;

 try{
     // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }
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
        errors.password = "Password is incorrect";
        return res.status(403).json(errors);   
      
    } catch(e){
      return  res.status(404).send({
        success: false,
        message: e.message || "Login Unsuccessful",
      });
    }
}    
  
const GetCurrentUser = async (req, res) => {
   res.json({
     message: 'Success',
      id: req.user.id,
      email: req.user.email
    })
}

module.exports =  {Login, SignUp, GetCurrentUser};
  