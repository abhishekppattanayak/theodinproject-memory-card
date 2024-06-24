import { useEffect, useState } from "react"

export default function Card (props) {

  const [img, setImg] = useState(null)
  const [name, setName] = useState(null)
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`)
  }, [props.id])

  useEffect(()=>{
    let ignore = false
    if(!ignore) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
        .then(res => res.json())
        .then(res => setName(res.name))
        .catch(
          //TODO : implement catch block
        )
    }
    return () => ignore=true
  },[props.id])

  useEffect(()=>{
    if(count == 2) {
      props.setBestScore()
      props.setLoseTrue()
    }
  }, [count])

  function handleClick () {
    props.shuffle()
    props.incrementCurrentScore()
    setCount(c => c+1)
  }


  return (
    <div className="h-28 aspect-card flex flex-col border border-black dark:border-white rounded-lg px-1 py-2 sm:h-36 sm:py-2 md:h-40 lg:h-44 xl:h-52 " onClick={handleClick}>
      <img src={img} className="aspect-square rounded-lg w-full bg-white" width={'100%'} />
      <span className="uppercase text-sm sm:text-base md:text-lg lg:text-xl text-center">{name}</span>
    </div>
  )
} 