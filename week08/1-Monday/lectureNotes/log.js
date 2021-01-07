let names = {
    firstName: "James",
    lastName: "Bond",
    age: 100,
    info: function(info) {
        console.log(`Info ${info}`);
    },
    warning: function(warning){
        console.log(`Warning ${info}`);
    },
    warning: function(error){
        console.log(`Error ${info}`);
    }
}

let names2 = {
    firstName: "Spider",
    lastName: "Man"
}

module.exports = names;