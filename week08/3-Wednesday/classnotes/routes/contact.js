const express = require('express');
const contactRoute = express.Router();

contactRoute.get('/contact/:name', (req, res) => {
    let userName = req.params.name
    console.log(userName);
    res.send(`<h1> Hello there ${userName}</h1>`);
})

module.exports = contactRoute;