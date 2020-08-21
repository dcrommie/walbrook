import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.css"
import career from '../images/career.svg'
import life from '../images/life.svg'
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
      <div>
      <SEO title="About" />
      <Header />
      </div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <div>
      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="main-content-text">
              <h1>{data.markdownRemark.frontmatter.title}</h1>
              <p style={{ maxWidth: "572px" }} className='text-about'>
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
                <img src={career} alt="career" />
              </div>
              <h3> {data.markdownRemark.frontmatter.careertitle}</h3>
              <p>{data.markdownRemark.frontmatter.careerdescription}</p>
            </div>
            <div className="about-us">
              <div className="about-image">
                <img src={life} alt="life" />
              </div>
              <h3> {data.markdownRemark.frontmatter.lifetitle}</h3>
              <p>{data.markdownRemark.frontmatter.lifedescription}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default About
