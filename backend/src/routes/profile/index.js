const express = require('express');
const passport = require('passport');
const {GetCurrentProfile, CreateProfile, GetProfile, GetAllProfiles, EditProfile, DeleteProfile } = require('./controller');

const profileRouter = express.Router();

profileRouter.get('/', GetAllProfiles),
profileRouter.get('/:id', GetProfile);
profileRouter.get('/current', passport.authenticate('jwt', {session:false}), GetCurrentProfile),
profileRouter.post('/create', passport.authenticate('jwt', {session:false}), CreateProfile);
profileRouter.put('/edit/:id', passport.authenticate('jwt', {session:false}), EditProfile),
profileRouter.delete('/delete/:id', passport.authenticate('jwt', {session:false}), DeleteProfile)

module.exports = profileRouter;