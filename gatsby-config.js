module.exports = {
  siteMetadata: {
    title: 'An IOHK Web Asset powered by Gatsby'
  },
  plugins: [
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `content`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Remove dead code
        pure: true
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        enabled: process.env.NODE_ENV !== 'production',
        sidebar: true,
        plugins: [
          'gatsby-tinacms-git',
          'gatsby-tinacms-remark'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IOHK Gatsby Starter',
        short_name: 'IOHK Starter',
        start_url: '/',
        background_color: '#131325',
        theme_color: '#131325',
        display: 'minimal-ui',
        icon_options: {
          purpose: 'maskable'
        }
      }
    },
    'gatsby-plugin-offline'
  ]
}
