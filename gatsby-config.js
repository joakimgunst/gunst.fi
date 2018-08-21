module.exports = {
  siteMetadata: {
    title: `Joakim Gunst`,
    siteUrl: `http://www.gunst.fi`,
    description: `Personal and professional web site for Joakim Gunst.`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Alegreya Sans\:400,700`, `Alegreya Sans SC`]
      }
    }
  ]
}
