import {useState} from 'react';



const TextChange = () => {
    const [text, setText] = useState('Generic')
  return (
    <div>
      <button onClick={()=> setText('Name Brand')}>Generic or Name brand?</button>
      <h4>{text}</h4>
    </div>
  )
}

export default TextChange;
