import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/styles.css"
import "../styles/style.css"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import rectangle from "../images/Rectangle.svg"
import Form from "../components/form"
import group1 from "../images/group1.svg"
import group2 from "../images/group2.svg"
import group3 from "../images/group3.svg"
import group4 from "../images/group4.svg"
import SEO from "../components/seo"

const AdvisoryFramework = () => {
  const data = useStaticQuery(graphql`
    query FAQQuery {
      markdownRemark(fileAbsolutePath: { regex: "/advisory.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail
          FAQ1
          answer1
          FAQ2
          answer2
          FAQ3
          answer3
          FAQ4
          answer4
          contacttitle
          contactdesc
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Advisory Framework" />
      <Header />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <Hero
        heading={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        alt="advisoryframework"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "../src/images/",
          ""
        )}
      />
      <div className="container">
        <div className="main-faq">
          <div class="custom-accordionss">
            <div class="accordions">
              <input type="checkbox" id="chck1" />
              <label class="tab-label" for="chck1">
                <div>
                  <h3>01</h3>
                  <h2>{data.markdownRemark.frontmatter.FAQ1}</h2>
                </div>
                <div class="acc-icon">
                  <img src={group1} />
                </div>
              </label>
              <div class="tab-contents">
                {data.markdownRemark.frontmatter.answer1}
              </div>
            </div>
            <div class="accordions">
              <input type="checkbox" id="chck2" />
              <label class="tab-label" for="chck2">
                <div>
                  <h3>02</h3>
                  <h2>{data.markdownRemark.frontmatter.FAQ2}</h2>
                </div>
                <div class="acc-icon">
                  <img src={group2} />
                </div>
              </label>
              <div class="tab-contents">
                {data.markdownRemark.frontmatter.answer2}{" "}
              </div>
            </div>
            <div class="accordions">
              <input type="checkbox" id="chck3" />
              <label class="tab-label" for="chck3">
                <div>
                  <h3>03</h3>
                  <h2>{data.markdownRemark.frontmatter.FAQ3}</h2>
                </div>
                <div class="acc-icon">
                  <img src={group3} />
                </div>
              </label>
              <div class="tab-contents">
                {data.markdownRemark.frontmatter.answer3}{" "}
              </div>
            </div>
            <div class="accordions">
              <input type="checkbox" id="chck4" />
              <label class="tab-label" for="chck4">
                <div>
                  <h3>03</h3>
                  <h2>{data.markdownRemark.frontmatter.FAQ4}</h2>
                </div>
                <div class="acc-icon">
                  <img src={group4} />
                </div>
              </label>
              <div class="tab-contents">
                {data.markdownRemark.frontmatter.answer4}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form" id='contact'>
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>{data.markdownRemark.frontmatter.contacttitle}</h2>
              <p>{data.markdownRemark.frontmatter.contactdesc} </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AdvisoryFramework
