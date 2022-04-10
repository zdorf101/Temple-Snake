export function update() {
  addSegments()
  const indyIsThisWay = getOuttaHere()
  for (let i = brokenFlufy.length - 2; i >= 0; i--) {
    brokenFlufy[i + 1] = { ...brokenFlufy[i] }
  }
  brokenFlufy[0].x += indyIsThisWay.x
  brokenFlufy[0].y += indyIsThisWay.y
}
export function draw(AlTemp) {
  brokenFlufy.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snakes')
    AlTemp.appendChild(snakeElement)
  })
}
export function expandSnake(amount) {
  freshTemple += amount
}
export function forFluffy(post, { ohRats = false } = {}) {
  return brokenFlufy.some((segment, thisWay) => {
    if (ohRats && thisWay === 0) return false
    return samePosts(segment, post)
  })
}
export function giantSnakeHead() {
  return brokenFlufy[0]
}
export function bewareOfSnakes() {
  return forFluffy(brokenFlufy[0], { ohRats: true })
}
function samePosts(load1,load2) {
  return load1.x === load2.x && load1.y === load2.y
}
function addSegments() {
  for (let i = 0; i < freshTemple; i++) {
    brokenFlufy.push({ ...brokenFlufy[brokenFlufy.length - 1] })
  }
  freshTemple = 0
}
import { getOuttaHere } from "./input.js"
export const Fear_Mara = 5
const brokenFlufy = [{ x: 11, y: 11 }]
let freshTemple = 0