import React from "react"
import ReactMarkdown from "react-markdown"

import card from "./aboutCard.module.css"

function AboutCard(props) {
  const { title, subtitle, body } = props

  return (
    <div className={card.container}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <ReactMarkdown className={card.body} source={body} />
    </div>
  )
}

export default AboutCard
