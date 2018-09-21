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

      <Link
        className="navbar-link"
        activeClassName="active"
        style={{ marginRight: 'auto' }}
        to="/ansioluettelo"
      >
        Ansioluettelo
      </Link>

      {/* <a className={styles.link} href="mailto:joakim.gunst@gmail.com">
        <i className="fa fa-envelope-square" />
        <span className="mobile-hide">Email</span>
      </a>

      <a className={styles.link} href="https://fi.linkedin.com/in/joakimgunst">
        <i className="fa fa-linkedin-square" />
        <span className="mobile-hide">LinkedIn</span>
      </a> */}
    </div>
  </nav>
)

export default Navbar
