import React from "react"
import "../styles/style.css"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Form from "../components/form"

const About = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="main-content-text">
              <h1>Damien Crommie CA</h1>
              <p style={{ maxWidth: "572px" }}>
                Damien is the principal of Walbrook Wealth Management. He is a
                fellow of the Chartered Institute of Securities & Investment. As
                well as holding financial planning and investment qualifications
                in the UK and Australia, Damien is a Chartered Accountant and
                Registered Tax (Financial) Adviser.
              </p>
              <button className="main-button">Email Damien</button>
            </div>
            <div className="main-content-image">
              <Image alt="about" name="about.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-us" style={{ marginRight: "15px" }}>
              <div className="about-image">
                <Image alt="career" name="career.png" />
              </div>
              <h3>Career</h3>
              <p>
                During his career, Damien has provided investment advice and
                wealth management services to clients in Australia, the UK,
                Europe, the Middle East and Asia. He began working with private
                clients and their families in 2002 when he joined Grant Thornton
                Investment Management in Melbourne. Before founding the
                business, Damien was an Executive Director in the London office
                of Swiss wealth manager Julius Baer. He joined Julius Baer in
                2015 from Deutsche Asset & Wealth Management.
              </p>
            </div>
            <div className="about-us">
              <div className="about-image">
                <Image alt="life" name="life.png" />
              </div>
              <h3>Life</h3>
              <p>
                A keen cyclist, Damien used his time in Europe to ride The Alps,
                London-Zurich, London-Paris, London-Cologne and the
                Paris-Roubaix Challenge. He was a founding trustee of Akwaaba, a
                London based charity that provides support to refugees, asylum
                seekers and other migrants. Damien now lives in Melbourne with
                his wife and son.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
