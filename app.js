const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts.js');


app.use(bodyParser.json());


// Routes
app.use('/posts', postsRoute);

// Default route
app.get('/', (req, res) => {
    res.send('We are at home');
});

// Connect to db

mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => console.log('Connected to db')
    );

// Starting app
app.listen(8000);
