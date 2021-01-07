/// XHR --> internet
///CODE
///CODE
///CODE



// //like an event listener
// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if(this.readyState === 4){
//         //console.log(this.responseText);
//         let data = JSON.parse(this.responseText)
//         console.log(data);
//     }

// };

// request.open("GET", "https://jsonplaceholder.typicode.com/todos")

// request.send();

// let result = fetch("https://jsonplaceholder.typicode.com/todos");


// console.log(result);

// let fib = (n) => {
//     if (n<2){
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(50));

// let sum = 10;

// for(let i=0; i<10; i++);



//DISPLAYS FIRST, THIRD, THEN SECOND 
console.log('before set timeout')

setTimeout(() => {
    console.log('inside of set timeout')
},5000); //DELAYS CODE BY 5 SECONDS

console.log('outside of set timeout');
