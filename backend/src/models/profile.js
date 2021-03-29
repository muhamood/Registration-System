const mongoose = require('mongoose');
const User = require('./user');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    firstName:{
        type: String,
        required:true
    }, 
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: Schema.Types.ObjectId,
        ref: User
      },
    occupation:{
        type: String,
        required: true
    }  
})

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;