import React from 'react'
import Link from 'gatsby-link'
import styles from './navbar.module.scss'

console.log(styles)

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbarInner}>
      <Link to="/" className={styles.navbarBrand}>
        Joakim Gunst
      </Link>

      <div className={styles.navbarLinks}>
        <a href="mailto:joakim.gunst@gmail.com">
          <i className="fa fa-envelope-square" /> Email
        </a>
        <a href="https://fi.linkedin.com/in/joakimgunst">
          <i className="fa fa-linkedin-square" /> LinkedIn
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
