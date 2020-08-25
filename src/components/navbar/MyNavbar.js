import React from "react"
import { Link } from "gatsby"

import nav from "./myNavbar.module.css"

const logo = require("../../assets/images/logo.png")

const Links = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Home",
    url: "/",
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
          <Link to="/">
            <img src={logo} alt={"Smiley face"} className={nav.logo} />
          </Link>
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
            <li key={`${title}${url}`} className={nav.float_right}>
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
