import React from "react"
import { Helmet } from "react-helmet"
import Form from "../components/form"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const Contact = () => {
  return (
    <div>
      <SEO title="Contact Us" />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
          media="print"
          onload="this.media='all'"
        />
      </Helmet>
      <Header header="#contact" />
      <div className="form" id="contact">
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>Take care of your future today</h2>
              <p style={{ margin: "0 auto", marginBottom: "32px" }}>
                Get in touch so we can get you started
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
