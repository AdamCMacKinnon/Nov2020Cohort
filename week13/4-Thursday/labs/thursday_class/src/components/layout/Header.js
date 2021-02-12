import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
      <Link className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" href="/forms">Features</Link>
      <Link className="nav-item nav-link" href="/liftingState">Lifting State </Link>
      <Link className="nav-item nav-link" href="/project_management">Project Management </Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
