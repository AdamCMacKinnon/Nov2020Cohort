import React, { Component } from 'react'
import Contacts from './components/Contacts';
import data from './data/contacts';
import Days from './components/Days';
import Dropdown from './components/Dropdown';
import ButtonComponent from './components/button';

class App extends Component {
  render() {
    console.log(data)
    let contacts = [{
      firstName: "Adam",
      lastName: "MacKinnon",
      phoneNum: 333-333-3333,
      email: "adam@me.com"}, 
    {
      firstName: "Ally",
      lastName: "Deeter",
      phoneNum: 444-444-4444,
      email: "ally@me.com"
      },
        {
          firstName: "Andrea",
          lastName: "Myers",
          phoneNum: 555-555-5555,
          email: "andrea@me.com"

        }
    ]
    
    let contactArr = data.map(contactObj =>{
      return <Contacts firstName={contactObj.first_name}
      lastName={contactObj.last_name} 
      phoneNum={contactObj.phone}
      email={contactObj.email}
      />
    })
    return (
      <>
      {contactArr}
      <Days />
      <Dropdown />
      <ButtonComponent />
{/* let name = 
    [<Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
    <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>,
    <Contacts firstName="Veronica" lastName="Lino" phoneNum="456-4332-3455" email="v@dc.com"/>
  ] */}

        <br />
      </>
    )
  }
}

export default App

