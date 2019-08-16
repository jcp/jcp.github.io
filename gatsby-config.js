module.exports = {
  siteMetadata: {
    author: `James C. Palmer`,
    description: `Entrepreneur, technologist and explorer.`,
    image: `https://pbs.twimg.com/profile_images/737610205819588608/_W04XnaU.jpg`,
    url: `https://jcp.io`,
    github: `https://github.com/jcp`,
    instagram: `https://instagram.com/jamespalmer`,
    linkedin: `https://linkedin.com/in/jamescroninpalmer`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/static`,
        name: `static`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-24192640-1'
      }
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '📛'
      }
    }
  ]
};
