const express = require('express');
const router = express.Router();
const db = require('../models/database');
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get('/newdish', (req, res) => {

    db.query(`select * from categories`)
    .then(records =>{

        res.render('newdish', {
            categories: records
        });

   });

})

router.post('/newdish', (req, res) => {
    let name = req.body.name;
    let category = req.body.category;
    let fooddescription = req.body.description;
    let price = parseFloat(req.body.price);
    let imageURL = req.body.imageurl;
    let course = req.body.course;

    //insert into database

    db.none(`insert into restaurants (name, category, fooddescription, price, course, imageurl) values ($1, $2, $3, $4, $5, $6)`, [name, category, fooddescription, price, course, imageURL])
    .then(() => {
        res.redirect('/dishes')
    })
    .catch(error =>{
        res.send(error)
    })
})

    




module.exports = router;