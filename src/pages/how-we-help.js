import React from "react"
import Image from "../components/image"
import Header from "../components/header"
import Footer from "../components/footer"
import Hero from "../components/hero"
import rectangle from "../images/Rectangle.svg"
import Form from "../components/form"

const HowWeHelp = () => {
  return (
    <div>
      <Header />
      <Hero
        heading="How we help"
        subtitle="Wealth, family, and legacy together like never before"
        alt="help"
        imageName="help.png"
      />

      <div className="container">
        <div className="parents">
          <div className="child">
            <div className="child-text">
              <h3>Investment Advisory</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image
                  alt="Investment Advisory"
                  name="Investment Advisory2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li>Risk profiling</li>
              <li>Asset allocation</li>
              <li>Portfolio construction</li>
              <li>Managed Account selection</li>
              <li>Ethical investment / ESG strategies</li>
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>Retirement Planning</h3>
              <div style={{ width: "35px", marginTop: "15px" }}>
                <Image
                  alt="Retirement Planning"
                  name="Retirement Planning2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li>Strategy reviews</li>

              <li>Asset protection & transfer</li>

              <li>Industry & retail superannuation</li>

              <li>Self Managed Superannuation (SMSF)</li>

              <li>Lump sum & income Stream strategies</li>
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>Wealth Creation</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image
                  alt="Wealth Accumulation"
                  name="Wealth Accumulation2.png"
                />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li>Cash flow planning</li>

              <li>Contribution strategies</li>

              <li>Tax efficient investment</li>

              <li>Geared investment strategies</li>
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>Risk Management</h3>
              <div style={{ width: "35px", marginTop: "15px" }}>
                <Image alt="Risk Management" name="Risk Management2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li>Life Insurance</li>

              <li>Trauma / TPD</li>

              <li>Income Protection</li>

              <li>Currency / Equity / Interest Rate Hedging</li>
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>Family Office</h3>
              <div style={{ width: "35px", marginTop: "8px" }}>
                <Image alt="Family Office" name="Family Office2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li> Setup and administration</li>

              <li>Asset allocation & risk monitoring overlays</li>

              <li>Cross border network of solution providers</li>

              <li>Alternative fund & co-investment opportunities</li>
            </ul>
          </div>
          <div className="child">
            <div className="child-text">
              <h3>Expatriates</h3>
              <div style={{ width: "35px", marginTop: "10px" }}>
                <Image alt="Expatriates" name="Expatriates2.png" />
              </div>
            </div>
            <hr />
            <ul className="child-list">
              <li>Currency hedging</li>

              <li>Inbound / outbound expatriate planning</li>

              <li>Cross border network of solution providers</li>

              <li>Multi-currency deposits, portfolios & lending</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-financial-advice how-we-help">
        <div className="container">
          <div className="help-content">
            <div className="help-text">
              <h3>How we help</h3>
            </div>
            <div className="help-parent">
              <div className="help-child">
                <img src={rectangle} alt="first" />
                <h4>Client-centric approach</h4>
                <p>
                  We understand that no two clients are the same and believe
                  that each client requires a tailored approach. We find that
                  this is essential when working with expatriates and complex
                  clients.
                </p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="second" />
                <h4>Advisory Framework</h4>
                <p>
                  We use a structured advisory framework to assist and advise
                  our clients across asset classes, structures and
                  jurisdictions, providing a cohesive solution that incorporates
                  all aspects of their wealth.
                </p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="Independence" />
                <h4>Independence</h4>
                <p>
                  Our comprehensive, flexible advice service is made possible by
                  our independence from financial product providers and a fair,
                  transparent flat fee structure.
                </p>
              </div>
              <div className="help-child">
                <img src={rectangle} alt="coordination" />
                <h4>Coordination</h4>
                <p>
                  Exposure to foreign pensions, active business assets, hedge
                  funds, private equity and direct real estate across multiple
                  countries calls for the coordination of professionals and
                  financial institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
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

export default HowWeHelp
