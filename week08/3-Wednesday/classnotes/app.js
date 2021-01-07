const express = require('express');
const app = express();
app.use(express.static('public'));

//subroutes

app.use(require('./routes/index'))
app.use(require('./routes/cats'))
app.use(require('./routes/dogs'))
app.use(require('./routes/about'))
app.use(require('./routes/contact'))
app.use(require('./routes/flights'))
app.use(require('./routes/addition'))
app.use(require('./routes/batman'))

app.listen(3000, () => {
    console.log('Running so fresh and so clean (clean) on port Andre 3000');
    
})


// M V C 
// Modules - VIEWS - CONTROL