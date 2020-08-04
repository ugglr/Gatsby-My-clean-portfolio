import {
  GREEN_ACCENT,
  PINK_ACCENT,
  BLUE_ACCENT,
  YELLOW_ACCENT,
} from "../Theme/colors"

function getRandomAccentColor() {
  const colors = [GREEN_ACCENT, PINK_ACCENT, BLUE_ACCENT, YELLOW_ACCENT]
  const color = colors[Math.floor(Math.random() * colors.length)]

  return color
}

export default getRandomAccentColor
