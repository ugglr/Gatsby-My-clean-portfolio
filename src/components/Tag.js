import React from "react"
import styles from "./Tag.module.css"
import getRandomColor from "../helpers/getRandomColor"
import getRandomAccentColor from "../helpers/getRandomAccentColor"
import getRandomStatusColor from "../helpers/getRandomStatusColor"

function Tag({ children, randomAccent, randomStatus, random }) {
  if (randomAccent)
    return (
      <div
        className={styles.base}
        style={{
          backgroundColor: getRandomAccentColor(),
          color: "black",
        }}
      >
        {children}
      </div>
    )

  if (randomStatus)
    return (
      <div
        className={styles.base}
        style={{
          backgroundColor: getRandomStatusColor(),
          color: "black",
        }}
      >
        {children}
      </div>
    )

  if (random)
    return (
      <div
        className={styles.base}
        style={{
          backgroundColor: getRandomColor(),
          color: "black",
        }}
      >
        {children}
      </div>
    )

  return <div className={styles.base}>{children}</div>
}

export default Tag
