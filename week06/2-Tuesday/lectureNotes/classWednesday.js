// let div = document.addEventListener("click", ()=>{});

// // Javascript = single threaded language.. C++ = multi-threaded

// let arr = [3,4,5,6];

// arr.map() // synchronis call back

// setTimeout(cb, 1000) //arguments (callback, time increment)... depends on browser


// execute fib (may take a while), then console log outside will execute, then clg inside of 
// setTimeout.  Even thought timer is zero, it was on event loop, which has to wait for
// callstack to clear.
setTimeout(() => {
    console.log('inside of setTime out')
}, 0)

function fib(n){
    if(n <2){
        return 1
    }
    return fib(n-2) + fib(n-1)
}

console.log(fib(40))
console.log('outside of SetTime out');


// function display(data) {
//     console.log(data);
//   }
//   const futureData = fetch("https://twitter.com/veronica/tweets/");
//   futureData.then(display); // Attaches display functionality
//   console.log("Me First");