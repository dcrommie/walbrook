import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const Page404 = () => {
  return (
    <div className="main-404">
      <SEO title="Page Not Found" />

      <Header />
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">The page you are looking for is not found</div>
        <Link to="/">
          <button className="main-button"> Back to home</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Page404
