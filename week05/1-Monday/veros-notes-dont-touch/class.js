
// var b = 5;
// var a = 4;


// function add(a) {
//   //code block
//   //local scope for a = 89

//   var result = a + b; //89 + 5

//   return result;
// }

// //var addResult = add(4, 5);
// var addResult = add(a);

// console.log(addResult);


// (function greeting(arr){

//     for(var index = 0; index < arr.length; index++){

   
//         console.log(`hello ${arr[index]}`);

//     }


// })(["Andrea", "Adam"])

// var a = 6; //&56765 = 6

// var b = a; //&45dfd64 = 10


// console.log(a, b);

// b = 10;

// console.log(a, b);


// var arrA = [1, 4, 6, 8, 0]; //arrA &54fte43
// var arrB = [...arrA];  // arrB &74fte43


// console.log(arrA, arrB);

// arrB[0] = 99;

// console.log(arrA, arrB);


// var x = 1;

// if( x ===1){

//     x = 2;

//     console.log(x);
// }

// console.log(x);

var x = 1;

// x = "hello"

// console.log(x);

// const PI = 3.14;

// const arr = [1, 4, 6, 8, 9]
// arr[0] = 67;
// arr = "hello"


// console.log(arr);
// console.log(PI);

// PI = 3;

// for(let x = 0; x<= 10; x++){
//     console.log(x);
// }


// console.log('outside of for loop', x);


// var arr = [65, 45, 34, 12, 87, 43, 90];
// var newArray = [];

// newArray = arr.forEach(function(val, index){

//     if(index + 1 < arr.length){
//         console.log(val * arr[index + 1]);
//     }

  

// })

// console.log(newArray);


// var arr = [6, 4, 3, 2, 1];

// var newArr = arr.map(function(num){

//     return num*3;
// })

// console.log(newArr);


// var students = ["Andrea", "Kim", "Kanny", "Zach", "Claude", "Layne", "Ian", "Joe", "Matt P", "Matt R", "Matt C"]


// var newStudents = students.filter(function(student){

//     return student != "Layne"
// })

// console.log(newStudents);

// var greetingArr = students.map(function(student){

//     return `Hello ${student}`
// })

// console.log(greetingArr);


// var arr = [4, 8, 9, 10, 5, 7];

// var newArr = arr.filter(function(num){

//     return num >7;
// })

// console.log(newArr);


var arr = [4, 8, 9, 10, 5, 7, 2];

var sum = arr.reduce(function(acc, currentVal ){

    return acc + currentVal
}, 30)

console.log(sum);


var str = ["V", "e", "r", "o", "n", "i", "c", "a"]

var name = str.reduce(function(acc, currentVal){
    return currentVal + acc;  // "" + "eV" acc = acc + currentVal
}, "")

console.log(name);



var str = "Veronica";
var name = ""


// for(let char =0 ; char< str.length; char++){

//     // name += str[char]
//     name = str[char] + name;  + "reV" 
// }


// var sum = 0;
// arr.forEach(function(num){
//     sum += num
// })

// var eitherTrueOrFalse = arr.some(function(num){

//     return num > 20
// })

// console.log(eitherTrueOrFalse);


arr.forEach(function(obj){

    arr.unshift(45);
    
})




