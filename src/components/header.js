import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "../styles/header.css"
import logo from "../images/logo.svg"

const Header = props => {
  //   const [show, setShow] = useState(false)
  //   const onClick = () => {
  //     setShow(!show)
  //   }

  {
    /*useEffect(() => {
    show && (document.body.style.overflow = "hidden")
    !show && (document.body.style.overflow = "unset")
  }, [show])*/
  }
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="preload"
          as="style"
        />
      </Helmet>
      <header className="headers">
        <div className="container nav_container">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            //onClick={onClick}
          />
          <label htmlFor="menu-btn" className="menu-icon" id="menu">
            <input style={{ display: "none" }} />
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/what-we-do">What we do</Link>
            </li>
            <li>
              <Link to="/how-we-do-it">How we do it</Link>
            </li>

            <li>
              <Link to="/insight">Insights</Link>
            </li>

            <li>
              <Link
                to="https://www.adviserlogic.com/Default.aspx"
                target="_blank"
              >
                Login
              </Link>
            </li>
            <Link to={props.header}>
              <button>Contact Us</button>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
