import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/16by9/currency-wallet.jpg"

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
        title={"Gatsby React Currency Wallet"}
        date={"2019-05-03"}
        description={
          "A coding challenge where I was gived the task of creating an electronic wallet holding several currencies. The scaffolding was created using Gatsby.js, the UI components come from Material-UI Library."
        }
        sourceURL={"https://github.com/ugglr/gatsby-react-currency-wallet-app"}
        hostedURL={"https://ugglr.github.io/gatsby-react-currency-wallet-app/"}
      />
      <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
