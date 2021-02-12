import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = (props) => {
  return (
    <>
    <Header />
    <br></br>
      {props.children}

      <Footer />
    </>
  )
}

export default BaseLayout
