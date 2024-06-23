import Header from "./components/Header"
import randomIdArray from "./assets/RandomId"
import { useState } from "react"
import { shuffle } from "lodash"
import Span from "./components/Span"
import getBestScore from "./assets/GetBestScore"


export default function App () {
  const [array, setArray] = useState(randomIdArray(12))
  const [current, setCurrent] = useState(0)
  const [best, setBest] = useState(getBestScore())
  
  

  return (
    <div className="min-h-screen flex flex-col dark:bg-black dark:text-white font-mono text-xl">

      <Header best={best} current={current} />

      {array.map(i => 
        <Span key={i} id={i} shuffle={()=>{setArray(a => shuffle(a))}} /> 
      )}
      
    </div>
  )
}