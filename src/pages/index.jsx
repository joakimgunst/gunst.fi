import React from 'react'
import Link from 'gatsby-link'
import '../styles/front.scss'
import mailIcon from '../images/envelope-square-solid.svg'
import linkedInIcon from '../images/linkedin-brands.svg'
import Layout from '../components/layout'

const Page = () => (
  <Layout>
    <div className="front">
      <h1 className="front-name">Joakim Gunst</h1>

      <div className="front-links">
        <Link className="front-link" to="/cv">
          Curriculum vitae
        </Link>
      </div>

      <div className="front-icons">
        <a className="front-icon" href="mailto:joakim.gunst@gmail.com">
          <img src={mailIcon} alt="Email" />
        </a>

        <a className="front-icon" href="https://fi.linkedin.com/in/joakimgunst">
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  </Layout>
)

export default Page
