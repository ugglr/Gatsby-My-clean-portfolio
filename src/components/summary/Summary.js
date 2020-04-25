import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const summary = [
  {
    title: "Fast Learner",
    body: `Through my career I have been on a never ending quest to learn
     new things that excites me and feels fresh. As a Software engineer, 
     this great because new tools and frameworks are coming out very
      frequently. With me the team you get someone who think it's a 
      privilege to learn about new things and will jump at the opportunity
      to do so.`,
  },
  {
    title: "Communication",
    body: ` During the course of my carees I learnt the value of clear and concise
    exchange of information. Many meetings are just wasted on
    missunderstandings and useless talking about things not related to
    getting the work done. I absolutely hate wasting time, and as such,
    clear concise and structured communication is religion.`,
  },
  {
    title: "True Technologist",
    body: `With a Msc. in Electrical Engineering and many years working in
    several technology fields, I have a solid foundation of computer
    science. It is important to bring in as many perspectives to a project
    as possible. With me you will have someone who can think from the
    Silicon structures, through the machine code, Asembly code and up to
    the top level fluffy stuff like JavaScript.`,
  },
  {
    title: "Getting things done",
    body: `I dislike spending time on discussions that does not bring any real
    value. I've seen the impact on a project which dives too deep into the
    details and (as we all know), it's not pretty. I'm big on tools that
    actually makes working more effective, and try to exclude everything
    else. Let's face it, our brains are lazy. It needs dicipline to trick
    our brains to keep delivering, and I like to keep the momentum up!`,
  },
]

const recentTech = [
  {
    icon: "fab fa-js",
    subtitle: "JavaScript",
  },
  {
    icon: "fab fa-react",
    subtitle: "React.js",
  },
  {
    icon: "fab fa-node-js",
    subtitle: "Node.js",
  },
  {
    icon: "fab fa-github",
    subtitle: "GitHub",
  },
]

const Summary = () => (
  <Container className="summary_content" fluid>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <h3 class="summary_title hover_effect">Recent Tech</h3>
    </div>
    <br />
    <Row className="text-center tech_icons">
      {recentTech.map(o => {
        return (
          <Col>
            <i className={`${o.icon} hover_effect`} />
            <br />
            <span>{o.subtitle}</span>
          </Col>
        )
      })}
    </Row>
    <br />

    <h4 className="goal_text text-center">
      My biggest goal as an Engineer is to never stop learning, and work on cool
      stuff. Here's a couple of things I'm good at:
    </h4>
    <div class="summary_row">
      {summary.map(o => {
        return (
          <div class="summary_col">
            <h4 className="hover_effect">{o.title}</h4>
            <p>{o.body}</p>
          </div>
        )
      })}
    </div>

    <br />
    <h4 style={{ marginTop: "0.5rem" }} className="goal_text text-center">
      I'm constantly experimenting with new things, give me a follow or join the
      fun through the magic of open-source on GitHub.
    </h4>
  </Container>
)

export default Summary
