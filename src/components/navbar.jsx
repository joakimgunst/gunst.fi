import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.scss'

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarInner}>
      <Link to="/" className={styles.navbarBrand}>
        Joakim Gunst
      </Link>

      <Link
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/"
        exact={true}
      >
        CV
      </Link>

      <Link
        className={styles.link}
        activeClassName={styles.activeLink}
        style={{ marginRight: 'auto' }}
        to="/ansioluettelo"
      >
        Ansioluettelo
      </Link>

      <a className={styles.link} href="mailto:joakim.gunst@gmail.com">
        <i className="fa fa-envelope-square" />
        <span className="mobile-hide">Email</span>
      </a>

      <a className={styles.link} href="https://fi.linkedin.com/in/joakimgunst">
        <i className="fa fa-linkedin-square" />
        <span className="mobile-hide">LinkedIn</span>
      </a>
    </div>
  </nav>
)

export default Navbar
