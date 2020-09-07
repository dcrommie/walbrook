import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"

const ThankYou = () => {
  return (
    <div>
      <SEO title="Thank you" />

      <Header header="/contact" />
      <div className="thankyou">
        <div className="container">
          <h2>Thank you for contacting us!</h2>
          <p>We will get back to you shortly.</p>
          <Link to="/">
            {" "}
            <button className="main-button">Visit Homepage</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ThankYou
