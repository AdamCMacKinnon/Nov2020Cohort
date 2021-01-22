const express = require('express');
const router = express.Router();


router.get('/feedback', (req, res) => {
    res.send('feedback')
})



module.exports = router;