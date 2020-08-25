import React from "react"
import MyButton from "../myButton/MyButton"

import cv from "./cvDownload.module.css"

import CV from "../../assets/files/cv/CV_english.pdf"
import courses from "../../assets/files/cv/Complete List of Courses.pdf"
// import CN_CV from "../files/cv/CV_chinese.pdf"
// import CN_courses from "../files/cv/电机工程硕士所修课程.pdf"

function CvDownload() {
  return (
    <div className={cv.container}>
      <MyButton text={"CV download"} URL={CV} />
      <MyButton text={"University Courses"} URL={courses} />
    </div>
  )
}

export default CvDownload
