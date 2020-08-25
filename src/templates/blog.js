import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"
import BottomBlogRoll from "../components/bottom-blogroll"
import SEO from "../components/seo"
import NewsletterForm from "../components/newsletter-form"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        blogtitle
        author
        thumbnail
      }
    }
  }
`

const Blog = props => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <SEO title={props.data.markdownRemark.frontmatter.blogtitle} />
      <Header />

      <div className="blogpost">
        <div className="container">
          <div className="blogpost-header">
            <div className="blogpost-main">
              <h1>{props.data.markdownRemark.frontmatter.blogtitle}</h1>
              <span>{props.data.markdownRemark.frontmatter.author}</span>
              <span> &bull; </span>
              <span>{props.data.markdownRemark.frontmatter.date}</span>
              <div className="blogpost-image">
                <Image
                  alt="featured-image"
                  name={props.data.markdownRemark.frontmatter.thumbnail.replace(
                    "../src/images/",
                    ""
                  )}
                />
              </div>
            </div>
            <div className="large">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <div className="mobile-1">
          <NewsletterForm />
        </div>
      </div>

      <BottomBlogRoll />
      <Footer />
    </div>
  )
}

export default Blog
