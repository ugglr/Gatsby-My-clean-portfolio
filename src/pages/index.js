import React from "react"
import Layout from "../components/layout/Layout"

import Hero from "../components/hero/Hero"
import Summary from "../components/summary/Summary"
import Projects from "../components/projects/Projects"

//Use Nike Orange later as primary color, it's dope together with white?
//#FF6600

// import content from content files
import { hero_content } from "../content/home"

//import bootstrap styles
import "../assets/bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default () => {
  const { greeting, title, subtitle, callToAction } = hero_content

  return (
    <div className="App">
      <Layout>
        <Hero
          greeting={greeting}
          title={title}
          subtitle={subtitle}
          callToAction={callToAction}
        />
        <hr />
        <Summary />
        <hr />
        <Projects />
        <hr />
      </Layout>
    </div>
  )
}
