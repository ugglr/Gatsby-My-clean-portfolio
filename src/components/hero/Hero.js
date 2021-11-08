import React from "react"
import { Jumbotron } from "react-bootstrap"
import LandingAnimation from "../LandingAnimation"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = ({ socials }) => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1 style={{ marginTop: "8rem" }}>
        Hi,
        <br /> I'm a Fullstack developer
      </h1>
      <div className="jumbo_animation_container">
        <LandingAnimation />
      </div>
      <br />
      <div className="jumbo_desc_container">
        <h3>
          Right now I'm working remotely to build the next generation software.
        </h3>
      </div>

      <div className="jumbo_cta_container">
        <p>Have a project you'd like to discuss?</p>
        <p>
          Let's chat{" "}
          <a href="mailto:carl.igelstrom@gmail.com">
            <span style={{ color: "blueviolet" }}>
              carl.igelstrom@gmail.com
            </span>
          </a>
        </p>
      </div>
    </div>
    <div className="jumbo_social_row_container">
      {/* <SocialRow socialsArray={socials} /> */}
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
