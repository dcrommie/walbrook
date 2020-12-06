import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import rectangle from "../images/rectangle.png"
import Form from "../components/form"
import SEO from "../components/seo"

const HowWeHelp = () => {
  const data = useStaticQuery(graphql`
    query HelpQuery {
      markdownRemark(fileAbsolutePath: { regex: "/help.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail

          helptitle3
          helplist3 {
            title
          }
          helptitle4
          helplist4 {
            title
          }
          helptitle5
          helplist5 {
            title
          }
          helptitle6
          helplist6 {
            title
          }
          helpmain
          help1
          helpdesc1
          help2
          helpdesc2
          help3
          helpdesc3
          help4
          helpdesc4
          helpnewtitle
          helpnewdesc
          helplasttitle
          helplasdesc
          contacttitle
          contactdesc
        }
      }
    }
  `)
  return (
    <div>
      <SEO title="What we do" />
      <Header header="#contact" />

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
        alt="help"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "../src/images/",
          ""
        )}
      />

      <div className="container">
        <div className="parents">
          <div className="child" style={{ background: "#000066" }}>
            <div className="child-text">
              <h3 style={{ color: "#F2F7F2" }}>
                {data.markdownRemark.frontmatter.helpnewtitle}
              </h3>
            </div>
            <p
              className="child-list"
              style={{
                color: "#F2F7F2",
                fontSize: "18px",
                lineHeight: "30.6px",
              }}
            >
              {data.markdownRemark.frontmatter.helpnewdesc}
            </p>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle3}</h3>
              <div className="image-child" style={{ marginTop: "10px " }}>
                <Image
                  alt="Wealth Accumulation"
                  name="Wealth Accumulation2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist3.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle4}</h3>
              <div
                className="image-child"
                style={{
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
              >
                <Image alt="Risk Management" name="Risk Management2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist4.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle5}</h3>
              <div className="image-child" style={{ marginTop: "8px" }}>
                <Image alt="Family Office" name="Family Office2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist5.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>{data.markdownRemark.frontmatter.helptitle6}</h3>
              <div className="image-child" style={{ marginTop: "6px" }}>
                <Image alt="Expatriates" name="Expatriates2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              {data.markdownRemark.frontmatter.helplist6.map((data, index) => (
                <li key={index}>{data.title}</li>
              ))}
            </ul>
          </div>
          <div
            className="child"
            style={{ background: "#000066", padding: "38px" }}
          >
            <div className="child-text">
              <h3
                style={{
                  color: "#F2F7F2",
                  width: "470px !important",
                  lineHeight: "44px",
                }}
              >
                {data.markdownRemark.frontmatter.helplasttitle}
              </h3>
            </div>
            <p
              className="child-list"
              style={{
                color: "#F2F7F2",
                fontSize: "18px",
                lineHeight: "30.6px",
              }}
            >
              {data.markdownRemark.frontmatter.helplasdesc}
            </p>
          </div>
        </div>
      </div>
      <div className="main-financial-advice how-we-help">
        <div className="container">
          <div className="help-content">
            <div className="help-text">
              <h3>{data.markdownRemark.frontmatter.helpmain}</h3>
            </div>
            <div className="help-parent">
              <div className="help-child">
                <img src={rectangle} alt="first" width="20px" />
                <h4>{data.markdownRemark.frontmatter.help1}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc1}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="second" width="20px" />
                <h4>{data.markdownRemark.frontmatter.help2}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc2}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="Independence" width="20px" />
                <h4>{data.markdownRemark.frontmatter.help3}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc3}</p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="coordination" width="20px" />
                <h4>{data.markdownRemark.frontmatter.help4}</h4>
                <p>{data.markdownRemark.frontmatter.helpdesc4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form" id="contact">
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>{data.markdownRemark.frontmatter.contacttitle}</h2>
              <p>{data.markdownRemark.frontmatter.contactdesc}</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HowWeHelp
