const express = require('express');
const links = require('../controllers/navcontoller');
const router = express.Router();

// Get
router.get('/', (req, res) => {
    res.render('welcome', {
       link: links.sendLinks()
    })
})
module.exports = router;