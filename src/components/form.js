import React from "react"
import "../styles/style.css"

const Form = () => {
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
        <button className="main-button" style={{ margin: "0 auto" }}>
          Contact us
        </button>
      </form>
    </div>
  )
}

export default Form
