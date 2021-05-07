# GatsbyJS 3 (Static site generator)

### Simple pet-project generated using [gatsby-starter-hello-world](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/) starter & [Strapi](https://strapi.io) Backend & [Formspree](https://formspree.io) contact form service

## [DEMO link of Frontend](https://gatsby-v3-strapi-frontend.netlify.app/) deployed on Netlify

- Image From External (CDN) Media Storage At [Cloudinary](https://cloudinary.com/)
- Backend for Content and About page => [GitHub repo](https://github.com/WebDevelopUa/gatsby_02-strapi_api)
  => [localhost:1337](http://localhost:1337)
- Backend for Contact page => [Formspree](https://formspree.io)
- [Frontend](https://gatsby-v3-strapi-frontend.netlify.app) deployed on Netlify => ```public``` folder

> [localhost:8000](http://localhost:8000) version of Frontend requires [localhost:1337](http://localhost:1337) => run Backend: [Back-end GitHub repo](https://github.com/WebDevelopUa/gatsby_02-strapi_api)

-----------

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
- [Strapi Quick Start Guide](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)
- [gatsby-source-strapi](https://www.npmjs.com/package/gatsby-source-strapi)
- [Getting Started with Gatsby](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/gatsby.html#create-a-gatsby-app)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-markdown](https://www.npmjs.com/package/react-markdown)
- [gatsby-plugin-webfonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts/)
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
- [Adding an SEO Component](https://www.gatsbyjs.com/docs/add-seo-component/)
- [Card Validator - Twitter cards](https://cards-dev.twitter.com/validator)

-----

Requirements:

- [Node.js](https://nodejs.org/uk/)
- [Strapi](https://strapi.io)
- [Formspree](https://formspree.io) & feel free today!
- [Netlify](https://www.netlify.com)
- [Favicon](https://favicon.io/favicon-generator/)

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

--------

# Deployment

Using CI + localhost Strapi backend:

``` 
15:06:33	error "gatsby-source-strapi" threw an error while running the sourceNodes lifecycle:
15:06:33	connect ECONNREFUSED 127.0.0.1:1337
15:06:33	
15:06:33	  Error: connect ECONNREFUSED 127.0.0.1:1337
15:06:33	
15:06:33	not finished source and transform nodes - 0.104s
15:06:34	npm ERR! code ELIFECYCLE
15:06:34	npm ERR! errno 1
15:06:34	npm ERR! gatsby-starter-hello-world@0.1.0 build: `gatsby build`
15:06:34	npm ERR! Exit status 1
15:06:34	npm ERR! 
15:06:34	npm ERR! Failed at the gatsby-starter-hello-world@0.1.0 build script.
15:06:34	npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
15:06:34	npm ERR! A complete log of this run can be found in:
15:06:34	npm ERR!     /vercel/.npm/_logs/2021-05-07T12_06_34_397Z-debug.log
```

So, you need to Deploy [backend project](https://github.com/WebDevelopUa/gatsby_02-strapi_api) first or Build project
locally and push build ```public``` folder to:

- [Netlify](https://app.netlify.com/)
- or
- [Vercel](https://vercel.com/)

-----
-----

# Kick back & Relax

-----
-----

Make sure such content-types exist in your Strapi application. Or replace/delete them in ```gatsby-config.js```
Make changes, restart the server

```
{  
  resolve: `gatsby-source-strapi`,
    options:  {
    apiURL: `http://localhost:1337`,
      queryLimit: 1000, // Default to 100
      contentTypes: [`jobs`, `projects`, `blogs`],
      singleTypes: [`about`],
  },
},
```

# [Strapi](https://strapi.io/) backend

### Clone the [repo](https://github.com/WebDevelopUa/gatsby_02-strapi_api) or Run in terminal in separate directory

``` 
npx create-strapi-app gatsby_02-strapi_api --quickstart
```

### Check the result:

[localhost:1337/admin](http://localhost:1337/admin)
