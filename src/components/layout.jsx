import React from 'react'
import '../styles/base.scss'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

export default ({ children }) => (
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