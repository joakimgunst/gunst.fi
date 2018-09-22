module.exports = {
  siteMetadata: {
    title: 'Joakim Gunst',
    siteUrl: 'http://gunst.fi'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joakim Gunst`,
        short_name: `Joakim Gunst`,
        start_url: `/`,
        background_color: `#4b4e50`,
        theme_color: `#4b4e50`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Alegreya Sans:400,400i,500,700']
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
