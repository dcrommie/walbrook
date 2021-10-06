import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
const { detect } = require("detect-browser")
const browser = detect()

const PrivacyPolicyCredit = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPolicyCreditQuery {
      markdownRemark(
        fileAbsolutePath: { regex: "/privacy-policy-credit.md/" }
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

  const onClick = () => {
    setTimeout(function () {
      window.print()
    }, 100)
  }

  return (
    <div>
      <SEO title="PrivacyPolicyCredit" />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <div className="privacy-title">
        <div className="container">
          <h1>Privacy Policy Credit</h1>
        </div>
      </div>
      <div className="container">
        <div
          className="privacy-content"
          dangerouslySetInnerHTML={createMarkup(
            data.markdownRemark.frontmatter.policy
          )}
        ></div>

        {browser && browser.name === "firefox" ? (
          <div></div>
        ) : (
          <div className="no-print">
            <button
              onClick={onClick}
              className="main-button"
              style={{ marginBottom: "50px" }}
            >
              Print
            </button>
          </div>
        )}
      </div>

      <div className="no-print">
        <Footer />
      </div>
    </div>
  )
}

export default PrivacyPolicyCredit
