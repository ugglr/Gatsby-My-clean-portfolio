import React from "react"
import "./socialRow.css"

const SocialRow = ({ color, socialsArray }) => {
  const defaultColor = "black"

  return (
    <div className="jumbo_social text-center">
      {socialsArray.map(({ url, icon }, i) => {
        return (
          <div key={i}>
            <a
              style={{ color: `${color ? color : defaultColor}` }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${icon} hover_effect`} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default SocialRow
