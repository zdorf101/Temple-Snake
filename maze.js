const Temple_Grid = 21
export function randomTemplePlace() {
  return {
    x: Math.floor(Math.random() * Temple_Grid) + 1,
    y: Math.floor(Math.random() * Temple_Grid) + 1
  }
}
export function templePosition(position) {
  return (
    position.x < 1 || position.x > Temple_Grid ||
    position.y < 1 || position.y > Temple_Grid
  )
}