import React from "react"

interface TypeFrom {
   id?: string
   type?: string
   sx?: string
   name?: string
   value?: string
   placeholder?: string
   fullWidth?: boolean
   disabled?: boolean
   onChange?: React.Dispatch<React.SetStateAction<string>>
}

function FormInput(props: TypeFrom) {
   const {
      id,
      sx,
      type,
      name,
      value,
      fullWidth,
      onChange,
      placeholder,
      disabled,
   } = props

   const width = fullWidth ? `w-full` : "w-[200px]"

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(event.target.value)
   }

   return (
      <input
         id={id}
         className={`${
            sx || ""
         } ${width} h-input p-input block box-border rounded-md border border-slate-300 outline-none border-solid `}
         type={type || "text"}
         name={name}
         value={value}
         placeholder={placeholder}
         onChange={handleChange}
         disabled={disabled}
      />
   )
}

export default FormInput
