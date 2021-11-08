import React from "react"

import SocialRow from "../SocialRow/SocialRow"
import { Link } from "gatsby"

import styles from "./footer.module.css"
import "../../fontawesome/css/all.min.css"

import { links, subtitle } from "../../content/footer"
import { email, name, socials } from "../../content/shared"

const Footer = () => (
  <div className={styles.outer_container}>
    <div className={styles.inner_container}>
      <div>
        <h3>{name}</h3>
        <a href={`mailto:${email}`}>
          <span style={{ color: "blueviolet", fontSize: "1.3rem" }}>
            {email}
          </span>
        </a>
        <p style={{ fontSize: "1.3rem", marginTop: "2rem" }}>{subtitle}</p>
      </div>
      <div
        style={{
          textDecoration: "underline",
          fontSize: "1.4rem",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        Menu
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontSize: "1.3rem",
        }}
      >
        {links.map(({ url, title }) => {
          return (
            <Link key={`${title}`} to={url}>
              <span
                style={{ marginRight: "2rem" }}
                className={styles.link_styles}
              >
                {title}
              </span>
            </Link>
          )
        })}
      </div>
      <div className={styles.footer_social}>
        {/* <SocialRow color="white" socialsArray={socials} /> */}
      </div>
      <div className="text-center" style={{ marginTop: "3rem" }}>
        {name} © {new Date().getFullYear()}, Built with
        <i
          className="fas fa-mug-hot"
          style={{
            marginLeft: "10px",
            marginRight: "3px",
            fontSize: "1.5rem",
          }}
        />
        <a href="https://www.gatsbyjs.org">
          {" "}
          <span className={styles.blueViolet}>& Gatsby</span>
        </a>
      </div>
    </div>
  </div>
)

export default Footer
