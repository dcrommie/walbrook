// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
const path = require(`path`)

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve(`src/templates/blog.js`)

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`)
//     return
//   }

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: `${node.frontmatter.path}`,
//       component: blogPostTemplate,
//       context: {
//         path: node.frontmatter.path,
//       }, // additional data can be passed via context
//     })
//   })
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  const eduTemplate = path.resolve(`./src/templates/education.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { page: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })

  const results = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { page: { ne: true } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  results.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: eduTemplate,
      path: `/education/${edge.node.frontmatter.path}`,

      context: {
        slug: edge.node.frontmatter.path,
      }, // additional data can be passed via context
    })
  })
}
