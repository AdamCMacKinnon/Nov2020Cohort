const { getMaxListeners } = require('process');
const { REPL_MODE_SLOPPY } = require('repl');
let db = require('./models')

// db.user.findAll()
// .then(records =>{
//     records.forEach(record =>{
//         console.log(record.id, record.firstName, record.lastName);
//     })
// })

// db.user.findAll({where: {lastName: 'Lino'}})
// .then(records =>{
//     console.log(records[0].firstName, records[0].lastName);
// })

// db.user.destroy({where: {id: 2}})
// .then(numRowsDeleted =>{
//     if(numRowsDeleted >=1){
//         console.log(`${numRowsDeleted} rows have been DESTROYED!!!`);
//     }
// })

// db.user.update({lastName: 'McKinnon'}, {where: {id: 4}})

// db.user.create({
//     firstName: 'Adam', 
//     lastName: 'MacKinnon',
//     email: 'adam@me.com'
// });

// db.user.create({
//     firstName: 'Veronica',
//     lastname: 'Lino',
//     email: 'veronica@me.com'
// });

// db.user.create({
//     firstName: 'Andrea',
//     lastName: 'Myers',
//     email: 'andrea@me.com'
// });

// db.user.create({
//     firstName: 'Joe',
//     lastName: 'Stocks',
//     email: 'joe@me.com'
// });


db.blogs.findAll({
    include: [{
        model: db.user,
        required: true,

    }]
})
.then(records =>{
    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})


