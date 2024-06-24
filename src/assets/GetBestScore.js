export default function getBestScore () {
  return JSON.parse(localStorage.getItem('BestScore')) ?? 0
}