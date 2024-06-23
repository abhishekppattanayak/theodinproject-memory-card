import { useEffect, useMemo, useState } from "react"

export default function Card (props) {

  const [image, setImage] = useState(null)
  const [name, setName] = useState(null)


  useEffect(() => {
    let ignore = false
    if(!ignore) {
      (async () => {
        let img = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`)
        let name = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
        img = await img.blob()
        name = await name.json()
        setImage(URL.createObjectURL(img))
        setName(name.name)
        
      })()
    }

    return () => ignore = true
  }, [props.id]);

  const memoizedImageData = useMemo(() => image, [image]);

  return (
    <div className="aspect-card border lg:border-2 border-black rounded-md h-32 sm:h-40 md:h-48 lg:h-52 flex flex-col items-center p-0.5 md:p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ">

      <img src={memoizedImageData} className="basis-3/4 border border-black rounded-lg"/>
      <span className="basis-1/4 ">{name}</span>
      
    </div>
  )
}