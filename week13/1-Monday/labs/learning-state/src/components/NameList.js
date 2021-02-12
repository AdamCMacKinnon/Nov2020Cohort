import React, { Component } from 'react'

class NameList extends Component {
  render() {
      let filteredData = this.props.data.filter(nameObj =>{

        return nameObj.name.toLowerCase().includes(this.props.searchVal);
      })
    return (
        
      <>

        <ul>
            {filteredData.map(names =>(
                <li className={names.sex}>{names.name}</li>
            ))}
        </ul>

      <ul>
        {this.props.data.map(names =>(
            <li className={names.sex}> {names.name}</li>
        ))}
        </ul>
      </>
    )
  }
}

export default NameList
