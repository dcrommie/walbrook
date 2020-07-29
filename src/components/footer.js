import React from "react"
import Image from "./image"
import "../styles/footer.css"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="footer ">
              <div className="image">
                <div className="image-footer">
                  <Image alt="logo footer" name="logo-footer.png" />
                </div>
              </div>
              <div className="pages">
                <ul>
                  <li>About us</li>
                  <li>how we help</li>
                  <li>Framework</li>
                  <li>Wholesale Clients</li>
                  <li>Insight</li>
                </ul>
              </div>
              <div className="address">
                <h5>Office Address</h5>
                <p>Level 16</p> <p>414 La Trobe Street</p>
                <p>Melbourne VIC 3000</p>
              </div>
              <div className="address">
                <h5>Postal Address</h5>
                <p>Gpo Box 1717</p>
                <p>Melbourne VIC 3000</p>
              </div>
              <div className="contact">
                <h5>Contact</h5>
                <p>info@walbrook.com.au</p>
                <p>+61 3 9013 6262</p>
              </div>
            </div>
            <div className="terms">
              <div className="copyright">
                <p>©2020 Walbrook Wealth Managemen. All rights reserved.</p>
              </div>
              <div className="policy-link">
                <p style={{ paddingRight: "12px" }}>Privacy</p>
                <p>Financial Services Guide (FSG)</p>
              </div>
              <div className="cdc-policy">
                <p>Continuing Professional Development (CPD) Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="policies">
            <div className="text">
              <p style={{ maxWidth: "340px" }}>
                Walbrook Wealth Management is a trading name of Barbacane
                Advisors Pty Ltd (ABN 32 626 694 139; Australian Financial
                Services Licence No. 512465).
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
              <p>
                The Chartered Accountants Australia and New Zealand logo is a
                trademark of Chartered Accountants Australia and New Zealand and
                is used with permission.
              </p>
            </div>
          </div>
          <div className="liability">
            <p>
              Liability limited by a scheme approved under Professional
              Standards Legislation.
            </p>
            <p>
              The information contained on this website is general in nature and
              does not take into account your situation. You should consider
              whether the information is suitable for your needs, and where
              appropriate, seek professional advice from a financial adviser.
              Every effort has been made to offer the most current, correct and
              clearly expressed information possible within this website;
              however, inadvertent errors can occur and applicable laws, rules
              and regulations may change. You should not act or fail to act
              based on information contained herein.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
