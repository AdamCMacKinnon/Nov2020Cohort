// function add(a,b) {
//     var result = a + b 
//     return a + b

// }

// var addResult = add(4,5)

// console.log(addResult)

// self invoking function

// (function greeting(arr) {
//     for(var index = 0; index < arr.length; index++){
//         console.log(`hello ${arr[index]}`);
//     }
    
    

// })(['Adam', 'Andrea'])

// var a = 6;

// var b = a;

// console.log(a,b);

// b = 10;

// console.log(a,b);

// ... = spread operator.  Changes address for variables, so if you change one (see above), it won't change the other.

// var x = 1;

// const pi = 3.14;

// for(let x = 0; x <10; x++) {
//     console.log(x);
// }

// console.log('outside of for loop', x);

// let = block scope variable = only valid for time that it's in the block.  Will revert back to original assignment once used.
// const = constant variable. variable and data types can't be changed, but values can.  So you can't change an array to a string, but you can change the values of an index



// var arr = [34, 5, 81, 74, 10 , 2 , 99];
// var newArray = [];

// arr.forEach(function(val){
//     console.log(val);

// })


// console.log(newArray);

// var arr = [5, 7, 98, 45, 34];

// var newArray = arr.map(function(num){
//     return num*3
// })
// console.log(newArray);


// //USE OF FILTER 
// var students = ['Adam', 'Kim', 'Kanny', 'Claude', 'Ian', 'Layne', 'Joe', 'Jordan', 'Micah', 'Matt C', 'Matt R'];

// var newStudents = students.filter(function(student){
//     return student != 'Ian'
// })

// console.log(newStudents);

// var greetingArr = students.map(function(student){
//     return `Hello ${student}`
// })

// console.log(greetingArr);

//USE OF "SOME"

// var arr = [4, 67, 3, 89, 3, 10, 12];

// var eitherTrueOrFalse = arr.some(function(num){
//     return num > 50
// })

// console.log(eitherTrueOrFalse);

var arr = [3, 5, 7, 38, 59, 27, 17, 88, 65, 10];

var sum = arr.reduce(function(acc, currentVal){ // acc = accumulator
    return acc + currentVal

})

console.log(sum);

var str = ['A', 'd', 'a', 'm']
var name = str.reduce(function(acc, currentVal){
    return acc + currentVal
}, '')

console.log(name);

