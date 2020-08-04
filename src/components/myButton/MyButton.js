import React from "react"

import styles from "./myButton.module.css"

//########## PROPS INPUT ###############
//text: the text displayed in the button
//URL: the link the button goes to

const MyButton = ({ text, URL }) => (
  <a
    className={styles.button_styles}
    href={URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
)

export default MyButton
