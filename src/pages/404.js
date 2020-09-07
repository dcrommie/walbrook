import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"

const Page404 = () => {
  return (
    <div className="main-404">
      <Header />
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link className="main-button" to="/">
          Back to home
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page404
