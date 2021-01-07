
const nums = [2, -6, 83, 34, 67, -10, 38, 22, 20, 46, 99, 12, 19, 50];

// POSITIVE NUMBERS --------------------

// var positives = nums.filter(function(num){
//     return num > 0;
// });

// console.log(positives);

// EVEN NUMBERS ------------------------

// var evens = nums.filter(function(num){
//     return num %2 === 0;
// })

// console.log(evens);

// SQUARE THE NUMBERS -----------------------

// var squares = nums.map(function(num){
//     return num * num;
// })

// console.log(squares);

// CITIES 1 -----------------------

const cities = [
    {name: 'Los Angeles', temperature: 72.0},
    {name: 'Atlanta', temperature: 55.0},
    {name: 'Philadelphia', temperature: 40.0},
    {name: 'Houston', temperature: 69.0}
];

// var temps = cities.filter(function(obj){
//     return obj.name, obj.temperature >= 60.0;
// })

// console.log(temps);


//CITIES 2 ----------------------
// var emptyList = []
// var cityNames = cities.forEach(function(obj){
//     emptyList.push(obj.name)
// })

// console.log(emptyList);

// GOOD JOB LIST --------------------

const students = ['Adam', 'Andrea', 'Ian', 'Kanny', 'Caedel', 'Joe', 'Matthew R', 'Micah', 'Jordan', 'Jacob'];

// var congrats = students.forEach(function(name) {
//     console.log(`Good Job, ${name}!`);
// })

// SORT AN ARRAY -------------------

// var alphaNames = students.sort(); 

// console.log(alphaNames);

// SORT ARRAY 2 BY LENGTH -------------------

// sortStudents = students.sort(function(a, b) {
//     return a.length - b.length
// })

// console.log(sortStudents);

// SORT ARRAY 3 -------------------

//sort by the sum of the inner array
// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6],
//   ];
//   //arr = [4, 20, 9]
//   function sum(arr) {
//     let sumResult = arr.reduce(function (acc, currentValue) {
//       return acc + currentValue; // acc = acc + currentValue
//     }, 0);
//     return sumResult;
//   }
//   function sortArr(arr){
//       arr.sort(function(a, b){
//           return sum(a) - sum(b)  //a= 8,  b= 20
//       })
//   }
//   sortArr(arr)

// })

// Call 3 times ----------------------

// string = 'Hello World!'

// var threeTimes = function(string) {
//     console.log(string.repeat(3));

// }

// threeTimes(string);

// CALL N TIMES -----------------------------

// var nTimes = function(n) {
//     console.log(string.repeat(n));
// }

// nTimes(5,string);


// SUM AN ARRAY ----------------------------

// const numbers = [4, 7, 8, 20]; 

// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numbers.reduce(reducer));

// ACRONYM --------------------------------

// const string = ['Major', 'League', 'Baseball'];
// const reducer = (x) => x[0];
// console.log(string.reduce(reducer));
