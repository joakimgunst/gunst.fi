import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Page = () => (
  <Layout>
    <div style={{ margin: 20 }}>
      <h1>Page not found</h1>
      <p>I'm sorry. The page your looking for doesn't seem to be here.</p>
      <p>
        <Link to="/">Go to home page</Link>
      </p>
    </div>
  </Layout>
)

export default Page
