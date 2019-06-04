import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/16by9/django-rest-react-crud.jpg"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"Django-React Fullstack Notemanager"}
        date={"2019-05-06"}
        description={
          "Fullstack REST-API Notemanager app running Django as a backend and react for building the UI. The REST-API is built using the Django Rest API framework and the JSX is served as a single page into Django Template using webpack. Instructions for local setup in repo."
        }
        sourceURL={"https://github.com/ugglr/gatsby-react-currency-wallet-app"}
        hostedURL={""}
      />
      <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
