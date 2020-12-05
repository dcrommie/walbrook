import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Modal from "react-bootstrap/Modal"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Hero from "../components/hero"
import "../styles/landing.css"
import Form from "../components/form"

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query LandingQuery {
      markdownRemark(fileAbsolutePath: { regex: "/service-packages.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail
        }
      }
    }
  `)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h2> Get complimentary access to your personal wealth portal</h2>
          <div className="policy-check">
            <input type="checkbox" />
            <span>
              I have read and agree to the{" "}
              <Link to="/privacy" traget="_blank">
                Privacy Policy
              </Link>
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a
            target="_blank"
            href="https://myprosperity.com.au/accounts/account/register?cobrand=walbrookwealthmanagement"
            style={{ margin: "0 auto" }}
          >
            <button
              variant="primary"
              className="main-button"
              onClick={handleClose}
              style={{ margin: "0 auto" }}
            >
              Start Now
            </button>
          </a>
        </Modal.Footer>
      </Modal>
      <SEO title="Service Packages" />
      <Header header="#contact" />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <Hero
        heading={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        alt="help"
        imageName={data.markdownRemark.frontmatter.thumbnail.replace(
          "../src/images/",
          ""
        )}
      />

      <div className="packages">
        <div className="main-container">
          <h1>Our Wealth Service Packages </h1>
          <p>
            Personal advice on a single topic starts at $550 including GST. For
            ongoing support, we offer simple, transparent pricing on service
            packages to suit your needs.
          </p>
        </div>
        <div className="main-container">
          <div className="packages-parent">
            <div>
              <div className="packages-child" style={{ paddingBottom: "50px" }}>
                <h4>Clarify</h4>
                <p>
                  <b>Complimentary</b>
                </p>
                <p style={{ paddingTop: "16px" }}>
                  Clarify your current position and take control of your
                  financial journey with access to our personal wealth portal.
                </p>
                <hr />
                <ul>
                  <li>Wealth Portal ‘Starter’</li>
                  <li>Record and track property and investment valuations</li>
                  <li>Store essential details and documents, such as wills</li>
                  <li>
                    Invite other family members, your accountant and property
                    manager
                  </li>
                </ul>
                <button className="main-button" onClick={handleShow}>
                  Get complImentary access
                </button>
              </div>
              <p className="text-note">
                * All prices include GST. Transaction costs are not included in
                the Engage package. Third party costs not included in any
                packages.
              </p>
            </div>

            <div className="packages-child">
              <h4>ENGAGE</h4>
              <p>
                <b>$115 per month*</b>
              </p>
              <p style={{ paddingTop: "16px" }}>
                Already have a financial plan? Activate it with the support of
                general financial advice & coaching.
              </p>
              <hr />
              <ul>
                <li>
                  Wealth Portal 'Pro' <b>Learn more</b>
                </li>
                <li>Quarterly performance reporting and research updates</li>
                <li>Quarterly investment, super and tax updates</li>
                <li>Trade handling</li>
                <li>
                  Support with ad hoc financial queries and administration
                </li>
              </ul>
              <Link to="#contact">
                {" "}
                <button className="main-button">Contact Us</button>
              </Link>
              <div className="sec">
                <a href="https://outlook.office365.com/owa/calendar/WalbrookWealthManagement@walbrook.com.au/bookings/">
                  <button className="mobile ">book a conversation</button>
                </a>
              </div>{" "}
            </div>
            <div className="packages-child">
              <h4>ACCELERATE</h4>
              <p className="price">
                <b>$275 per month*</b>
              </p>
              <sup>min 12 months</sup>
              <p>
                Reach your goals with a comprehensive financial plan, clear
                targets and ongoing personal advice.
              </p>
              <hr />
              <ul>
                <li>Comprehensive financial plan</li>
                <li>Ongoing investment advice</li>
                <li>
                  Wealth Portal 'Pro' <b>Learn more</b>
                </li>
                <li>Quarterly performance reporting and research updates</li>
                <li>Contribution strategy reviews</li>
                <li>Pension strategy reviews</li>
                <li>Insurance strategy reviews</li>
              </ul>
              <Link to="#contact">
                <button className="main-button">Contact Us</button>
              </Link>{" "}
              <div className="sec">
                <a href="https://outlook.office365.com/owa/calendar/WalbrookWealthManagement@walbrook.com.au/bookings/">
                  <button className="mobile ">book a conversation</button>
                </a>
              </div>
            </div>
            <div className="packages-child">
              <h4>SUPPORT</h4>
              <p className="price">
                <b>From $400 per month*</b>
              </p>
              <sup>min 12 months</sup>
              <p>
                Assist all households in your family with an extensive,
                multi-generational personal financial advice service.
              </p>
              <hr />
              <ul>
                <li>Multi-generational approach</li>
                <li>Comprehensive financial plan (1 per household)</li>
                <li>Ongoing investment advice</li>
                <li>Wealth Portal 'Pro' (1 per household) Learn more</li>
                <li>Quarterly performance reporting and research updates</li>
                <li>Contribution strategy reviews</li>
                <li>Pension strategy reviews</li>
                <li>Insurance strategy reviews</li>
              </ul>
              <Link to="#contact">
                <button className="main-button">Contact Us</button>
              </Link>{" "}
              <div className="sec">
                <a href="https://outlook.office365.com/owa/calendar/WalbrookWealthManagement@walbrook.com.au/bookings/">
                  <button className="mobile ">book a conversation</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="packages video">
        <div className="main-container">
          <h1>Wealth Portal</h1>
          <p>
            Welcome to your new financial command centre. Set yourself up for
            success with the wealth portal’s organisation, analytics, and
            collaboration tools.
          </p>
          <div
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
              width: "80%",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/462506518"
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              autoPlay="true"
              allow=" fullscreen"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="packages points">
        <h1>Everything you need, in one place</h1>
        <p>Take control of your finances with a personal wealth portal</p>

        <div className="main-container">
          <div className="features">
            <div className="features-child ">
              <h6>Stay on target</h6>
              <p>
                Stay on top of your goals with monthly financial health checks
                delivered straight to your inbox. Get updates on your budgets,
                goals, and tax deductions.
              </p>
            </div>
            <div className="features-child">
              <h6>Build your A-Team</h6>
              <p>
                Invite family members and professionals, like your property
                manager and lawyer, to collaborate. Assign permissions to
                control what they can view or change.
              </p>
            </div>
            <div className="features-child">
              <h6>Keep your finances organised</h6>
              <p>
                From property and bank accounts to loan repayments, insurance,
                and estate planning, connect all aspects of your financial world
                in one place.
              </p>
            </div>
            <div className="features-child">
              <h6>Reach your goals</h6>
              <p>
                Planning to retire at 50? Buy a third property? Create a legacy
                for your family? Whatever your goals, the wealth portal can help
                you get there.
              </p>
            </div>
            <div className="features-child">
              <h6>Make smarter decisions</h6>
              <p>
                With powerful reports and purpose-built wizards like the Tax
                Assistant, the portal is full of tools to help make managing
                your finances a breeze.
              </p>
            </div>
            <div className="features-child">
              <h6>Track your saving</h6>
              <p>
                Whether you’re spending too much on travel, coffee, or shoes,
                your portal helps you manage your spending with easy to use
                cashflow and budgeting features.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="form" id="contact">
        <div className="container">
          <div className="main-form">
            <div className="form-text">
              <h2>Take care of your future today</h2>
              <p>Get in touch so we can get you started</p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
