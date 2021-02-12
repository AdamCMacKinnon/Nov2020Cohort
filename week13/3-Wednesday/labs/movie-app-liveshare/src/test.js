// Use "Memoization" to cache data.
// saves API calls and stores data locally, rather than
// calling to the API over and over again for the same data.
// app will check local state before reachign out to API




let state = {
    tt4564: "data",
};

// this is called mutatting state... not good.
// state['tt6745'] = "new data"

let newState = {
    ...state,
    tt345 : 'new data'
}

console.log(state)
console.log(newState)