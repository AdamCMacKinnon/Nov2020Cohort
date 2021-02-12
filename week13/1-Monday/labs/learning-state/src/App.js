import React, { Component } from 'react'

class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  handleChange = (event) => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleChangeDown = (event) =>{
    this.setState({
      count: this.state.count - 1
    })
  }
  

  render() {

    //bind, call, apply

    return (
      <>
        <button onClick = {this.handleChange}>+</button>
        <div>{this.state.count}</div>
        <button onClick = {this.handleChangeDown}>-</button>
      </>
    )
  }
}

export default App
