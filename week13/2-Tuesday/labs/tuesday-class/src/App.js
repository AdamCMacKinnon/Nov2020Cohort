import {useEffect, useState} from 'react';


function App() {

  const [count, setCount] = useState(0);
  useEffect(() =>{
    document.title = `${count} clicks`;
  })
  return (
    <div>
      <h3>Counter</h3>

<h5>{count}</h5>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      </div>
  );
}

export default App;

// FUNCITONAL COMPONENTS
// import { useState, useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [userName, setUserName] = useState(0);
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     // ASYNC CODE CAN GO IN HERE BUT NEEDS TO GO IN A FUNCTION THAT YOU CALL HERE AS WELL
//     console.log("useEffect has fired");
//   }, [count]);
//   // useEffect(() => {}, []);
//   // // componentDidMount mimicking
//   // useEffect(() => {});
//   // // called every time state is updated
//   // useEffect(() => {}, [stateVariableToTrack]);
//   // listen for a change in that state variable, run useEffect
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <h3>This is count: {count}</h3>
//       <button onClick={() => setCount(count + 1)}>Increment 🚀 </button> 
//       <button onClick={() => setCount(count - 1)}>Decrement 🙀</button>
//     </div>
//   );
// }
// export default App;
// // 1. React Hook useState
// // 2. React Hook useEffect
// // CLASS COMPONENTS
// // import React, { Component } from "react";
// // export default class App extends Component {
// //   this.state({
// //     count: 0,
// //     array: []
// //   })
// //   setCount = ()=> {
// //     this.setState({
// //       count: this.state.count + 1
// //     })
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1>Hello World</h1>
// //       </div>
// //     );
// //   }
// // }
