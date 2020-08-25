import React from "react"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = ({ mainPoints, recentTech }) => (
  <div className="summary_content">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <h3 className="summary_title hover_effect">Recent Tech</h3>
    </div>
    <br />
    <div className="tech_icons">
      {recentTech.map((o, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className={`${o.icon} hover_effect`} />
            <br />
            <span>{o.subtitle}</span>
          </div>
        )
      })}
    </div>
    <br />

    <h4 className="goal_text text-center">
      My biggest goal as an Engineer is to never stop learning, and work on cool
      stuff. Here's a couple of things I'm good at:
    </h4>
    <div className="summary_row">
      {mainPoints.map((o, i) => {
        return (
          <div key={i} className="summary_col">
            <h4 className="hover_effect">{o.title}</h4>
            <p>{o.body}</p>
          </div>
        )
      })}
    </div>

    <br />
    <h4 style={{ marginTop: "0.5rem" }} className="goal_text text-center">
      I'm constantly experimenting with new things, give me a follow or join the
      through the magic of open-source on GitHub.
    </h4>
  </div>
)

export default Summary
