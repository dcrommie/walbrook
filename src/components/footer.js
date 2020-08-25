import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import logo from "../images/logo-footer.svg"
import Image from "./image"
import "../styles/footer.css"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fileAbsolutePath: { regex: "/footer.md/" }) {
        frontmatter {
          office
          officestreet
          officecity
          postalgpo
          postalcity
          email
          number
          footerdesc1
          footerdesc2
          footerdesc3
          footerdesc4
        }
      }
    }
  `)
  return (
    <div>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="footer ">
              <div className="image">
                <div className="">
                  <img src={logo} alt="logo" />
                </div>
              </div>
              <div className="pages">
                <ul>
                  <Link to="/about">
                    <li>About us</li>
                  </Link>
                  <Link to="/what-we-do">
                    <li>What we do</li>
                  </Link>
                  <Link to="/how-we-do-it">
                    {" "}
                    <li>How we do it</li>
                  </Link>
                  <Link to="/wholesale">
                    {" "}
                    <li>Wholesale Clients</li>
                  </Link>
                  <Link to="/blog">
                    {" "}
                    <li>Insights</li>
                  </Link>
                </ul>
              </div>
              <div className="address">
                <h5>Office Address</h5>
                <p>{data.markdownRemark.frontmatter.office}</p>{" "}
                <p>{data.markdownRemark.frontmatter.officestreet}</p>
                <p>{data.markdownRemark.frontmatter.officecity}</p>
              </div>
              <div className="address">
                <h5>Postal Address</h5>
                <p>{data.markdownRemark.frontmatter.postalgpo}</p>
                <p>{data.markdownRemark.frontmatter.postalcity}</p>
              </div>
              <div className="contact">
                <h5>Contact</h5>
                <p>{data.markdownRemark.frontmatter.email}</p>
                <p>{data.markdownRemark.frontmatter.number}</p>
              </div>
            </div>
            <div className="terms">
              <div className="copyright" style={{ paddingRight: "102px" }}>
                <p style={{ maxWidth: "375px" }}>
                  ©2020 Walbrook Wealth Management. All rights reserved.
                </p>
              </div>
              <div className="policy-link">
                <Link to="/privacy">
                  <p style={{ maxWidth: "46px", color: "#FFFFFF" }}>Privacy</p>
                </Link>
              </div>
              <div className="policy-link">
                <Link to="/financial-services-guide">
                  <p style={{ color: "#FFFFFF", fontSize: "13px" }}>
                    Financial Services Guide (FSG)
                  </p>
                </Link>
              </div>
              <div className="cdc-policy">
                <Link to="/continuing-professional-development-policy">
                  <p style={{ maxWidth: "315px", color: "#FFFFFF" }}>
                    Continuing Professional Development (CPD) Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="policies">
            <div className="text">
              <p style={{ maxWidth: "340px" }}>
                {data.markdownRemark.frontmatter.footerdesc1}
              </p>
            </div>
            <div className="trademark">
              <div className="trademark-1">
                <Image
                  className="IMAGE"
                  alt="trademark chartered"
                  name="trademark-1.png"
                />
              </div>

              <div className="trademark-2">
                <Image alt="trademark tax" name="trademark-2.png" />
              </div>
            </div>
            <div className="text">
              <p>{data.markdownRemark.frontmatter.footerdesc2}</p>
            </div>
          </div>
          <div className="liability">
            <p>{data.markdownRemark.frontmatter.footerdesc3}</p>
            <p>{data.markdownRemark.frontmatter.footerdesc4}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
