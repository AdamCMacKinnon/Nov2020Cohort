const express = require('express');
const batmanRoute = express.Router();

batmanRoute.get('/Bat(wo)?man', (req, res) => {
    res.send(`<h1> The Dark Knight</h1>`);
})

module.exports = batmanRoute;