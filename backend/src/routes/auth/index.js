const express = require('express');
const passport = require('passport');
const { Login, SignUp, GetCurrentUser } = require('./controller');


const app = express();

const authRouter = express.Router();
app.use(passport.initialize());

require('../../config/passport')(passport);

authRouter.post('/login', Login);
authRouter.post('/signup', SignUp);
authRouter.get('/current', passport.authenticate('jwt', {session: false}), GetCurrentUser);

module.exports = authRouter;