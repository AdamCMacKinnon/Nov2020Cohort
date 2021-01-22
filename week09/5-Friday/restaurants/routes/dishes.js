const express = require('express');
const router = express.Router();
const db = require('../models/database');


router.get('/dishes', (req, res) => {
    //query database
    db.query(`select * from restaurants`)
    .then(records =>{
        ///records is an array of objects [{}, {}, {}]
        // {name, fooddescription, price, course, imageurl}
        res.render('dishes', {
            dishes: records
        });
    })

})




module.exports = router;