const express = require('express');
const app = express();



app.set('view engine', 'ejs');



app.use(express.static('public'))


// route references
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


app.listen(3000, () => {
    console.log('Server is running so fresh and so clean (clean) on port Andre 3000');
})