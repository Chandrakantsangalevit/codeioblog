const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/charlie/Desktop/gatsby-frontend/src/templates/post.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/charlie/Desktop/gatsby-frontend/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/charlie/Desktop/gatsby-frontend/src/pages/index.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/Users/charlie/Desktop/gatsby-frontend/src/pages/contact.mdx")))
}

