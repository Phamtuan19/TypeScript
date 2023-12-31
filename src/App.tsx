import React from "react"
import { ImContrast, ImSun } from "react-icons/im"
import { useTheme } from "./redux/slices/theme.slice"

import { BrowserRouter } from "react-router-dom"
import Routers from "./routes"



function App() {
   const { theme, actionSetTheme } = useTheme()


   const darkMode = theme || false

   const toggleDarkMode = () => {
      actionSetTheme(!darkMode)
   }

   React.useEffect(() => {
      darkMode
         ? document.documentElement.classList.add("dark")
         : document.documentElement.classList.remove("dark")
   }, [darkMode])

   return (
      <div className="antialiased text-slate-500  dark:bg-slate-800 dark:text-slate-400 min-h-screen">
         <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
            <button
               className="text-xl w-8 h-8 leading-9 rounded-full m-1 dark:text-sky-600 text-center flex justify-center items-center"
               onClick={toggleDarkMode}
               aria-label="Toggle Dark Mode"
            >
               {darkMode ? <ImSun /> : <ImContrast />}
            </button>
         </div>
         <BrowserRouter>
            <Routers />
         </BrowserRouter>
      </div>
   )
}

export default App
