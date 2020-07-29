import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/header.css"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <div>
      <header className="headers">
        <div className="container">
          <Link to="" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label htmlFor="menu-btn" className="menu-icon" id="menu">
            <input style={{ display: "none" }} />
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="#work">About us</Link>
            </li>
            <li>
              <Link to="#about">How we work</Link>
            </li>
            <li>
              <Link to="#careers">Framework</Link>
            </li>
            <li>
              <Link to="#contact">Wholesale Clients</Link>
            </li>
            <li>
              <Link to="#contact">Risk Profile</Link>
            </li>
            <li>
              <Link to="#contact">Login</Link>
            </li>
            <Link to="#contact">
              <button>Contact Us</button>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
