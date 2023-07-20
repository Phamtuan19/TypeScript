import { TypeTaskItem } from ".."
import Button from "../../../component/Button"

import { BsFillPencilFill } from "react-icons/bs"
import { AiFillDelete } from "react-icons/ai"
import { useTask } from "../../../redux/slices/task.slice"
import ModalEditTodo from "./ModalEditTodo"
import React from "react"
import FormCheckBox from "../../../component/FormCheckBox"

interface TypeProps {
   data: TypeTaskItem
}

const CHECK = "2"

function TaskItem(props: TypeProps) {
   const { data } = props
   const [open, setOpen] = React.useState<boolean>(false)

   const { actionDeleteItem, actionUpdateItem } = useTask()

   const isCheck = data.status === CHECK ? true : false

   const handleChangeCheck = () => {
      const newData = {
         ...data,
         status: isCheck ? "1" : "2",
      }
      console.log(isCheck)
      actionUpdateItem(newData)
   }

   return (
      <>
         <div className="px-3 py-2 rounded-md bg-white flex items-center mb-3">
            <div className="">
               <FormCheckBox
                  type="checkbox"
                  sx="w-[24px] h-[24px]"
                  checked={isCheck}
                  onChange={handleChangeCheck}
               />
            </div>
            <div className="flex-1 ms-3">
               <p
                  className={`${
                     isCheck ? "line-through " : "no-underline text-black"
                  } text-md font-normal capitalize`}
               >
                  {data.title}
               </p>
               <p className="text-[12px]">{data.createTime}</p>
            </div>
            <div className="">
               <Button
                  background="bg-red-500"
                  onClick={() => actionDeleteItem(data)}
               >
                  <AiFillDelete color="text-white" />
               </Button>
               <Button
                  background="bg-slate-500 ms-2"
                  onClick={() => setOpen(true)}
               >
                  <BsFillPencilFill color="text-black" />
               </Button>
            </div>
         </div>
         <ModalEditTodo open={open} setOpen={setOpen} data={data} />
      </>
   )
}

export default TaskItem
