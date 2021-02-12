import React, {useState} from 'react';

const FormsHooks = (props) => {

    const[value, setValue] = useState('');
    const[isValid, setIsValid] = useState(false);
    const[selectValue, setSelectValue] = useState('');

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(`Form Submitted`);
    }
  return (
    <>
      <h1 className="text-center mt-5">Forms With Hooks</h1>
      <div className="row mt-5">
          <div className="col-6 offset-3 formColor formFont p-5">
              <form onSubmit={handleForm}>
                  <input name="textValue"type="text" 
                  onChange={(e) =>setValue(e.target.value)}/><br/>
                  <input name="isValid" type="checkbox" /><br/>
                  <select name="selectValue">
                      <option value="NewYork">New York</option>
                      <option value="Atlanta">Atlanta</option>
                      <option value="Houston">Houston</option>
                      <option value="Seattle">Seattle</option>
                      <option value="SantaBarbara">Santa Barbara</option>
                  </select><br/><br/>
                  <input type="submit" />
              </form>

          </div>

      </div>
    </>
  )
}


export default FormsHooks
