import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"

const RiskProfile = () => {
  return (
    <div className="risk">
      <SEO title="Risk Profile " />

      <iframe
        src="https://www.stackup.io/survey/embed/1ff19cf7-88f1-46cf-bf44-370d19fe04b0/"
        width="100vw"
        height="100vh"
        title="iframe"
      ></iframe>

      <Footer />
    </div>
  )
}

export default RiskProfile
