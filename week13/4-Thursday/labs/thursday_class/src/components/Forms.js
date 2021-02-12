import React, { Component } from 'react'
class Forms extends Component {
  constructor(){
    super();
    this.state = {
      textValue: "hello",
      isValid: false,
      selectValue: ''

    }
  }
//   handleChange = (e) => {
//     console.log(e.target.value);
//     this.setState({
//       textValue: e.target.value
//     })
//   }

  handleChange = (e) => {
    console.log(e.target.type);

    let targetType = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;

    this.setState({
        [name] : targetType
    }, ()=>{
        console.log(this.state);
    })
  }
  

//   handleCheckBox = (e) =>{
//     //   console.log(e.target.checked);

//       this.setState({
//           isValid: e.target.checked
//       })
//   }

//   handleDropDown = (e) => {
//     console.log(e.target.value);
//     this.setState({
//         selectValue: e.target.value
//     })
//   }
  
  handleForm = (e) => {
    e.preventDefault();

    console.log('Form was submitted');
  }
  

  render() {
    return (
      <>
        <h1 className="text-center mt-5">Class Based Forms</h1>
        <div className="row mt-5">
          <div className="col-6 offset-3 formColor formFont p-5">
            <form onSubmit={this.handleForm}>
              <input name="textValue"type="text" value={this.state.textValue} onChange={this.handleChange}/>
              current state {this.state.textValue}
              <br/>
              <input name="isValid" type="checkbox" checked={this.state.isValid}
                onChange={this.handleChange}
                />
              <br/>
              <select name="SelectValue" onChange={this.handleChange}>
                  <option value="New York">New York</option>
                  <option value="Houston">Houston</option>
                  <option value="Atlanta">Atlanta</option>
                  <option value="Seattle">Seattle</option>
                  <option value="SantaBarbara">Santa Barbara</option>
                  </select>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default Forms