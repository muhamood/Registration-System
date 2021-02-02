const express = require('express');
const { Login } = require('./controller');

const authRouter = express.Router();

authRouter.post('/login', Login);

module.exports = authRouter;