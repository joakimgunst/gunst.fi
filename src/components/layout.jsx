import React from 'react'
import '../styles/base.scss'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

export default ({ children }) => (
  <div>
    <Helmet
      title="Joakim Gunst"
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    {children}
  </div>
)
