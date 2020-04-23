import React, { useState, useEffect } from "react"
import superagent from "superagent"

import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

//import my custom styles
import "./index.css"

// function for getting my blog posts from dev.to.
const getPosts = async () => {
  // const DEV_TO_URL_PRIVATE = "https://dev.to/api/articles/me/published"
  // const API_KEY = process.env.DEV_TO_API_KEY

  const DEV_TO_URL = "https://dev.to/api/articles"

  try {
    const result = superagent
      .get(DEV_TO_URL)
      .query({ username: "ugglr" })
      .then(res => {
        return res.body
      })
    return result
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error)
  }
}

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts().then(res => {
      console.log("IN USEEFFECT", res)
      setPosts(res)
      setLoading(false)
    })
  }, [])

  console.log("Posts state", posts)

  return (
    <div className="App">
      <Layout>
        <MyJumbo
          title={"blog."}
          body={"learnings. ramblings. you know the drill."}
        />
        <hr />
        {loading && <h1>loading posts...</h1>}
        {!loading &&
          posts.map(post => {
            return (
              <ProjectCard
                key={post.id}
                imageSrcPath={post.cover_image}
                title={post.title}
                date={post.published_at.slice(0, 10)}
                description={post.description}
                leftButtonText="Read More"
                sourceURL={post.canonical_url}
              />
            )
          })}
      </Layout>
    </div>
  )
}

export default Blog
