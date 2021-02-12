import React, {useHistory, useParams} from 'react-router-dom';


const Sample2 = () => {

    let history = useHistory();
    let { id }= useParams();

    const handleClick = () => {
        console.log('Logic for Sample 2');
        history.push('/')
    }
  return (
    <>
    <h2>Sample 2 Page</h2> <br></br>
    <h4>{id}</h4>
    <br></br>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default Sample2
