module.exports = {
  siteMetadata: {
    title: 'Joakim Gunst'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Alegreya Sans:400,700', 'Alegreya Sans SC']
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-1562738-18'
      }
    }
  ]
}
