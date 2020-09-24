import React from "react"
import PropTypes from "prop-types"
import "../styles/style.css"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/image"

class SideBlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <div className="sections-side-blog">
          <section>
            {posts &&
              posts.map(({ node: post }) => (
                <div className="" key={post.id}>
                  <article>
                    <header>
                      <p className="post-meta" style={{ marginBottom: "0px" }}>
                        <Link
                          className="title has-text-primary is-size-4"
                          to={`/insight/${post.frontmatter.path}`}
                        >
                          <h2
                            style={{
                              paddingTop: "0px",
                              fontfamily: "Inter",
                              fontWeight: "normal",
                              fontSize: "16px",
                              lineHeight: "160%",
                              paddingBottom: "8px",
                            }}
                          >
                            {" "}
                            {post.frontmatter.blogtitle}
                          </h2>
                        </Link>
                      </p>
                      <hr
                        style={{
                          border: "1px solid #9999C2",
                          marginBottom: "0px",
                        }}
                      />
                    </header>
                    <br />
                    <br />
                  </article>
                </div>
              ))}
          </section>
        </div>
      </div>
    )
  }
}

SideBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SideBlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 4
          filter: {
            frontmatter: { page: { ne: true }, educationpage: { ne: true } }
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
    render={(data, count) => <SideBlogRoll data={data} count={count} />}
  />
)
