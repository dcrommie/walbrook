import React from "react"
import "../styles/style.css"

const NewsletterForm = () => {
  return (
    <div>
      <form>
        <div className="email-fields">
          <input
            name="email"
            className="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <button className="main-button" style={{ margin: "0 auto" }}>
          Contact us
        </button>
      </form>
    </div>
  )
}

export default NewsletterForm
