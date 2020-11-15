import React from "react"
import { Helmet } from "react-helmet"
import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"

import Footer from "../components/footer"
import Hero from "../components/hero"

const LandingPage = () => {
  return (
    <div>
      <SEO title="What we do" />
      <Header header="#contact" />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
      </Helmet>
      <Hero
        heading="Let’s get you started"
        subtitle="Whether you are looking for advice on one topic or a more comprehensive plan for your future, we can provide the right level of support that you need to realise your financial ambitions."
        alt="help"
        imageName="landing"
      />
    </div>
  )
}

export default LandingPage
