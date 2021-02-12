import React, { Component } from 'react';
import { names } from "./data/index";
import {  } from "NameList";

class App2 extends Component {
  constructor(){
      super();

      this.state = {
          data: names,
          searchVal: ''
      }
  }
  handleEvent = (event) =>{
    this.setState({
        searchVal: event.target.value
    })
  }
  
    render() {

   const {data} = this.state;
    return (
      <>
      <input type="text" placeholder="type a name..">
          onChange={this.handleEvent}
          value={this.state.searchVal}
      </input>
        <NameList data={data} searchVal={this.state.searchVal} />
      </>
    )
  }
}

export default App2
