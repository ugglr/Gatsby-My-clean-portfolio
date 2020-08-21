import React, { useState, useEffect } from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import { PROJECTS, PAGE_CONTENT } from "../content/Projects"

import styles from "./projects.module.css"
import "./index.css"

export default () => {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState(null)
  const [filters, setFilters] = useState([])

  const loadProjects = () => {
    const availableFilters = () => {}
    const filteredProjects = PROJECTS.filter(project => {
      if (filter === null) {
        console.log("filter null")
        return true
      }
      return project.tech.includes(filter)
    })
    setProjects(filteredProjects)
  }

  useEffect(() => {
    console.log("loading projects into state")
    loadProjects()
    console.log("State projects", projects)
  }, [])

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
        <div className={styles.projects_container}>
          <div className={styles.filter_container}></div>
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
