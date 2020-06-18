import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import CvDownload from "../components/cvDownload/CvDownload"
import AboutCard from "../components/aboutCard/AboutCard"
import JobCard from "../components/jobCard/JobCard"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { jumboContent, summary, workExperience } from "../content/about"

export default () => {
  return (
    <div className="App">
      <Layout>
        <MyJumbo {...jumboContent} />
        <hr />
        <CvDownload />
        <AboutCard {...summary} />

        {workExperience.map(job => {
          return <JobCard {...job} />
        })}
      </Layout>
    </div>
  )
}
