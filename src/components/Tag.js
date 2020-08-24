import React from "react"
import styles from "./Tag.module.css"
import getRandomColor from "../helpers/getRandomColor"
import getRandomAccentColor from "../helpers/getRandomAccentColor"
import getRandomStatusColor from "../helpers/getRandomStatusColor"

import { MAIN, WARNING } from "../Theme/colors"

function Tag({
  children,
  randomAccent,
  randomStatus,
  random,
  outline,
  warning,
}) {
  const getType = () => {
    if (randomAccent)
      return { backgroundColor: getRandomAccentColor(), color: "black" }
    if (randomStatus)
      return { backgroundColor: getRandomStatusColor(), color: "black" }
    if (random) return { backgroundColor: getRandomColor(), color: "black" }
    if (outline)
      return {
        backgroundColor: "white",
        color: MAIN,
        borderColor: MAIN,
        borderWidth: 1,
        borderStyle: "solid",
      }
    if (warning) return { backgroundColor: WARNING }
  }

  return (
    <div className={styles.base} style={getType()}>
      {children}
    </div>
  )
}

export default Tag
