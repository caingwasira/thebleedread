const express = require('express');
const posts = require('../models/navdata');
const router = express.Router();

// Get
router.get('/', (req, res) => {
    var myposts = posts.getPosts();
    res.render('welcome', {
        myposts
    });
})
module.exports = router;