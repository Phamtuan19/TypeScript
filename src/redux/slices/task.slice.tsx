import { createSlice } from "@reduxjs/toolkit"
import { TypeTaskItem } from "../../page/AppTodo"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "../reducer"

interface TypeAction {
   payload: TypeTaskItem
}

const initialState: TypeTaskItem[] = []

const taskSlice = createSlice({
   name: "task",
   initialState,
   reducers: {
      addTask: (state, action: TypeAction) => {
         return state.length > 0 ? [...state, action.payload] : [action.payload]
      },

      deleteTaskItem: (state, action: TypeAction) => {
         const newState = state.filter(
            (item: TypeTaskItem) => item.id !== action.payload.id
         )
         return newState
      },

      updateTaskItem: (state, action: TypeAction) => {
         const indexItem = state.findIndex(
            (item: TypeTaskItem) => item.id === action.payload.id
         )

         if (indexItem !== -1) {
            const updatedTask = { ...state[indexItem], ...action.payload }
            state[indexItem] = updatedTask
         }
      },
   },
})

const { addTask, deleteTaskItem, updateTaskItem } = taskSlice.actions

export const useTask = () => {
   const dispatch = useDispatch()

   const listTask = useSelector((state: RootState) => state.task)

   const actionAddTask = (payload: TypeTaskItem) => {
      dispatch(addTask(payload))
   }

   const actionDeleteItem = (payload: TypeTaskItem) => {
      dispatch(deleteTaskItem(payload))
   }

   const actionUpdateItem = (payload: TypeTaskItem) => {
      dispatch(updateTaskItem(payload))
   }

   return { listTask, actionAddTask, actionDeleteItem, actionUpdateItem }
}

export default taskSlice
