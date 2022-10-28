import React, { useState } from "react"
import Layout from "../Layout/layout"

const ContactUs = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="username"
              required
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <textarea
              placeholder="Your message"
              name="message"
              required
              value={inputs.message || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="submit"> Send a Message </button>
          </div>
        </form>
      </Layout>
    </>
  )
}

export default ContactUs
