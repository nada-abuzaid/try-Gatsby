
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/nada/Projects/try-Gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/nada/Projects/try-Gatsby/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/nada/Projects/try-Gatsby/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nada/Projects/try-Gatsby/src/pages/index.js")),
  "component---src-pages-projects-index-jsx": preferDefault(require("/home/nada/Projects/try-Gatsby/src/pages/projects/index.jsx"))
}

