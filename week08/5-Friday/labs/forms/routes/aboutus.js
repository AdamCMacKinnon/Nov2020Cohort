const express = require('express');
const aboutUs = express();

aboutUs.get('/aboutus', (req, res) => {
    res.send('about Us')
})

module.exports = aboutUs;