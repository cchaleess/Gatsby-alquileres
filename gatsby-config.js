module.exports = {
  siteMetadata: {
    title: `Alquileres`,
    description: `Proyecto DAM 2021 - Alquileres`,
    author: `@carlosparedes`,
    siteUrl: `https://www.linkedin.com/in/carlos-paredes-65ba4890/`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,   
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },    `gatsby-transformer-sharp`,
   {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,    
        display: `minimal-ui`,
        icon: `src/images/iconos/gatsby-icon.png`,
      },
    }, 
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "pisos",
          "paginas",
          "opcions",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
