import React from "react"

import BlogRoll from "../components/BlogRoll"
import Header from "../components/header"
import Footer from "../components/footer"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="insight-hero">
          <div className="container">
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
