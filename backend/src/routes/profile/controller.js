const Profile = require('../../models/profile');
const User = require('../../models/user');

const GetCurrentProfile = (req, res) =>{
  Profile.findOne({user: req.user.id}).then(profile =>{
      if(!profile){
          return res.status(404).json("Profile not found");
      }
      res.json(profile);
  }) .catch(err =>
      res.status(404).json(err)
  )
}

const CreateProfile = async (req, res) =>{
    const profile = new Profile(req.body);
try{
    await profile.save();

    if (!profile) {
        res.status(404).send({
            message: "Profile not created"
        })
    }

    res.send({
        success: true,
        message: "Profile created successfully",
        profile
    });
} catch(e){
    res.send({
        success:false,
        message: e.message || "some field required is missing / item already exists .."
    });
  }
}

const GetAllProfiles = async (req, res) =>{
    try{
        const profiles = await Profile.find();
    res.send({
        success:true,
        message: "Profiles retrieved successfully",
        profiles
    }) 
    } catch(e){
       res.send({
           success: false,
           message: e.message || "Oops...Something happened profiles not found"
       })
    }
 }

const GetProfile = async (req, res) =>{
    const email = req.body.email;
try{
    const profile = await Profile.findOne(req.params._id).populate('User', 'email');
    res.send({
        success: true,
        message: "User Profile retrieved successfully",
        profile
    })
} catch(e){
    res.send({
        success: false,
        message: e.message || "Something happened..User Profile not found"
    })
  }
}

const EditProfile = async (req, res) =>{
   try{
    const editedprofile = await Profile.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send({
        success: true,
        message: "User Profile updated successfully",
        editedprofile
    })
   } catch(e){
      res.send({
          success: false,
          message: e.message || "User Profile not updated...something missing !!!"
      })
   } 
}

const DeleteProfile = async(req, res) =>{
    try{
        await Profile.findByIdAndRemove(req.params.id, req.body);
        res.send({
            success: true, 
            message: "User Profile deleted successfully",
        })
    } catch(e){
        res.send({
            success: false,
            message: e.message || "Something happened check User id"
        })
    } 
}


module.exports = { GetCurrentProfile, CreateProfile, GetAllProfiles, GetProfile, EditProfile, DeleteProfile }
