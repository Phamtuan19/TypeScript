import { combineReducers } from "@reduxjs/toolkit"
import themeSlice from "./slices/theme.slice"
import taskSlice from "./slices/task.slice"
import { TypeTaskItem } from "../page/AppTodo"

const rootReducer = combineReducers({
   [themeSlice.name]: themeSlice.reducer,
   [taskSlice.name]: taskSlice.reducer,
})

export interface RootState {
   theme: boolean
   task: TypeTaskItem[]
}

export default rootReducer
