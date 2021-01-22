/*

request --> express --> response
Middleweare is a function

creates an array of functions

[
    function 1, next
    function 2
    function 3
]
uses "next" to move from one function to the next
*/

const express = require('express');
const app = express();
const hemlet = require('helmet');

// let urlencoded = function(val){
//     return function(req, res, next){
//         next()
//     }
// }
// app.use(urlencoded())
app.use(express.static('public')) // Middleweare.  

app.use(helmet())

app.all('/', (req, res, next) => {
    console.log('log something')
})

app.get('/', (req, res, next) => {
    res.send('home')
})
app.get('/about', (req, res) => {
    res.send('about')
})

app.use(function(err, req, res, next){
    console.log('here is an error');
    console.log(err.message);
})

app.listen(3000, () => {
    console.log('listening on port 3000');
    next();
})