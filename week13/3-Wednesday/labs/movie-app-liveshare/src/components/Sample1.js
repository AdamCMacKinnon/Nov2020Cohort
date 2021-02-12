import React, { Component } from 'react'

class Sample1 extends Component {

    constructor(props){
        super();

        this.history = props.history;
    }

    componentDidMount(){
        
    }

    handleClick = () =>{
        console.log('inside handle click');
        this.history.push("/");
    }

  render() {
    return (
      <>
        Sample 1
        <button onClick={this.handleClick}>click me</button>
      </>
    )
  }
}

export default Sample1
