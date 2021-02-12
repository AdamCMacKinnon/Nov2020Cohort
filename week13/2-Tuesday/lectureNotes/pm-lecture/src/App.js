// import React, {useState, useEffect} from 'react'






// const App = () => {

//   const initialCount = parseInt(window.localStorage.getItem('count')) || 0;

//   console.log(`Initial Count: ${initialCount}`);

//   const [count, setCount] = useState(initialCount);
//   const [count2, setCount2] = useState(0)

//   const handleChange = () => setCount(count + 1);
//   const handleChange2 = () => setCount(count2 + 1);

//   useEffect(()=>{
//     window.localStorage.setItem('count', count);
//     console.log('count has been updated');
//   }, [count])

//   return (
//     <div styles={{textAlign: 'center', paddingTop:'200px'}}>
//       {/* <button onClick={()=> setCount(count + 1)}>{count}</button> */}
//       <button onClick={handleChange}>{count}</button>
//       <button onClick={handleChange2}>{count2}</button>
//     </div>
//   )
// }

// export default App
