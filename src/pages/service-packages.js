import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Modal from "react-bootstrap/Modal"
import { Helmet } from "react-helmet"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
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
          packagestitle
          packagesdescription
          wealthportaltitle
          wealthportaldescription
          videolink
          servicestitle
          servicesdescription
          firstservicestitle
          firstservicesdescription
          secondservicestitle
          secondservicesdescription
          thirdservicestitle
          thirdservicesdescription
          fourthservicestitle
          fourthservicesdescription
          fifthservicestitle
          fifthservicesdescription
          sixthservicestitle
          sixthservicesdescription
          firstpackage
          firstpackageprice
          firstpackagedescription
          benefits1 {
            benefit
          }
          secondpackage
          secondpackageprice
          secondpackagedescription
          benefits2 {
            benefit
          }
          thirdpackage
          thirdpackageprice
          thirdpackagedescription
          benefits3 {
            benefit
          }
          fourthpackage
          fourthpackageprice
          fourthpackagedescription
          benefits4 {
            benefit
          }
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
          <h1>{data.markdownRemark.frontmatter.packagestitle} </h1>
          <p>{data.markdownRemark.frontmatter.packagesdescription}</p>
        </div>
        <div className="main-container">
          <div className="packages-parent">
            <div>
              <div className="packages-child" style={{ paddingBottom: "50px" }}>
                <h4>{data.markdownRemark.frontmatter.firstpackage}</h4>
                <p>
                  <b>{data.markdownRemark.frontmatter.firstpackageprice}</b>
                </p>
                <p style={{ paddingTop: "16px" }}>
                  {data.markdownRemark.frontmatter.firstpackagedescription}
                </p>
                <hr />
                <ul>
                  {data.markdownRemark.frontmatter.benefits1.map(
                    (data, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={createMarkup(data.benefit)}
                      ></li>
                    )
                  )}
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
              <h4>{data.markdownRemark.frontmatter.secondpackage}</h4>
              <p>
                <b>{data.markdownRemark.frontmatter.secondpackageprice}</b>
              </p>
              <p style={{ paddingTop: "16px" }}>
                {data.markdownRemark.frontmatter.secondpackagedescription}
              </p>
              <hr />
              <ul>
                {data.markdownRemark.frontmatter.benefits2.map(
                  (data, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={createMarkup(data.benefit)}
                    ></li>
                  )
                )}
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
              <h4>{data.markdownRemark.frontmatter.thirdpackage}</h4>
              <p>
                <b>{data.markdownRemark.frontmatter.thirdpackageprice}</b>
              </p>
              <p style={{ paddingTop: "16px" }}>
                {data.markdownRemark.frontmatter.thirdpackagedescription}
              </p>
              <hr />
              <ul>
                {data.markdownRemark.frontmatter.benefits3.map(
                  (data, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={createMarkup(data.benefit)}
                    ></li>
                  )
                )}
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
              <h4>{data.markdownRemark.frontmatter.fourthpackage}</h4>
              <p>
                <b>{data.markdownRemark.frontmatter.fourthpackageprice}</b>
              </p>
              <p style={{ paddingTop: "16px" }}>
                {data.markdownRemark.frontmatter.fourthpackagedescription}
              </p>
              <hr />
              <ul>
                {data.markdownRemark.frontmatter.benefits4.map(
                  (data, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={createMarkup(data.benefit)}
                    ></li>
                  )
                )}
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

      <div className="packages video" id="wealthportal">
        <div className="main-container">
          <h1>{data.markdownRemark.frontmatter.wealthportaltitle}</h1>
          <p>{data.markdownRemark.frontmatter.wealthportaldescription}</p>
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
              src={data.markdownRemark.frontmatter.videolink}
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
        <h1>{data.markdownRemark.frontmatter.servicestitle}</h1>
        <p>{data.markdownRemark.frontmatter.servicesdescription}</p>

        <div className="main-container">
          <div className="features">
            <div className="features-child ">
              <h6>{data.markdownRemark.frontmatter.firstservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.firstservicesdescription}</p>
            </div>
            <div className="features-child">
              <h6>{data.markdownRemark.frontmatter.secondservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.secondservicesdescription}</p>
            </div>
            <div className="features-child">
              <h6>{data.markdownRemark.frontmatter.thirdservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.thirdservicesdescription}</p>
            </div>
            <div className="features-child">
              <h6>{data.markdownRemark.frontmatter.fourthservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.fourthservicesdescription}</p>
            </div>
            <div className="features-child">
              <h6>{data.markdownRemark.frontmatter.fifthservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.fifthservicesdescription}</p>
            </div>
            <div className="features-child">
              <h6>{data.markdownRemark.frontmatter.sixthservicestitle}</h6>
              <p>{data.markdownRemark.frontmatter.sixthservicesdescription}</p>
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
