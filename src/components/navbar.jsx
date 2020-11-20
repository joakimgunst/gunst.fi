import React from 'react'
import Link from 'gatsby-link'
import '../styles/navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="navbar-brand">
        Joakim Gunst
      </Link>

      <Link className="navbar-link" activeClassName="active" to="/cv">
        CV
      </Link>
    </div>
  </nav>
)

export default Navbar
