import React from "react"

import styles from "./MyButton.module.css"

//########## PROPS INPUT ###############
//text: the text displayed in the button
//URL: the link the button goes to

const MyButton = props => (
  <a
    className={styles.button_styles}
    href={props.URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.text}
  </a>
)

export default MyButton
