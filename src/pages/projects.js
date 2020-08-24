import React, { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"
import Tag from "../components/Tag"

import { PROJECTS, PAGE_CONTENT } from "../content/Projects"

import { WARNING } from "../Theme/colors"
import styles from "./projects.module.css"
import "./index.css"

export default () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState(null)
  const [filters, setFilters] = useState([])

  const availableFilters = () => {
    const tempArray = []
    PROJECTS.forEach(project => {
      project.tags.forEach(techString => {
        if (!tempArray.includes(techString)) {
          tempArray.push(techString)
        }
      })
    })
    setFilters(tempArray)
  }

  const loadProjects = () => {
    const filteredProjects = PROJECTS.filter(project => {
      if (!filter) {
        console.log("filter null")
        return true
      }
      return project.tags.includes(filter)
    })
    setProjects(filteredProjects)
  }

  useEffect(() => {
    console.log("loading filters")
    availableFilters()
    console.log("loading projects into state")
    loadProjects()
    console.log("State projects", projects)
  }, [filter])

  return (
    <div className="App">
      <Layout>
        {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
        <MyJumbo
          title={PAGE_CONTENT.JUMBO.title}
          body={PAGE_CONTENT.JUMBO.body}
        />
        <hr />
        <div className={styles.filter_container}>
          <p className={styles.filter_text}>Filter:</p>
          {filters.map(f => (
            <div
              onClick={() => {
                if (filter === f) {
                  setFilter(null)
                } else {
                  setFilter(f)
                }
              }}
              style={{ cursor: "pointer" }}
            >
              {f === filter ? <Tag>{f}</Tag> : <Tag outline>{f}</Tag>}
            </div>
          ))}
        </div>
        {filter && (
          <div onClick={() => setFilter(null)} style={{ cursor: "pointer" }}>
            <Tag warning>clear</Tag>
          </div>
        )}
        <div className={styles.projects_container}>
          {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //leftButtonText: changes the left button text
      //hostedURL: URL to the hosted version of the app
      //rightButtonText: changes the right button text*/}
          {projects.map(
            ({
              img,
              title,
              date,
              description,
              leftButtonText,
              hostedURL,
              rightButtonText,
              sourceURL,
              tech,
              tags,
            }) => {
              return (
                <ProjectCard
                  imageSrcPath={img}
                  title={title}
                  date={date}
                  description={description}
                  sourceURL={sourceURL}
                  leftButtonText={leftButtonText}
                  hostedURL={hostedURL}
                  rightButtonText={rightButtonText}
                  tech={tech}
                  tags={tags}
                />
              )
            }
          )}
        </div>
      </Layout>
    </div>
  )
}
