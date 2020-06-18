import React from "react"

function AboutCard(props) {
  const { title, subtitle, body } = props

  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{body}</p>
    </div>
  )
}

export default AboutCard
