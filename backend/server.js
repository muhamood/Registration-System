const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./src/auth');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = () => mongoose.connect('mongodb://localhost/registration_system', 
        {useNewUrlParser: true, useUnifiedTopology: true});

db().then(() => console.log('Database connected successfully')).catch(console.log);       

app.use('/', authRouter);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));