import React from "react"
import Image from "../components/image"
import "../styles/style.css"

const Hero = props => {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="main-content">
            <div className="main-content-text" style={{ marginTop: "140px" }}>
              <h1 className="hero-heading">{props.heading}</h1>
              <p style={{ maxWidth: "572px" }}>{props.subtitle}</p>
            </div>
            <div className="main-content-image">
              <Image alt={props.alt} name={props.imageName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
