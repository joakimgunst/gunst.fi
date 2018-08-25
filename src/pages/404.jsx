import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/page.module.scss'

const Page = () => (
  <div className={styles.container}>
    <main>
      <h1>Page not found</h1>
      <p>I'm sorry. The page your looking for doesn't seem to be here.</p>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </main>
  </div>
)

export default Page
