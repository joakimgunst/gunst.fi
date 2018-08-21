import React from 'react'
import './index.scss'
import Navbar from '../components/navbar'
import Helmet from 'react-helmet'
import 'font-awesome/css/font-awesome.css'
import favicon from '../images/favicon.png'

export default ({ children }) => (
  <div>
    <Helmet
      title="Joakim Gunst"
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Navbar />
    {children()}
  </div>
)
