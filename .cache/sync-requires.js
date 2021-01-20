const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\src\\pages\\about.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\src\\pages\\using-typescript.tsx"))),
  "component---src-templates-blog-list-js": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\src\\templates\\blog-list.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("C:\\Users\\thoma\\Documents\\Development\\my-blog\\src\\templates\\blog-post.js")))
}

