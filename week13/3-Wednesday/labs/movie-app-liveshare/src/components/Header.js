import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/comment">Leave a Comment</Link>
    </>
  )
}

export default Header
