// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("/Users/charlie/Desktop/gatsby-frontend/src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---src-pages-about-js": () => import("/Users/charlie/Desktop/gatsby-frontend/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/charlie/Desktop/gatsby-frontend/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-contact-mdx": () => import("/Users/charlie/Desktop/gatsby-frontend/src/pages/contact.mdx" /* webpackChunkName: "component---src-pages-contact-mdx" */)
}

