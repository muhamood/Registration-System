const express = require('express');
const { Login, SignUp } = require('./controller');

const authRouter = express.Router();

authRouter.post('/login', Login);
authRouter.post('/signup', SignUp);

module.exports = authRouter;