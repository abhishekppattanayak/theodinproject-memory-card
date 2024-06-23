import { useState } from "react"
import Card from "./components/Card"

const generateUniqueRandomNumbers = (count, max) => {
  const result = [];
  const usedNumbers = new Set();

  while (result.length < count) {
    const randomNumber = Math.ceil(Math.random() * max);

    if (!usedNumbers.has(randomNumber)) {
      usedNumbers.add(randomNumber);
      result.push(randomNumber);
    }
  }

  return result;
};

export default function App () {

  const l = generateUniqueRandomNumbers(12, 151)
  
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  return (
    <div className="min-h-screen w-screen flex flex-col font-mono py-4">
      <header className="basis-1/6 flex flex-col sm:flex-row content-center px-12 items-center">
        <span className="text-xl md:text-3xl grow">Memory Card</span>
        <div className="flex flex-col sm:flex-row sm:gap-4 md:text-2xl items-center">
          <span>Score: {currentScore}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </header>
      <main className="grow flex flex-wrap justify-evenly content-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 px-2 py-4 sm:px-6 md:px-12 lg:px-16 ">
        {l.map(n => <Card key={n} id={n} /> )}
      </main>
    </div>
  )
}