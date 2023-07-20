import React, { useState } from "react"

import Button from "../../../component/Button"
import FormControlLabel from "../../../component/FormControlLabel"
import FormInput from "../../../component/FormInput"
import Select from "../../../component/FormSelect"
import Modal from "../../../component/Modal"
import { TypeTaskItem } from ".."

import { v4 } from "uuid"
import { useTask } from "../../../redux/slices/task.slice"

interface TypeModalAddTodo {
   openModalAdd: boolean
   setOpenModalAdd?: React.Dispatch<React.SetStateAction<boolean>>
}

const options = [
   { value: "1", title: "complete" },
   { value: "2", title: "incomplete" },
]

function ModalAddTodo(props: TypeModalAddTodo) {
   const { openModalAdd, setOpenModalAdd } = props
   const [valueTitle, setValueTitle] = useState<string>("")
   const [valueStatus, setValueStatus] = useState<string>("1")

   const { actionAddTask } = useTask()

   const handleClickAddTodo = () => {
      const data: TypeTaskItem = {
         id: v4() as string,
         title: valueTitle,
         createTime: new Date().toLocaleDateString(),
         status: valueStatus,
      }

      actionAddTask(data)
      setValueTitle("")
   }

   return (
      <Modal open={openModalAdd} onClose={setOpenModalAdd} w="500" h="400">
         <div className="">
            <h1 className="text-3xl font-bold text-center mb-4">Add Todo</h1>

            <div className="">
               <div className="mb-4">
                  <FormControlLabel title="Title" />
                  <FormInput
                     fullWidth
                     placeholder="Nhập vào task cần thêm..."
                     value={valueTitle}
                     onChange={setValueTitle}
                  />
               </div>
               <div className="">
                  <FormControlLabel title="Status" />
                  <Select
                     fullWidth
                     options={options}
                     value={valueStatus}
                     onChange={setValueStatus}
                  />
               </div>
               <div className="mt-8">
                  <Button
                     background="bg-blue-500"
                     disabled={valueTitle.trim() === "" ? true : false}
                     onClick={handleClickAddTodo}
                  >
                     Add Task
                  </Button>
                  <Button
                     sx="ms-3"
                     background="bg-red-500"
                     onClick={setOpenModalAdd}
                  >
                     Cancel
                  </Button>
               </div>
            </div>
         </div>
      </Modal>
   )
}

export default ModalAddTodo
