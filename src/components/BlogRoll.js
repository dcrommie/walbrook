import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "../components/image"
import SideBlogRoll from "./side-blogroll"
import addToMailchimp from "gatsby-plugin-mailchimp"

const BlogRoll = props => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")

  const onChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
        if (data.result === "success") {
          setSuccess("success")
        } else if (data.result === "error") {
          setSuccess("error")
        }
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  // 2. via `async/await`
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await addToMailchimp(email)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }

  const { data } = props
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
            <div>
              <div>
                <div className="newsletter" style={{ position: "unset " }}>
                  {success === "sucess" ? (
                    <div>
                      <h3>Thank you for subscribing</h3>
                    </div>
                  ) : success === "error" ? (
                    <div>
                      <h3>You are already subscribed</h3>
                    </div>
                  ) : (
                    <div>
                      <h3>Get the latest insights to your inbox</h3>
                      <form onSubmit={handleSubmit}>
                        <div
                          className="email-fields"
                          style={{ marginBottom: "32px" }}
                        >
                          <input
                            name="email"
                            onChange={onChange}
                            value={email}
                            className="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <button
                          className="main-button newsletter-button"
                          style={{ margin: "0 auto" }}
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
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
          filter: {
            frontmatter: { educationpage: { ne: true }, page: { ne: true } }
          }
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
