import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/style.css"

const Form = () => {
  const [flag, setFlag] = useState(false)

  const onClick = () => setFlag(!flag)
  return (
    <div>
      <form
        name="contact"
        action="/thank-you"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="name-fields">
          <input
            name="firstname"
            a
            className="first_name"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            name="lastname"
            className="name"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="email-fields">
          <input
            name="email"
            className="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="email-fields">
          <textarea
            name="message"
            className="email"
            type="text"
            placeholder="Write your Message"
            required
          />
        </div>
        <div className="checkbox">
          <input type="checkbox" onClick={onClick} />{" "}
          <span>
            I have read and agree to the{" "}
            <Link to="/privacy" traget="_blank">
              Privacy Policy
            </Link>
          </span>
        </div>

        <button
          className="main-button"
          style={{ margin: "0 auto" }}
          disabled={!flag}
        >
          Contact us
        </button>
      </form>
    </div>
  )
}

export default Form
