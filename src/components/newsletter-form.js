import React from "react"
import "../styles/style.css"

const NewsletterForm = () => {
  return (
    <div>
      <div className="newsletter">
        <h3>Get the latest insights to your inbox</h3>
        <form>
          <div className="email-fields" style={{ marginBottom: "32px" }}>
            <input
              name="email"
              className="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <button
            className="main-button newsletter-button"
            style={{ margin: "0 auto" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterForm
