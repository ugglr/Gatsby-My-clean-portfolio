import React from "react"
import { Jumbotron } from "react-bootstrap"
import LandingAnimation from "../LandingAnimation"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = ({ greeting, title, subtitle, callToAction }) => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>
        {greeting}
        <br /> {title}
      </h1>
      <div className="jumbo_animation_container">
        <LandingAnimation />
      </div>
      <br />
      <div className="jumbo_desc_container">
        <h3>{subtitle}</h3>
      </div>

      <div className="jumbo_cta_container">
        <p>{callToAction.title}</p>
        <p>
          {callToAction.subtitle}
          <a href={`mailto:${callToAction.email}`}>
            <span style={{ color: "blueviolet" }}>{callToAction.email}</span>
          </a>
        </p>
      </div>
    </div>
    <div className="jumbo_social_row_container">
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
