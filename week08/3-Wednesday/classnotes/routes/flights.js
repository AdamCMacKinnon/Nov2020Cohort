const express = require('express');
const flightsRoute = express.Router();

flightsRoute.get('/flights?/:from/:to', (req,res) => {
    res.send(`Departing from: ${req.params.from} Arriving at: ${req.params.to}`)
})

module.exports = flightsRoute;