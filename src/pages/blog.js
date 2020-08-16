import React from "react"
import { Helmet } from "react-helmet"

import BlogRoll from "../components/BlogRoll"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
        <SEO title="Insights" />
        <Header />
        <section className="insight-hero">
          <div className="container blog-container">
            <h1>Insights</h1>
          </div>
        </section>
        <section>
          <div className="blog">
            <BlogRoll />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
