import React from 'react'
import '../styles/base.css'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

const Layout = ({ children }) => (
  <div>
    <Helmet
      defaultTitle="Joakim Gunst"
      titleTemplate="%s – Joakim Gunst"
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    >
      <html lang="en" />
      <meta
        name="description"
        content="Personal and professional web site for Joakim Gunst"
      />
    </Helmet>
    {children}
  </div>
)

export default Layout
