import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Form from "../components/form"
import SEO from "../components/seo"

const Wholesale = () => {
  const data = useStaticQuery(graphql`
    query WholesaleQuery {
      markdownRemark(fileAbsolutePath: { regex: "/wholesale.md/" }) {
        frontmatter {
          title
          subtitle
          title2
          subtitle2
          contacttitle
          email
          contact
          listitems {
            title
          }
          thumbnail
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          as="style"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <SEO title="Wholesale" />
      <Header header="#contact" />
      <Hero
        heading={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        alt="Wholesale"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "../src/images/",
          ""
        )}
      />
      <div className="offer">
        <div className="container">
          <div className="offer-content">
            <div>
              <h3>{data.markdownRemark.frontmatter.title2}</h3>
            </div>
            <div>
              <h4>{data.markdownRemark.frontmatter.subtitle2}</h4>
              <ul className="offer-list">
                {data.markdownRemark.frontmatter.listitems.map(
                  (data, index) => (
                    <li key={index}>{data.title}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form" id="contact">
        <div className="container">
          <div className="main-form-wholesale">
            <div className="form-text-wholesale">
              <h2>{data.markdownRemark.frontmatter.contacttitle} </h2>
              <p>{data.markdownRemark.frontmatter.email}</p>
              <p>{data.markdownRemark.frontmatter.contact}</p>
            </div>
            <div className="wholesale-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Wholesale
