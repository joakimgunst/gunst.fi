import React from 'react'

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">
        Joakim Gunst
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-collapse"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="mailto:joakim.gunst@gmail.com">
              <i className="fa fa-envelope-square" /> Email
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://fi.linkedin.com/in/joakimgunst"
            >
              <i className="fa fa-linkedin-square" /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
