import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"
import AboutCard from "../components/aboutCard/AboutCard"
import JobCard from "../components/jobCard/JobCard"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { summary, workExperience } from "../content/about"

import CV from "../files/cv/CV_english.pdf"
import courses from "../files/cv/Complete List of Courses.pdf"
import CN_CV from "../files/cv/CV_chinese.pdf"
import CN_courses from "../files/cv/电机工程硕士所修课程.pdf"

export default () => {
  const { title, subtitle, body } = summary
  return (
    <div className="App">
      <Layout>
        <MyJumbo
          body={
            "So you are looking for a professional, communicative & punctual software engineer who likes to keep productive."
          }
          body2={"I also speak pretty good Mandarin if that's... needed."}
          title={"tldr; About me."}
        />
        <hr />
        <AboutCard title={title} subtitle={subtitle} body={body} />

        {workExperience.map(job => {
          return <JobCard {...job} />
        })}
      </Layout>
    </div>
  )
}
