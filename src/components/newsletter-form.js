import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "../styles/style.css"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState("")

  const onChange = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addToMailchimp(email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
        if (data.result === "success") {
          setSuccess("success")
        } else if (data.result === "error") {
          setSuccess("error")
        }
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  // 2. via `async/await`
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await addToMailchimp(email)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }

  return (
    <div>
      <div className="newsletter">
        {success === "success" ? (
          <div>
            {" "}
            <h3>Thank you for subscribing</h3>
          </div>
        ) : success === "error" ? (
          <div>
            <h3>You are already subscribed</h3>
          </div>
        ) : (
          <div>
            <h3>Get the latest insights to your inbox</h3>
            <form onSubmit={handleSubmit}>
              <div className="email-fields" style={{ marginBottom: "32px" }}>
                <input
                  name="email"
                  onChange={onChange}
                  value={email}
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
        )}
      </div>
    </div>
  )
}

export default NewsletterForm
