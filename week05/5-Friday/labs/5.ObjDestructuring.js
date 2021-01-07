// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// let mult =(x,y,z) => x*y*z

// console.log(mult(obj));
//300


/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


// var person1 = {
//     name: "Mike",
//     info: {
//         country: "Spain",
//         age: 23
//     },
//     postsQuantity: 100
// }

// var person2 = {
//     name: "Alice",
//     info: {
//         country: "Italy",
//         age: 25
//     }
// }

// let person = (obj) => {
//     let {name:n, info:{country:c, age:a} , postsQuantity:p} = obj;
//     console.log(`name ${n}, country ${c} age ${a} post quantity ${p=0}`);

// }

// console.log(person(person2));

// let add = (a=0,b=0) => { // 0 is "default".  basically if there's no variable setting a value, it takes the default as value.

//     return a + b
// }

// console.log(add());


// let sum = (...args) => {
//     if(args.length === 0) return 0;
//     if(args.length === 1) return args[0];
//     sum = args.reduce((acc,element) => acc + element, 0)
//     return sum
// }

// let result = sum(5);
// console.log(result);

let arr = [1,3,5]

let arrB = [...arr];

let arr2 = [10,20,40,...arr, 99, 90,];

console.log(arr2);

console.log(arr);

arrB[0] = 99;

console.log(arr, arrB);



//TERNARY STATEMENTS
// let a = 5;
// let b = 10;

// // if (b > a){
// //     console.log('a is less than b');
// // }


// // (condition) ? (true) : (false)
// b < a ? console.log('a is less than b') : console.log('a is greater than b');


// var arr = [1,2,3,4,5];

// let [a,b,c,d,e] = arr;

// console.log(a, arr);

//OBJECT DESTRUCTURING

// var luke = { occupation: 'jedi', 
// father: { 
//     fName: 'anakin',
//     lName: 'Skywalker' } };
// // var occupation = like[occupation];

// let {occupation:o, father:{fName:f, lName: l}} = luke;

// console.log(f,l);

