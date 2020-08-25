import React from "react"
import ReactMarkdown from "react-markdown"

import card from "./aboutCard.module.css"

function AboutCard({ title, subtitle, body }) {
  return (
    <div className={card.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={card.titleWrapper}>
          <h2>{title}</h2>
        </div>
      </div>

      <div className={card.subtitleWrapper}>
        <h3>{subtitle}</h3>
      </div>

      <ReactMarkdown className={card.body} source={body} />
    </div>
  )
}

export default AboutCard
