import React from "react"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"
import Tag from "../Tag"

//Props:
//imageSrcPath: the path to the image used
//title: The title of the card/App
//date: The date of the card
//description: Short description of the card
//sourceURL: URL to the source code of the project
//leftButtonText: changes the left button text
//hostedURL: URL to the hosted version of the app
//rightButtonText: changes the right button text

const ProjectCard = ({
  imageSrcPath,
  title,
  date,
  description,
  sourceURL,
  leftButtonText,
  hostedURL,
  rightButtonText,
  tech,
  tags,
}) => {
  return (
    <div className="project_container">
      <div className="left">
        <img
          src={imageSrcPath}
          alt={"Smiley face"}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="right">
        <h4>{title}</h4>
        <small className="date_text">{date}</small>

        {tags && tags.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {tags.map(AString => {
                return <Tag>{AString}</Tag>
              })}
            </div>
          </>
        ) : null}

        <p>{description}</p>

        {tech && tech.length > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              {tech.map(AString => {
                return <Tag randomAccent>{AString}</Tag>
              })}
            </div>
          </>
        ) : null}

        <div style={{ display: "flex" }}>
          {sourceURL && sourceURL.length > 0 && (
            <MyButton
              text={leftButtonText ? leftButtonText : "Source Code"}
              URL={sourceURL}
            />
          )}
          {hostedURL && hostedURL.length > 0 && (
            <MyButton
              text={rightButtonText ? rightButtonText : "Hosted App"}
              URL={hostedURL}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
