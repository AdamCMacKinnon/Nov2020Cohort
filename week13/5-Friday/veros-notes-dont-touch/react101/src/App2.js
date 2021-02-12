import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import './assets/styles/global.css'; 
import CardList from './components/CardList';
import data from './components/Card/cardContacts'


class App2 extends Component {
  
  
  render() {
    let contactsArr= data.map(contact =>{
        return <Card name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email} />
    })
    return <>
    <div>
      <h1 className="heading">My Contacts</h1>
      {contactsArr}

    </div>
      {/* <div className="bg-purple">
        Hello World
      </div>
      <div >

      </div>
        <Container fluid>

            <Row>
                
                    <CardList />
               
            </Row>

        </Container> */}
    </>;
  }
}

const styles={
  purple: {
    color: 'orange',
  }
}

export default App2;
