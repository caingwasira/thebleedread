const express = require('express');
const router = express.Router();

// Get
router.get('/', (req, res) => {
    res.render('blog')
})
module.exports = router;