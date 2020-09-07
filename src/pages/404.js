import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

const Page404 = () => {
  return (
    <div className="main-404">
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <Link className="back-home" to="/">
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default Page404
