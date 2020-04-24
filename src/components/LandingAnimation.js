import React from "react"
import Lottie from "react-lottie"
import animationData from "../images/lotties/3046-me-at-office.json"

function LandingAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return <Lottie options={defaultOptions} height="100%" width="100%" />
}

export default LandingAnimation
