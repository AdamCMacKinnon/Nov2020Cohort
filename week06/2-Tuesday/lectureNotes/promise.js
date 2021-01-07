


// fetch(url)
// .then()
// .then()
//.catch() if error, reject argument would pass to here.


// function fib(n){
//     if(n <2){
//         return 1
//     }
//     return fib(n-2) + fib(n-1)
// }

// let promise = new Promise((resolve,reject) =>{
//     if(true){
//         let result = fib(40);
//         resolve(result)

//     } else {
//         reject('failed');
//     }
// });

// promise.then((fibResult)=>{
//     console.log(fibResult);
//     return fibResult * 2
// })

// promise.then(mult2 => {
//     console.log(mult2);
// })

// promise.catch((error) =>{
//         console.log(error);
//     })


//     console.log('hello world');


// let fetch = new Promise((resolve, reject)=>{
//     const request = new XMLHttpRequest(); // XHR Object
//     request.onreadystatechange = function(){
//         if(this.readyState === 4){
//             resolve(this.responseText)
//         }
//         else if(this.status ===400){
//             reject('error: cannot fetch url')
//         }
            
//     }
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()
// });

// fetch.then(response=>{
//     return JSON.parse(response)
// })

// fetch.then(data =>{
//     console.log(data);
// })

// let arr = []


// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(result => result.json())
// .then(data => {
//     arr.push(data);
// })

let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');


Promise.all([p1,p2])
.then(respArr =>{
    let arr = [];
    arr.push(respArr[0].json())
    arr.push(respArr[1].json())
    return Promise.all(arr);
})
.then(data =>{
    console.log(data);
})


