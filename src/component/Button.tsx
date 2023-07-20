import React, {
   MouseEventHandler,
   ReactNode,
   Dispatch,
   SetStateAction,
} from "react"

interface TypeButton {
   sx?: string
   color?: string
   background?: string
   disabled?: boolean
   children?: any
   onClick?: Dispatch<SetStateAction<boolean>>
}

function Button(props: TypeButton) {
   const { sx, color, background, disabled, onClick, children } = props

   const textColor = color ? `text-[${color}]` : "text-white"
   const bg = background ? background : "text-white"

   const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
      if (onClick) onClick((prevState) => !prevState)
   }

   if (disabled) {
      return (
         <button
            className={`px-3 h-10 rounded-lg py-2 shadow-button  ${sx} ${textColor} bg-btnDisabled`}
         >
            {children}
         </button>
      )
   }

   return (
      <button
         className={`px-3 h-10 rounded-lg py-2 shadow-button  ${sx} ${textColor} ${bg}`}
         onClick={onClickButton}
      >
         {children}
      </button>
   )
}

export default Button
