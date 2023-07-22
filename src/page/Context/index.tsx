import React, { useState, useContext, createContext } from "react"

interface TypeContext {
   count: number
   setCount: React.Dispatch<React.SetStateAction<number>>
}

const ContextName = createContext<TypeContext>({
   count: 0,
   setCount: () => {},
})

export default function Context() {
   const [count, setCount] = useState<number>(0)

   return (
      <div>
         <ContextName.Provider value={{ count, setCount }}>
            <RenderCount />
         </ContextName.Provider>
      </div>
   )
}

const RenderCount = () => {
   const { count, setCount } = useContext<TypeContext>(ContextName)

   return (
      <div className="w-96 mx-auto">
         <div>
            <h1 className="text-6xl">{count}</h1>
         </div>
         <button
            className="py-2 px-3  border me-3"
            onClick={() => setCount((prev) => prev + 1)}
         >
            +
         </button>
         <button
            className="p-2 px-3 border"
            onClick={() => setCount((prev) => prev - 1)}
         >
            -
         </button>
      </div>
   )
}
