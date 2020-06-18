import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"
import AboutCard from "../components/aboutCard/AboutCard"
import JobCard from "../components/jobCard/JobCard"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { jumboContent, summary, workExperience } from "../content/about"

import CV from "../files/cv/CV_english.pdf"
import courses from "../files/cv/Complete List of Courses.pdf"
import CN_CV from "../files/cv/CV_chinese.pdf"
import CN_courses from "../files/cv/电机工程硕士所修课程.pdf"

export default () => {
  return (
    <div className="App">
      <Layout>
        <MyJumbo {...jumboContent} />
        <hr />
        <div></div>
        <AboutCard {...summary} />

        {workExperience.map(job => {
          return <JobCard {...job} />
        })}
      </Layout>
    </div>
  )
}
