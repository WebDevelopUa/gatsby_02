# GatsbyJS 3 (Static site generator)

### Simple pet-project generated using [gatsby-starter-hello-world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/) starter

* ## [DEMO link of Front-end]()
* ## [Back-end link]()

- [Gatsby 3.0](https://www.gatsbyjs.com)
- [Quick Start](https://www.gatsbyjs.com/docs/quick-start)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/?v=3)
- [Hello world starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins/)
- [React icons](https://react-icons.github.io/react-icons/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
- [Migrating from gatsby-image to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/)
- [Gatsby Image plugin](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage)
- [Completely Free online photo editing](https://www10.lunapic.com/editor/)
- []()

-----

Requirements:

- [Node.js](https://nodejs.org/uk/)
- [Strapi](https://strapi.io)
- [Formspree](https://formspree.io) & feel free today!
- [Favicon](https://favicon.io/favicon-generator/)
- [Netlify](https://www.netlify.com)

-----

### Run in terminal

``` 
npm i
```

### Or install Gatsby project manually:

``` 
npm i -g gatsby-cli
gatsby --version
npm install -g npm@7.10.0
gatsby new gatsby-starter-hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
gatsby clean
gatsby develop
```

### Check the result:

- [localhost:8000](http://localhost:8000)
- [localhost:8000/___graphql](http://localhost:8000/___graphql)

-----
-----

# Kick back & Relax

-----
-----

Make sure such content-types exist in your Strapi application. Or replace/delete them in ```gatsby-config.js```

```javascript
{
  resolve: `gatsby-source-strapi`,
    options
:
  {
    apiURL: `http://localhost:1337`,
      queryLimit
  :
    1000, // Default to 100
      // contentTypes: [`jobs`, `projects`, `blogs`, ],
      //singleTypes:[`about` ]
      contentTypes
  :
    [`jobs`, `projects`, `blogs`],
      singleTypes
  :
    [`about`],
  }
,
}
,
```
