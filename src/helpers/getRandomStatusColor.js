import { WARNING, DANGER, SUCCESS, DISABLED } from "../Theme/colors"

function getRandomStatusColor() {
  const colors = [WARNING, DANGER, SUCCESS, DISABLED]
  const color = colors[Math.floor(Math.random() * colors.length)]

  return color
}

export default getRandomStatusColor
