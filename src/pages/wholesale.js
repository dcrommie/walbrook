import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Form from "../components/form"

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
      <Header />
      <Hero
        heading={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        alt="Wholesale"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "/images/",
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
      <div className="form">
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
