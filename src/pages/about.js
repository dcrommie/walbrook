import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.css"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Form from "../components/form"
import SEO from "../components/seo"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
        frontmatter {
          title
          subtitle
          buttontext
          buttonemail
          careertitle
          careerdescription
          lifetitle
          lifedescription
          thumbnail
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="main-content-text">
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <p style={{ maxWidth: "572px" }}>
                {data.markdownRemark.frontmatter.subtitle}
              </p>
              <a href={"mailto:" + data.markdownRemark.frontmatter.buttonemail}>
                {" "}
                <button className="main-button">
                  {data.markdownRemark.frontmatter.buttontext}
                </button>{" "}
              </a>
            </div>
            <div className="main-content-image">
              <Image
                alt="about"
                name={data.markdownRemark.frontmatter.thumbnail.replace(
                  "../src/images/",
                  ""
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-us" style={{ marginRight: "15px" }}>
              <div className="about-image">
                <Image alt="career" name="career.png" />
              </div>
              <h3> {data.markdownRemark.frontmatter.careertitle}</h3>
              <p>{data.markdownRemark.frontmatter.careerdescription}</p>
            </div>
            <div className="about-us">
              <div className="about-image">
                <Image alt="life" name="life.png" />
              </div>
              <h3> {data.markdownRemark.frontmatter.lifetitle}</h3>
              <p>{data.markdownRemark.frontmatter.lifedescription}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
