import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const ContinuingProfessionalDevelopmentPolicy = () => {
  const data = useStaticQuery(graphql`
    query CPDQuery {
      markdownRemark(
        fileAbsolutePath: {
          regex: "/continuing-professional-development-policy.md/"
        }
      ) {
        frontmatter {
          policy
        }
      }
    }
  `)
  const toHTML = value =>
    remark().use(recommended).use(remarkHtml).processSync(value).toString()

  function createMarkup(data) {
    const dataHtml = toHTML(data)

    return { __html: dataHtml }
  }

  return (
    <div>
      <SEO title="CPD Policy" />
      <Helmet header="/contact">
        <link
          rel="preload"
          as="style"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <div className="privacy-title">
        <div className="container">
          <h1>CPD Policy</h1>
        </div>
      </div>
      <div className="container">
        <div
          className="privacy-content"
          dangerouslySetInnerHTML={createMarkup(
            data.markdownRemark.frontmatter.policy
          )}
        ></div>
      </div>
      <Footer />
    </div>
  )
}

export default ContinuingProfessionalDevelopmentPolicy
