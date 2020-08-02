import React from "react"

import BlogRoll from "../components/BlogRoll"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Latest Posts</h1>
        <section>
          <div>
            <BlogRoll />
          </div>
        </section>
      </div>
    )
  }
}
