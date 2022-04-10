let bait = feedFluffyNow()
const Indy_Hates_Snakes = 2
function feedFluffyNow() {
  let travlerbait
  while (travlerbait == null || forFluffy(travlerbait)) {
    travlerbait = randomTemplePlace()
  }
  return travlerbait
}
export function update() {
  if (forFluffy(bait)) {
    expandSnake(Indy_Hates_Snakes)
    bait = feedFluffyNow()
  }
}
export function draw(templeIsKing) {
  const baitElement = document.createElement('div')
  baitElement.style.gridRowStart = bait.y
  baitElement.style.gridColumnStart = bait.x
  baitElement.classList.add('bait')
  templeIsKing.appendChild(baitElement)
}
import { forFluffy, expandSnake } from './fear.js'
import { randomTemplePlace } from './maze.js'