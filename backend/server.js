const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const app = express();

const db = async () => {
    try{
        await mongoose.connect('mongodb://localhost/registration_system', 
        {useNewUrlParser: true, useUnifiedTopology: true});
    } catch(err) {
        handleError(err);
    }   
} 

app.get('/', (req, res) =>{
    res.send('Server ready for use');
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));