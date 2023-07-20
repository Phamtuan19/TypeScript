import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { RootState } from "../reducer"

const initialState: boolean = true

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      setTheme: (state, action: { payload: boolean }) => {
         return (state = action.payload)
      },
   },
})

const { setTheme } = themeSlice.actions

export const useTheme = () => {
   const dispatch = useDispatch()

   const theme = useSelector((state: RootState) => state.theme)

   const actionSetTheme = (payload: boolean) => {
      dispatch(setTheme(payload))
   }

   return { theme, actionSetTheme }
}

export default themeSlice
