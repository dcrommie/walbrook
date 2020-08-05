import React from "react"
import "../styles/style.css"

const Form = () => {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div className="name-fields">
          <input
            name="firstname"
            className="first_name"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastname"
            className="name"
            type="text"
            placeholder="Last Name"
          />
        </div>
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

export default Form
