export default function getBestScore () {
  return JSON.parse(localStorage.getItem('bestScore')) ?? 0
}