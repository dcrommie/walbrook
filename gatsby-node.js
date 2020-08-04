// // You can delete this file if you're not using it
const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { page: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              Slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.frontmatter.Slug}`,

      context: {
        Slug: edge.node.frontmatter.Slug,
      }, // additional data can be passed via context
    })
  })
}
