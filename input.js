let wrongWay = { x: 0, y: 0 }
let slimChances = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'w':
      if (slimChances.y !== 0) break
      wrongWay = { x: 0, y: -1 }
      break
    case 's':
      if (slimChances.y !== 0) break
      wrongWay = { x: 0, y: 1 }
      break
    case 'a':
      if (slimChances.x !== 0) break
      wrongWay = { x: -1, y: 0 }
      break
    case 'd':
      if (slimChances.x !== 0) break
      wrongWay = { x: 1, y: 0 }
      break
  }
})

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      if (slimChances.y !== 0) break
      wrongWay = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (slimChances.y !== 0) break
      wrongWay = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      if (slimChances.x !== 0) break
      wrongWay = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (slimChances.x !== 0) break
      wrongWay = { x: 1, y: 0 }
      break
  }
})
export function getOuttaHere() {
  slimChances = wrongWay
  return wrongWay
}