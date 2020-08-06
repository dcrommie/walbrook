import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/image"
import SideBlogRoll from "./side-blogroll"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        <div className="container">
          <div className="sections">
            <section>
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="is-parent column is-6" key={post.id}>
                    <article>
                      <header>
                        <div className="featured-image">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.frontmatter.path}
                          >
                            <Image
                              alt="family"
                              name={post.frontmatter.thumbnail.replace(
                                "../src/images/",
                                ""
                              )}
                            />
                          </Link>
                        </div>
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={post.frontmatter.path}
                          >
                            <h2> {post.frontmatter.blogtitle}</h2>
                            <span>{post.frontmatter.author}</span>
                            <span> &bull; </span>
                            <span className="">{post.frontmatter.date}</span>
                          </Link>
                        </p>

                        <p className="excerpt">{post.excerpt}</p>
                      </header>
                      <br />
                      <br />
                    </article>
                  </div>
                ))}
            </section>
            <section>
              <SideBlogRoll />
            </section>
          </div>
        </div>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { page: { ne: true } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                blogtitle
                author
                thumbnail
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
