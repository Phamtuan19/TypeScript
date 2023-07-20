import Button from "../../component/Button"

import React from "react"
import ModalAddTodo from "./component/ModalAddTodo"
import Select from "../../component/FormSelect"
import TaskItem from "./component/TaskItem"
import { useTask } from "../../redux/slices/task.slice"

export interface TypeTaskItem {
   id: string
   title: string
   createTime?: string
   status: string
}

const options = [
   { value: "", title: "all" },
   { value: "1", title: "complete" },
   { value: "2", title: "incomplete" },
]

function AppTodo() {
   const [openModalAdd, setOpenModalAdd] = React.useState<boolean>(false)
   const [listTodo, setListTodo] = React.useState<TypeTaskItem[]>([])
   const [filter, setFilter] = React.useState<string>("")

   const { listTask } = useTask()

   React.useEffect(() => {
      setListTodo(listTask)
   }, [listTask])

   const handleChangeSlect = (event: any) => {
      setFilter(event)
   }

   const filteredTasks = listTodo.filter((item) =>
      filter === "" ? true : item.status === filter
   )

   console.log(filteredTasks)

   return (
      <>
         <div className="w-[50%] flex mx-auto flex-col ">
            <div className="my-3 text-center">
               <h1 className="text-4xl font-bold text-black dark:text-white">
                  App Todo
               </h1>
            </div>

            <div className="flex justify-between">
               <Button sx="bg-blue-500" onClick={setOpenModalAdd}>
                  Add Todo
               </Button>
               <Select
                  options={options}
                  onChange={handleChangeSlect}
                  value={filter}
               />
            </div>

            <div className="bg-slate-200 p-3 mt-4 rounded-md max-h-[500px] overflow-auto">
               {filteredTasks.length > 0 ? (
                  filteredTasks.map((item) => (
                     <TaskItem key={item.id} data={item} />
                  ))
               ) : (
                  <div className="text-center">
                     <h1 className="text-2xl font-bold text-black">No Todos</h1>
                  </div>
               )}
            </div>
         </div>

         <ModalAddTodo
            openModalAdd={openModalAdd}
            setOpenModalAdd={setOpenModalAdd}
         />
      </>
   )
}

export default AppTodo
