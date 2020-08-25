import React, { useState, useEffect } from "react"

import { getPosts } from "../helpers/getPosts"

import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import LoadingAnimation from "../components/LoadingAnimation"
import ProjectCard from "../components/portProjectCard/ProjectCard"

// import content
import { socials } from "../content/shared"

//import my custom styles
import "./index.css"

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
          socials={socials}
        />
        <hr />
        {loading && <LoadingAnimation />}
        {!loading && (
          <div style={{ padding: 16 }}>
            {posts.map(post => {
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
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Blog
