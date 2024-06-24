import Header from "./components/Header"
import randomIdArray from "./assets/RandomId"
import { useEffect, useState } from "react"
import { shuffle , max } from "lodash"
import Deck from "./components/Deck"
import Card from "./components/Card"
import getBestScore from "./assets/GetBestScore"
import Modal from "./components/Modal"

export default function App () {
  const [array, setArray] = useState(randomIdArray(12))
  const [current, setCurrent] = useState(0)
  const [best, setBest] = useState(getBestScore())
  
  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  useEffect(()=>{
    if(current == 12) {
      setWin(true)
    }
  }, [current])

  useEffect(()=>{
    document.body.classList.add('overflow-hidden')
    return () => document.body.classList.remove('overflow-hidden')
  }, [win, lose])

  function setLoseTrue() {
    setLose(true)
  }

  function setBestScore () {
    setBest(prev => max([prev, current-1]))
    localStorage.setItem('BestScore', JSON.stringify(best))
  }
  
  return (
    <div className="min-h-screen flex flex-col dark:bg-black dark:text-white font-mono text-xl">

      <Header best={best} current={current} />

      <Deck>
        {array.map(id => 
          <Card 
            key={id} id={id} 
            shuffle={()=>setArray(a => shuffle(a) )} 
            setBestScore={setBestScore}
            resetCurrentScore={()=> setCurrent(0)}
            incrementCurrentScore={() => setCurrent(c => c+1)}
            setLoseTrue = {setLoseTrue}
          /> 
        )}
      </Deck>

      {win && <Modal text={'You win!'} /> }
      {lose && <Modal text={'You lose!'} /> }
      
    </div>
  )
}