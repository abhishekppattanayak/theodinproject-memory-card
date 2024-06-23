import { useEffect, useState } from "react";

export default function Span(props) {
  const [count, setCount] = useState(0)
  const handleClick  = () => {
    setCount(c => c+1)
    props.shuffle()
  }

  useEffect(()=>{
    if(count == 2) {
      
      
    }
  }, [count])
  
  return (
    <span onClick={handleClick}>{props.id} : {count}</span>
  )
}