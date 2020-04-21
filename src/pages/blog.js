import React from "react"
import Layout from "../components/layout/Layout"

import MyJumbo from "../components/myJumbo/MyJumbo"

//import my custom styles
import "./index.css"

const Blog = () => {
  return (
    <div className="App">
      <Layout>
        <MyJumbo
          title={"blog."}
          body={"learnings, ramblings, you know the drill."}
        />
      </Layout>
    </div>
  )
}

export default Blog
