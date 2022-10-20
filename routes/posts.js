const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');

// Routes

router.get('/', async (req, res) => {
    try {
        const posts =  await Post.find();
        res.send(posts);
    }catch(err){
        res.json({ message: err })
    }
});

router.get('/specific', (req, res) => {
    res.send("We are at specific post :)")
});

router.post('/', async (req, res) => {
    const post = new Post(
        {
            title: req.body.title,
            description: req.body.description
        }
    );

    try {
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.send({ message: err })
    }
});


module.exports = router;