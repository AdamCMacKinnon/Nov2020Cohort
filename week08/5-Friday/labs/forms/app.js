const express = require('express');
const app = express();




//public
app.use(express.static('public'))

//view
app.set('view engine', 'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})