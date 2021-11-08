import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import CvDownload from "../components/cvDownload/CvDownload"
import AboutCard from "../components/aboutCard/AboutCard"
import JobCard from "../components/jobCard/JobCard"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { jumboContent, summary, workExperience } from "../content/about"
import { socials } from "../content/shared"

export default () => {
  return (
    <div className="App">
      <Layout>
        <MyJumbo {...jumboContent} socials={socials} />
        <hr />
        {/* <CvDownload /> */}
        <AboutCard {...summary} />

        {workExperience.map((job, i) => {
          return <JobCard key={i} {...job} />
        })}
      </Layout>
    </div>
  )
}
