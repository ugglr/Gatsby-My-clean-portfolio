import React from "react"
import Layout from "../components/layout/Layout"

import MyJumbo from "../components/myJumbo/MyJumbo"
import BlogPosts from "../components/BlogPosts"

//import my custom styles
import "./index.css"

const Blog = () => {
  const API_KEY = process.env.DEV_TO_API_KEY
  console.log("MY KEY", API_KEY)
  return (
    <div className="App">
      <Layout>
        <MyJumbo
          title={"blog."}
          body={"learnings, ramblings, you know the drill."}
        />
        <hr />
        <BlogPosts />
      </Layout>
    </div>
  )
}

export default Blog
