import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import ProjectCard from "../portProjectCard/ProjectCard"
import { PROJECTS } from "../../content/Projects"

import "./projects.css"

const Projects = () => {
  const {
    img,
    title,
    date,
    description,
    sourceURL,
    leftButtonText,
    hostedURL,
    rightButtonText,
    tags,
    tech,
  } = PROJECTS[0]
  return (
    <React.Fragment>
      <Container fluid>
        <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
        {/*/Props: 
      imageSrcPath: the path to the image used 
      title: The title of the card/App 
      date: The date of the card
      description: Short description of the card 
      sourceURL: URL to the source code of the project 
      hostedURL: URL to the hosted version of the app*/}
        <ProjectCard
          imageSrcPath={img}
          title={title}
          date={date}
          description={description}
          sourceURL={sourceURL}
          leftButtonText={leftButtonText}
          hostedURL={hostedURL}
          rightButtonText={rightButtonText}
          tags={tags}
          tech={tech}
        />
        <Link to="/projects" className="blueViolet">
          Go to Projects page ---->
        </Link>
      </Container>
    </React.Fragment>
  )
}

export default Projects
