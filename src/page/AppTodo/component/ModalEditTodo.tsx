import React, { useState } from "react"

import Button from "../../../component/Button"
import FormControlLabel from "../../../component/FormControlLabel"
import FormInput from "../../../component/FormInput"
import Select from "../../../component/FormSelect"
import Modal from "../../../component/Modal"
import { TypeTaskItem } from ".."

import { useTask } from "../../../redux/slices/task.slice"

interface TypeModalAddTodo {
   open: boolean
   setOpen?: React.Dispatch<React.SetStateAction<boolean>>
   data: TypeTaskItem
}

const options = [
   { value: "1", title: "incomplete" },
   { value: "2", title: "complete" },
]

function ModalEditTodo(props: TypeModalAddTodo) {
   const { open, setOpen, data } = props
   const [valueTitle, setValueTitle] = useState<string>(data.title)
   const [valueStatus, setValueStatus] = useState<string>(data.status)

   const { actionUpdateItem } = useTask()

   const handleClickUpdate = () => {
      const newTask: TypeTaskItem = {
         ...data,
         title: valueTitle,
         status: valueStatus,
      }

      actionUpdateItem(newTask)
   }

   return (
      <Modal open={open} onClose={setOpen} w="500" h="400">
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
                     onClick={handleClickUpdate}
                  >
                     Update
                  </Button>
                  <Button sx="ms-3" background="bg-red-500" onClick={setOpen}>
                     Cancel
                  </Button>
               </div>
            </div>
         </div>
      </Modal>
   )
}

export default ModalEditTodo
