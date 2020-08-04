import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
  const data = useStaticQuery(graphql`
    query IndexQuery {
      markdownRemark(fileAbsolutePath: { regex: "/index.md/" }) {
        frontmatter {
          title
          subtitle
          thumbnail
          title2
          desc1
          desc2
          desc3
          services
          servicestitle
          service1
          service2
          service3
          service4
          service5
          service6
          advisorytitle
          advisorydesc
          reviews {
            review
            name
            pic
          }
          contacttitle
          contactdesc
        }
      }
    }
  `)

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
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.subtitle}</p>
                <button className="main-button">Contact Us</button>
              </div>
              <div className="main-content-image">
                <Image
                  alt="family"
                  name={data.markdownRemark.frontmatter.thumbnail.replace(
                    "../src/images/",
                    ""
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="main-financial-advice">
          <div className="container">
            <div className="financial-content">
              <div className="financial-text">
                <p>{data.markdownRemark.frontmatter.title2}</p>
              </div>
              <div className="financial-parent">
                <div className="financial-child">
                  <img src={first} alt="first" />
                  <p>{data.markdownRemark.frontmatter.desc1}</p>
                </div>
                <div className="financial-child">
                  <img src={second} alt="second" />
                  <p>{data.markdownRemark.frontmatter.desc2}</p>
                </div>
                <div className="financial-child">
                  <img src={third} alt="third" />
                  <p>{data.markdownRemark.frontmatter.desc3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-main">
          <div className="container">
            <div className="services-content">
              <div className="services-text">
                <p> {data.markdownRemark.frontmatter.services}</p>
                <h2> {data.markdownRemark.frontmatter.servicestitle}</h2>
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
                  <h3> {data.markdownRemark.frontmatter.service1}</h3>
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
                  <h3>{data.markdownRemark.frontmatter.service2}</h3>
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
                  <h3>{data.markdownRemark.frontmatter.service3}</h3>
                </div>
                <div className="service investment">
                  <div
                    className="service-image"
                    style={{ width: "47.85px", height: "41.85px" }}
                  >
                    <Image alt="Family Office" name="Family Office.png" />
                  </div>
                  <h3>{data.markdownRemark.frontmatter.service4}</h3>
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
                  <h3>{data.markdownRemark.frontmatter.service5}</h3>
                </div>

                <div className="service investment">
                  <div
                    className="service-image"
                    style={{ width: "44.4px", height: "39.5px" }}
                  >
                    <Image alt="Expatriates" name="Expatriates.png" />
                  </div>
                  <h3>{data.markdownRemark.frontmatter.service6}</h3>
                </div>
              </div>
              <button className="mobile">Learn More</button>
            </div>
          </div>
        </div>

        <section className="main-carousel">
          <div className="container">
            <div
              id="carouselTestimonial"
              className="carousel carousel-testimonial slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {data.markdownRemark.frontmatter.reviews.map((data, index) => (
                  <div
                    className={
                      index === 0
                        ? "carousel-item text-center active"
                        : "carousel-item text-center"
                    }
                  >
                    <div className="rounded ">
                      <Image
                        name={data.pic.replace("../src/images/", "")}
                        alt="First slide"
                      />
                    </div>

                    <p className="review mx-auto">{data.review}</p>
                    <h6 className="customer-detail">{data.name} </h6>
                  </div>
                ))}
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
        <section className="advisory">
          <div className="container">
            <div className="advisory-content">
              <div className="advisory-text">
                <h2>{data.markdownRemark.frontmatter.advisorytitle}</h2>
                <p>{data.markdownRemark.frontmatter.advisorydesc}</p>
                <button className="main-button">Learn More</button>
              </div>
              <div className="advisory-image">
                <Image alt="Advisory" name="advisory.png" />
              </div>
            </div>
          </div>
        </section>
        <div className="form">
          <div className="container">
            <div className="main-form">
              <div className="form-text">
                <h2>{data.markdownRemark.frontmatter.contacttitle}</h2>
                <p style={{ margin: "0 auto", marginBottom: "32px" }}>
                  {data.markdownRemark.frontmatter.contactdesc}
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
