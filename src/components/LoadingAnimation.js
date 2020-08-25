import React from "react"
import Lottie from "react-lottie"
import animationData from "../assets/images/lotties/3532-car.json"

function LoadingAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={300} width="100%" />
      <h2 style={{ color: "#646499" }}>Loading...</h2>
    </div>
  )
}

export default LoadingAnimation
