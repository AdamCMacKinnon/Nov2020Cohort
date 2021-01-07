const express = require('express');
const aboutRoute = express.Router();


aboutRoute.get('/about', (req, res) => {
    res.send(`
    <link rel="stylesheet" href="css/global.css">
    <h1> Cooler than Freddy Jackson sippin' a milkshake in a blizzard</h1>`);
})

module.exports = aboutRoute;