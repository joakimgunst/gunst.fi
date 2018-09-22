import React from 'react'
import Link from 'gatsby-link'
import '../styles/front.scss'
import MailIcon from '../images/envelope-square-solid.svg'
import LinkedInIcon from '../images/linkedin-brands.svg'
import Layout from '../components/layout'

const Page = () => (
  <Layout>
    <div className="front">
      <h1 className="front-name">Joakim Gunst</h1>

      <div className="front-links">
        <Link className="front-link" to="/cv">
          Curriculum vitae
        </Link>
        <Link className="front-link" to="/ansioluettelo">
          Ansioluettelo
        </Link>
      </div>

      <div className="front-icons">
        <a className="front-icon" href="mailto:joakim.gunst@gmail.com">
          <MailIcon />
        </a>

        <a className="front-icon" href="https://fi.linkedin.com/in/joakimgunst">
          <LinkedInIcon />
        </a>
      </div>

      <div className="front-attribution">
        Using <a href="https://fontawesome.com/license/free">Font Awesome</a>
      </div>
    </div>
  </Layout>
)

export default Page
