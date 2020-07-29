import React from "react"
import "../styles/style.css"

const Form = () => {
  return (
    <div>
      <form>
        <div className="name-fields">
          <input className="first_name" type="text" placeholder="First Name" />
          <input className="name" type="text" placeholder="Last Name" />
        </div>
        <div className="email-fields">
          <input className="email" type="email" placeholder="Email" />
        </div>
        <button className="main-button" style={{ margin: "0 auto" }}>
          Contact us
        </button>
      </form>
    </div>
  )
}

export default Form
