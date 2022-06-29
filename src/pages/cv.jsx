import React from 'react'
import { withPrefix } from 'gatsby-link'
import Navbar from '../components/navbar'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import '../styles/page.scss'

const Page = () => (
  <Layout>
    <Helmet title="CV" />
    <div className="page-wrapper">
      <aside className="page-aside">
        <Navbar />
      </aside>
      <main className="page-main">
        <h1>Curriculum vitae</h1>

        <h2>Work experience</h2>

        <div>
          <h3>
            <a href="https://www.nitor.com/">Nitor</a>
          </h3>
          <h4>
            Senior Software Developer
            <span>10/2018 –</span>
          </h4>

          <p>
            I’m working as a consultant, developing quality software for our
            customers. My work has involved developing large-scale web
            applications and e-commerce sites for several customers. Although
            skilled as a full-stack developer, I’m most interested in the front
            end and have often adopted a frontend architect role in the team. My
            design background has helped me collaborate with designers in
            creating excellent user experiences. I have used technologies
            including JavaScript, TypeScript, React, Node.js, Next.js, Java,
            Spring Boot, PostgreSQL, and AWS. Internally at Nitor, I have
            founded Frontend Forum, a regular event to share frontend expertise.
          </p>
        </div>

        <div>
          <h3>
            <a href="https://www.rapal.com">Rapal</a>
          </h3>
          <h4>
            Software Developer & UX Designer
            <span>5/2007 – 10/2018</span>
          </h4>

          <p>
            I initially worked part-time at Rapal and switched to full-time
            after graduating in 2012. My work consisted of both user experience
            design and web frontend development. As a designer, I arranged close
            to one hundred user interviews and usability tests, created mockups,
            prototypes, and visual designs, and supported product management. As
            a developer, I was partly or wholly responsible for the front end of
            several web applications and also did some backend and mobile
            development. I got very familiar with agile software development
            practices. Technologies I used included HTML, CSS, JavaScript,
            TypeScript, Angular, React, Redux, React Native, C#, and .NET.
          </p>
        </div>

        <h2>Education</h2>

        <div>
          <h3>
            <a href="http://www.aalto.fi/en/">Aalto University</a>
          </h3>
          <h4>
            Master of Science (Tech.)
            <span>2005 – 2012</span>
          </h4>

          <p>
            I graduated with distinction with a master’s degree in Computer
            Science and Engineering, majoring in media technology with a focus
            on user interfaces and usability. My{' '}
            <a
              href={withPrefix('files/thesis.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              master’s thesis
            </a>{' '}
            examined interaction design in agile software development. I also
            did a special module in bioengineering.
          </p>
        </div>

        <h2>Languages</h2>

        <ul>
          <li>Finnish – excellent</li>
          <li>English – excellent</li>
          <li>Swedish – excellent</li>
          <li>German – basics</li>
        </ul>
      </main>
    </div>
  </Layout>
)

export default Page
