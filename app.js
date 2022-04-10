let lastTimeRideWorked = 0
  let theTempleWon = false
  const disneyCastMemberWE = document.getElementById('Temple-Of-The-Forbiddin-Eye')
  function bestRideAdvSorrySkip(currentTempleTime) {
    if (theTempleWon) {
      if (confirm('You looked into the eyes of Mara.....Try again!')) {
        window.location = '/'
    }
      return
  }
  window.requestAnimationFrame(bestRideAdvSorrySkip)
    const minsSinceIndyBroke = (currentTempleTime - lastTimeRideWorked) / 1000
      if (minsSinceIndyBroke < 1 / Fear_Mara) return
  lastTimeRideWorked = currentTempleTime
    repair101()
    render104()
}
  window.requestAnimationFrame(bestRideAdvSorrySkip)
function repair101() {
  fixFluffy()
  fixBait()
  templeDefeat()
}
function render104() {
  disneyCastMemberWE.innerHTML = ''
  renderFluffy(disneyCastMemberWE)
  envisionBait(disneyCastMemberWE)
}
function templeDefeat() {
  theTempleWon = templePosition(giantSnakeHead()) || bewareOfSnakes()
}
  import { update as fixFluffy, draw as renderFluffy, Fear_Mara, giantSnakeHead, bewareOfSnakes } from './fear.js'
  import { update as fixBait, draw as envisionBait } from './bait.js'
  import { templePosition } from './maze.js'