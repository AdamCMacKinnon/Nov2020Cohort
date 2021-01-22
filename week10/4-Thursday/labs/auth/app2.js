const { clear } = require("console");

const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: ['lkjlkjakjhoihglkjg'],
    maxAge: 14 * 24 * 60 * 60 * 1000 
}))

app.listen(4000, () => {
    console.log('listening on port 4000')
})

app.get('/', (req, res) => {
    req.session.fname = "Adam";
    res.send('home page');
})

app.get('/about', (req, res) => {
  
    res.send(req.session.fname)
})