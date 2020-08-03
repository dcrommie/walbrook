import React from "react"
import { graphql } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/style.css"

export const query = graphql`
  query($Slug: String!) {
    markdownRemark(frontmatter: { Slug: { eq: $Slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        Slug
        blogtitle
        author
        thumbnail
      }
    }
  }
`

const Blog = props => {
  return (
    {frontmatter !== null ? 
    <div>
      <Header />
      <div className="blogpost">
        <div className="blogpost-header">
          <div className="blogpost-color">
            <div className="container">
              <h1>{props.data.markdownRemark.frontmatter.blogtitle}</h1>
              <span>{props.data.markdownRemark.frontmatter.author}</span>
              <span> &bull; </span>
              <span className="">
                {props.data.markdownRemark.frontmatter.date}
              </span>
              <Image
                alt="featured-image"
                name={props.data.markdownRemark.frontmatter.thumbnail.replace(
                  "/images/",
                  ""
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div> : {}
  )
}

export default Blog
