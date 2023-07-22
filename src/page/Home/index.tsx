// ứng dụng sử dụng userCallback, useRef, useState, React.memo

import { useCallback, useRef, useState } from "react"
import Button from "./Button"

interface TypeTimer {
   current: number | undefined
}

export default function Home() {
   const [count, setCount] = useState<number>(60)

   let timer: TypeTimer = useRef()

   const handleStart = useCallback(() => {
      timer.current = setInterval(() => {
         setCount((prevCount) => prevCount - 1)
      }, 1000)
   }, [])

   const handleStop = useCallback(() => {
      clearInterval(timer.current)
   }, [])

   return (
      <div className="App">
         <h1>{count}</h1>
         <Button onclick={handleStart} title="Start" />
         <Button onclick={handleStop} title="Stop" />
      </div>
   )
}
