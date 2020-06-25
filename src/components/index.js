const context = require.context("./", true, /\.\/[^/]+\/index\.js$/)

context.keys().forEach(filePath => {
  // Remove the './' and './svg' from the object key
  const componentName = filePath.replace(/^.+\/([^/]+)\/index\.js/, "$1")
  module.exports[componentName] = context(filePath).default
})
