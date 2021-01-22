const express = require('express');
const app = express();



// create a new database
//config database

let config = {
    host: 'localhost',
    port: 5432,
    database: 'restaurant',
    user: 'postgres'
}

let pgp= require('pg-promise')();

let db = pgp(config); //database object - gives accesss to perform CRUD operations

// db.query('SELECT * FROM employees.department')
// .then(records =>{
//     console.log(records[1].dept_name);
//     let arr = records.filter(record =>{
//         return record.id == 'd005'
//     })

//     console.log(arr[0].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// })

// db.one(`SELECT * FROM employees.department WHERE id = 'd005'`)
// .then(result =>{
//     console.log(result);

// })
// .catch(error =>{
//     console.log(error);
// })


// db.result(`INSERT INTO restaurant VALUES ('Chilis', 13, 3, 'American', 'pasta', 'Y', '2019-01-01')`)
// .then(result =>{
//     console.log(result);
// })

db.result(`INSERT INTO restaurant VALUES ($1, $2, $3, $4, $5, $6, $7)`, ['Chilis', 12, 2, 'Tex-Mex', 'pasta', 'Y', '2019-01-02']) //protects from SQL injection
.then(result =>{
    console.log(result);
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
});