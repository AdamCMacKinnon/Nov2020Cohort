const express = require('express');
const app = express();


// app.use(express.static('public'));

app.set('view engine', 'ejs');

// If you name your folder anything other than VIEWS use next line
// app.set('views', 'folder name')


// generally understood that INDEX is your entry point or "home page".  Don't have to type it out, just ROUTES is fine.
app.use(require('./routes/index'))
app.use(require('./routes/aboutus'))


app.listen(3000, () => {
    console.log('Sever is running so fresh and so clean (clean) on port Andre 3000')
})