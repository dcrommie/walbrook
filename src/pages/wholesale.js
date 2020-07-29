import React from "react"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Form from "../components/form"

const Wholesale = () => {
  return (
    <div>
      <Header />
      <Hero
        heading="For wholesale clients"
        subtitle="We offer specific opportunities available through our network only to Wholesale clients. We do this on a non-advised, introduction only basis to contacts with sufficient investment knowledge and experience who have previously expressed an interest."
        alt="Wholesale"
        imageName="wholesale.png"
      />
      <div className="offer">
        <div className="container">
          <div className="offer-content">
            <div>
              <h3>
                We offer an open-architecture service that meets the needs of
                both Retail and Wholesale private clients and their families
              </h3>
            </div>
            <div>
              <h4>
                We are typically asked to assist with introductions in the
                following areas
              </h4>
              <ul className="offer-list">
                <li> Seed funding</li>
                <li> Pre-IPO equity, on a primary or secondary basis</li>
                <li>
                  Private equity, on a fund or co-investment basis, including
                  secondaries
                </li>
                <li>Real estate, on a fund, direct or co-investment basis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="container">
          <div className="main-form-wholesale">
            <div className="form-text-wholesale">
              <h2>
                To be kept abreast of these opportunities, please contact us
              </h2>
              <p>info@walbrook.com.au</p>
              <p>+61 3 9013 6262</p>
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
