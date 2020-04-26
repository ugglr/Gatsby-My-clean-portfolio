import React from "react"
import { Link } from "gatsby"

import nav from "./myNavbar.module.css"

const Links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
]

const MyNavbar = () => (
  <div
    className={nav.top_border}
    style={{ marginBottom: "0px", width: "100%" }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px`,
        paddingTop: 0,
      }}
    >
      <ul className={nav.nav_styles}>
        <li className={nav.float_left}>
          <i className="fas fa-frog" />
        </li>
        <li className={nav.float_right}>
          {/* eslint-disable-next-line */}
          <a
            href="https://www.github.com/ugglr"
            target="_blank"
            rel="noopener noreferrer"
            className={nav.nav_menu_link}
          >
            GitHub
          </a>
        </li>
        {Links.map(({ title, url }) => {
          return (
            <li className={nav.float_right}>
              <Link to={url} className={nav.nav_menu_link}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default MyNavbar
