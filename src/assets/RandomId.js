export default function randomIdArray(count=6) {
  let set = new Set()
  while(set.size < count) {
    set.add(Math.ceil(Math.random()*151))
  }
  return Array.from(set)
}