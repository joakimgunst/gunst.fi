import React from 'react'
import Link from 'gatsby-link'
import './navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="navbar-brand">
        Joakim Gunst
      </Link>

      <div className="navbar-links">
        <a className="nav-link" href="mailto:joakim.gunst@gmail.com">
          <i className="fa fa-envelope-square" /> Email
        </a>
        <a className="nav-link" href="https://fi.linkedin.com/in/joakimgunst">
          <i className="fa fa-linkedin-square" /> LinkedIn
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
