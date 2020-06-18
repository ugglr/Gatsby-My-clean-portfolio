import React from "react"
import card from "./jobCard.module.css"
import ReactMarkdown from "react-markdown"

function JobCard(props) {
  const {
    jobPosition,
    company,
    present,
    startYear,
    startMonth,
    endYear,
    endMonth,
    description,
  } = props

  const { name, location, url } = company

  return (
    <div className={card.container}>
      <div className={card.topRowContainer}>
        <div className={card.jobTitleContainer}>
          <h1 className={card.jobTitle}>{jobPosition}</h1>
        </div>
        <div className={card.dateTextContainer}>
          <h1>{startYear}</h1>
          <h1>{startMonth}</h1>
          <h1 className={card.middleText}>---</h1>
          {present ? (
            <h1>NOW</h1>
          ) : (
            <>
              <h1>{endYear}</h1>
              <h1>{endMonth}</h1>
            </>
          )}
        </div>
      </div>

      <div className={card.subRowContainer}>
        <h2>{name}</h2>
        <h2>{location}</h2>
      </div>

      <div className={card.descriptionContainer}>
        <p>{description}</p>
      </div>

      {/*       <ReactMarkdown
        className={card.descriptionContainer}
        source={description}
      /> */}
    </div>
  )
}

export default JobCard
