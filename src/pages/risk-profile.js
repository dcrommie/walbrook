import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Header from "../components/header"

const RiskProfile = () => {
  return (
    <div className="risk">
      <SEO title="Risk Profile " />

      <Header />
      <iframe
        src="https://www.stackup.io/survey/embed/1ff19cf7-88f1-46cf-bf44-370d19fe04b0/"
        width="100vw"
        height="100vh"
      ></iframe>

      <Footer />
    </div>
  )
}

export default RiskProfile
