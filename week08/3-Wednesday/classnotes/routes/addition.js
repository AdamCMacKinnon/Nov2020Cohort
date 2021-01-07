const express = require('express');
const additionRoute = express.Router();

additionRoute.get('/calculate/:num1/:num2', (req, res) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = parseInt(num1) + parseInt(num2);

    res.send(`Result of adding ${num1} and ${num2} is ${sum}`)
})

module.exports = additionRoute;