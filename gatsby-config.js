module.exports = {
  siteMetadata: {
    title: "Boilerplate code - Nodejs, Laravel and Flask starters",
    author: "AppSeed",
    description: "Tested, production-ready boilerplates developed in Nodejs, Python and Php",
    siteUrl: `https://jamstack.appseed.us`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline'
  ],
}
