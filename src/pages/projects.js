import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import { PROJECTS } from "../content/Projects"

import "./index.css"

/*
######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Projects Portfolio"}
        body={
          "I think the best way of learning is by getting down to coding and build. I really appreciate feedback on anything that I have built!"
        }
      />
      <hr />
      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //leftButtonText: changes the left button text
      //hostedURL: URL to the hosted version of the app
      //rightButtonText: changes the right button text*/}
        {PROJECTS.map(
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
              <Row>
                <Col>
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
                </Col>
              </Row>
            )
          }
        )}
      </Container>
    </Layout>
  </div>
)
