import React from "react"
import PropTypes from "prop-types"
import "../styles/style.css"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/image"

class BottomBlogRollEdu extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blogroll-bg">
        <div className="container">
          <div className="sections-blogroll">
            <h2 className="insights-h2"> More Insights</h2>
            <section>
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="is-parent column is-6" key={post.id}>
                    <article>
                      <header>
                        <div className="blogroll-featured-image">
                          <Image
                            alt="family"
                            name={post.frontmatter.thumbnail.replace(
                              "../src/images/",
                              ""
                            )}
                            className="image-bottom"
                          />
                        </div>
                        <p className="post-meta">
                          <Link
                            className="title has-text-primary is-size-4"
                            to={`/blog/${post.frontmatter.path}`}
                          >
                            <h2> {post.frontmatter.blogtitle}</h2>
                          </Link>
                          <span className="">{post.frontmatter.date}</span>
                        </p>
                      </header>
                      <br />
                      <br />
                    </article>
                  </div>
                ))}
            </section>
          </div>
        </div>
      </div>
    )
  }
}

BottomBlogRollEdu.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BottomBlogRollEduQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
          filter: {
            frontmatter: { page: { ne: true }, blogpage: { ne: true } }
          }
        ) {
          edges {
            node {
              id
              frontmatter {
                path
                blogtitle
                thumbnail
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BottomBlogRollEdu data={data} count={count} />}
  />
)
