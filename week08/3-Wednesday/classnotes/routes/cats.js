const express = require('express');
const catsRoute = express.Router();

catsRoute.get('/cats?', (req, res) => {
    res.send(`<h1> Cats are great</h1>`);
})

module.exports = catsRoute;