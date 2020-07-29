import React from "react"
import "../styles/styles.css"
import "../styles/style.css"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import rectangle from "../images/Rectangle.svg"
import Form from "../components/form"
import FAQ from "../components/faq"

const AdvisoryFramework = () => {
  return (
    <div>
      <Header />
      <Hero
        heading="Advisory
        Framework"
        subtitle="Our advisory framework, supported by great technology and access to institutional-grade investment management, guides our conversations and actions from the outset.                      "
        alt="advisoryframework"
        imageName="advisoryframework.png"
      />
      <div className="container">
        <FAQ />
      </div>
      <div className="form">
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>Take care of your future today</h2>
              <p>
                Independent provider of financial advice to private clients and
                their families
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

export default AdvisoryFramework
