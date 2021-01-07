const express = require('express');
const router = express.Router();
const axios = require('axios');

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]

let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]

let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]

let obj = {
    firstName: "Adam",
    lastName: "MacKinnon",
}
router.get('/', async (req, res) => {
    let data = await axios.get('https://corona.lmao.ninja/v2/states');
    
        res.render('index', {
            pic: pictures,
            names: nameArr,
            obj: obj,
            data: data[0].state
    })
   

})

router.get('/:id', (req, res) => {
  
    let id = req.params.id;
    res.render('index', {
        pic: pictures[id],
        names: false,
    })
})



module.exports = router;
