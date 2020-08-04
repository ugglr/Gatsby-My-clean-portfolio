import React from "react"
import "./socialRow.css"

const socials = [
  {
    icon: "fab fa-github",
    url: "https://www.github.com/ugglr",
  },
  {
    icon: "fab fa-linkedin",
    url: "https://www.linkedin.com/in/igelstrom",
  },
  {
    icon: "fab fa-twitter",
    url: "https://twitter.com/real_carlw",
  },
  {
    icon: "fab fa-instagram",
    url: "https://www.instagram.com/hangzhouist/",
  },
  {
    icon: "fab fa-angellist",
    url: "https://angel.co/igelstroem",
  },
]

const SocialRow = props => {
  const defaultColor = "black"

  return (
    <div className="jumbo_social text-center">
      {socials.map(({ url, icon }) => {
        return (
          <div>
            <a
              style={{ color: `${props.color ? props.color : defaultColor}` }}
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
