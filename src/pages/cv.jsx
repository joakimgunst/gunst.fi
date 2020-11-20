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
            customers. My current project is a modern ecommerce site, where I
            focus primarily on frontend development, but also collaborate with
            designers in improving the UX and visual design of the site. Among
            the technologies used are TypeScript, React, Redux, Webpack,
            PostCSS, Java, Spring and AWS.
          </p>
        </div>

        <div>
          <h3>
            <a href="https://www.rapal.com">Rapal</a>
          </h3>
          <h4>
            User Experience Designer
            <span>4/2012 – 10/2018</span>
          </h4>

          <p>
            I started working full time after I graduated in 2012. My title was
            UX designer, but my work consisted of both UX design and web
            frontend development in about equal parts. As a designer, I arranged
            close to one hundred user interviews and usability tests. I did
            visual design, created mockups and prototypes, and supported product
            management in writing user stories. As a developer, I was partly or
            fully responsible for the front end in several web applications. I
            got very experienced with JavaScript, HTML and CSS, and used
            frameworks like Angular and React to create modern, responsive
            single-page applications. I also did some backend development with
            C# and ASP.NET. I worked as part of an agile team, so I got familiar
            with practices like refactoring, unit testing, code reviews,
            continuous integration and agile planning.
          </p>

          <h4>
            Software Developer
            <span>5/2007 – 3/2012</span>
          </h4>

          <p>
            I worked part time as a software developer with a focus on user
            interface design and frontend development. My tools were primarily
            HTML and CSS, but I also did some JavaScript development.
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
            I graduated with distinction with my master in Computer Science and
            Engineering. My major was in media technology with a focus on user
            interfaces and usability. I wrote my{' '}
            <a
              href={withPrefix('files/thesis.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              master's thesis
            </a>{' '}
            on interaction design in agile software development. My bachelor was
            in Automation and Systems Technology. I also did a special module in
            bioengineering.
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
