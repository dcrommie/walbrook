import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"
import { Helmet } from "react-helmet"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import first from "../images/1.svg"
import second from "../images/2.svg"
import third from "../images/3.svg"
import Form from "../components/form"

const IndexPage = () => {
  return (
    <div>
      <div>
        {" "}
        <Header />
      </div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>

      <div>
        <div className="main">
          <div className="container">
            <div className="main-content">
              <div className="main-content-text">
                <h1>Plan. Invest. Protect.</h1>
                <p>Independent financial advice and wealth management</p>
                <button>Contact Us</button>
              </div>
              <div className="main-content-image">
                <Image alt="family" name="family.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="main-financial-advice">
          <div className="container">
            <div className="financial-content">
              <div className="financial-text">
                <p>
                  Independent provider of financial advice to private clients
                  and their families
                </p>
              </div>
              <div className="financial-parent">
                <div className="financial-child">
                  <img src={first} alt="first" />
                  <p>
                    Our investment philosophy have origins in global wealth
                    management and an open architecture approach to financial
                    advice.
                  </p>
                </div>
                <div className="financial-child">
                  <img src={second} alt="second" />
                  <p>
                    We focus on providing high-quality strategic advice,
                    incorporating investment, risk and lending solutions from
                    third parties in a cohesive plan.
                  </p>
                </div>
                <div className="financial-child">
                  <img src={third} alt="third" />
                  <p>
                    We use best practices to help you with planning,
                    investments, wealth protection and navigation of change over
                    the long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-main">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <p>Our services</p>
                <h2>Wealth, family, and legacy together like never before</h2>
                <button>Learn More</button>
              </div>
              <div className="services">
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{
                      width: "47.83px",
                      height: "43.27px",
                    }}
                  >
                    <Image
                      alt="Investment Advisory"
                      name="Investment Advisory.png"
                    />
                  </div>
                  <h3>Investment Advisory</h3>
                </div>
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{
                      width: "57.13px",
                      height: "29.49px",
                      marginBottom: "43px",
                    }}
                  >
                    <Image alt="Risk Management" name="Risk Management.png" />
                  </div>
                  <h3>Risk Management</h3>
                </div>
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{
                      width: "48.56px",
                      height: "29.43px",
                      marginBottom: "42px",
                    }}
                  >
                    <Image
                      alt="Retirement Planning"
                      name="Retirement Planning.png"
                    />
                  </div>
                  <h3>Retirement Planning</h3>
                </div>
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{ width: "47.85px", height: "41.85px" }}
                  >
                    <Image alt="Family Office" name="Family Office.png" />
                  </div>
                  <h3>Family Office</h3>
                </div>
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{ width: "48.2px", height: "41.21px" }}
                  >
                    <Image
                      alt="Wealth Accumulation"
                      name="Wealth Accumulation.png"
                    />
                  </div>
                  <h3>Wealth Accumulation</h3>
                </div>

                <div className="service investment">
                  <div
                    className="service-image"
                    style={{ width: "44.4px", height: "39.5px" }}
                  >
                    <Image alt="Expatriates" name="Expatriates.png" />
                  </div>
                  <h3>Expatriates</h3>
                </div>
              </div>
              <button className="mobile">Learn More</button>
            </div>
          </div>
        </div>
        <section className="advisory">
          <div className="container">
            <div className="advisory-content">
              <div className="advisory-text">
                <h2>Advisory Framework</h2>
                <p>
                  Our advisory framework, supported by great technology and
                  access to institutional-grade investment management, guides
                  our conversations and actions from the outset.
                </p>
                <button className="main-button">Learn More</button>
              </div>
              <div className="advisory-image">
                <Image alt="Advisory" name="advisory.png" />
              </div>
            </div>
          </div>
        </section>
        <section className="main-carousel">
          <div className="container">
            <div
              id="carouselTestimonial"
              className="carousel carousel-testimonial slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item text-center active">
                  <div className="rounded ">
                    <img
                      className="rounded-circle mx-auto d-block "
                      src="https://static01.nyt.com/images/2020/06/19/arts/19mason-review/19mason-review-mediumSquareAt3X.jpg"
                      alt="First slide"
                    />
                  </div>

                  <p className="review mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, consectetur adipiscing elit varius quam at,
                    luctus dui. Mauris magna metus consectetur adipiscing elit.
                  </p>
                  <h6 className="customer-detail">
                    Irena Robin, CEO at Google
                  </h6>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselTestimonial"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselTestimonial"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        <div className="form">
          <div className="container">
            <div className="main-form">
              <div className="form-text">
                <h2>Take care of your future today</h2>
                <p>
                  Independent provider of financial advice to private clients
                  and their families
                </p>
              </div>
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
