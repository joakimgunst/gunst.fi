import React from 'react'
import Helmet from 'react-helmet'
import '../styles/base.scss'
import '../styles/skiapp.scss'

const Page = () => (
  <div>
    <Helmet title="Hiihtämään" />
    <div className="simple-wrapper">
      <h1>Hiihtämään Privacy&nbsp;Policy</h1>

      <p>
        <i>Updated January 26, 2019</i>
      </p>

      <p>
        Hiihtämään is an iOS and Android app that shows information about skiing
        tracks in the Helsinki region. The app asks for the user's location in
        order to show that location on the map. Granting permission to read the
        location is optional. The app doesn't gather any other data about the
        user. The app doesn't send any information about the user to third
        parties. If there are significant updates to this policy, the app will
        inform the user about the changes. In case you have questions, please
        contact <a href="mailto:joakim.gunst@gmail.com">Joakim Gunst</a>.
      </p>
    </div>
  </div>
)

export default Page
