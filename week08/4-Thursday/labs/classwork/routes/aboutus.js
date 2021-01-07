const express = require('express')
const aboutUs = express.Router();

aboutUs.get('/aboutus', (req, res) => {
    res.render('aboutus') //EJS extension is implied when 'render' is used
    
})

module.exports = aboutUs;