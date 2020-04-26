import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import SocialRow from "../SocialRow/SocialRow"
import { Link } from "gatsby"

import footer from "./footer.module.css"
import "../../fontawesome/css/all.min.css"

const Links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
]

const Footer = () => (
  <>
    <div
      className={footer.top_border}
      style={{ marginBottom: "0px", width: "100%", marginTop: "3rem" }}
    />
    <Jumbotron fluid style={footer_styles}>
      <Container style={{ maxWidth: "960px" }}>
        <Row>
          <Col>
            <h3>Carl-W. Igelstroem</h3>
            <a href="mailto:carl.igelstrom@gmail.com">
              <span style={{ color: "blueviolet", fontSize: "1.3rem" }}>
                carl.igelstrom@gmail.com
              </span>
            </a>
            <p style={{ fontSize: "1.3rem", marginTop: "2rem" }}>
              I'm a Swedish developer living in Hangzhou, China. I can help you
              build and grow your next product
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textDecoration: "underline",
              fontSize: "1.4rem",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Menu
          </Col>
        </Row>
        <Row>
          {Links.map(({ url, title }) => {
            return (
              <Col xs={2} style={{ fontSize: "1.3rem" }}>
                <Link to={url}>
                  <span className={footer.link_styles}>{title}</span>
                </Link>
              </Col>
            )
          })}
        </Row>
        <div class="jumbo_social_row_container">
          <SocialRow color="white" />
        </div>
        <Row className="text-center" style={{ marginTop: "3rem" }}>
          <Col>
            Carl-W.Igelstroem © {new Date().getFullYear()}, Built with
            <i
              className="fas fa-mug-hot"
              style={{
                marginLeft: "10px",
                marginRight: "3px",
                fontSize: "1.5rem",
              }}
            />
            <a href="https://www.gatsbyjs.org">
              {" "}
              <span className={footer.blueViolet}>& Gatsby</span>
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </>
)

const footer_styles = {
  marginTop: "0rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "0",
  width: "100%",
}

export default Footer
