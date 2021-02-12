import React, {useState} from 'react'
import Clear from './Clear';
import DisplayInfo from './DisplayInfo';
import Increment from './Increment';


const ParentHooks = () => {
    
    const[count, setCount] = useState(0)

    const setIncrement = () =>{
            setCount (count + 1);
    }

    const clearCount = () =>{
        setCount (0)
    }



  return (
    <>
      <h1 className="text-center mt-5">Lifting State</h1>
      <div className="row">
          <div className="col-6 offset-3 formColor p-5 formFont">
              <DisplayInfo count={count}/>
              <Increment increment={setIncrement}/>
              <Clear clear={clearCount}/>


          </div>
      </div>
    </>
  )
}

export default ParentHooks
