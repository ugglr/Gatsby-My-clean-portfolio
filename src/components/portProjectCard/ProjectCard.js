import React from "react"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"

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
}) => {
  return (
    <div className="project_container">
      <div style={{ flex: 1, margin: "12px" }}>
        <img
          src={imageSrcPath}
          alt={"Smiley face"}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="right">
        <h4>
          {title}
          <br />
          <small>{date}</small>
        </h4>

        {tech && tech.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {tech.map(AString => {
              console.log(AString)
              return (
                <div
                  style={{
                    backgroundColor: "blueviolet",
                    marginRight: "5px",
                    marginBottom: "5px",
                    color: "white",
                    padding: "5px",
                  }}
                >
                  {AString}
                </div>
              )
            })}
          </div>
        ) : null}

        <p>{description}</p>

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
