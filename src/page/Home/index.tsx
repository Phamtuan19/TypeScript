import { useRef, useState } from "react"

interface TypeTimer {
   current: number | undefined
}

export default function Home() {
   const [count, setCount] = useState<number>(60)

   let timer: TypeTimer = useRef()

   const handleStart = () => {
      timer.current = setInterval(() => {
         setCount((prevCount) => prevCount - 1)
      }, 1000)
   }

   const handleStop = () => {
      clearInterval(timer.current)
   }

   return (
      <div className="App">
         <h1>{count}</h1>
         <button onClick={handleStart}>Start</button>
         <button onClick={handleStop}>Stop</button>
      </div>
   )
}
