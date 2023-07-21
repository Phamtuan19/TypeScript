import { useRoutes } from "react-router"
import AppTodo from "../page/AppTodo"
import Home from "../page/Home"

const routers = [
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/todo",
      element: <AppTodo />,
   },
   {
      path: "*",
      element: <h1 className="text-9xl"> 404</h1>,
   },
]

export default function Routers() {
   return useRoutes(routers)
}
