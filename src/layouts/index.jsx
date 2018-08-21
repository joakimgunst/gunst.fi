import React from 'react'
import './index.scss'
import Navbar from '../components/navbar'

export default ({ children }) => (
  <div>
    <Navbar />
    {children()}
  </div>
)
