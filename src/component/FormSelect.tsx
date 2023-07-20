interface TypeSelect {
   fullWidth?: boolean
   sx?: string
   name?: string
   w?: string
   value?: string
   options: { value: string; title: string }[]
   onChange?: React.Dispatch<React.SetStateAction<string>>
}

function Select(props: TypeSelect) {
   const { sx, name, w, value, options, fullWidth, onChange } = props

   const width = fullWidth ? "w-full" : `w-[${w}px]`

   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) onChange(String(event.target.value))
   }

   return (
      <select
         name={name}
         className={`${sx} ${width} px-3 h-10 rounded-md border outline-none border-slate-300 border-solid capitalize dark:text-black`}
         value={value}
         onChange={handleChange}
      >
         {options.map((option, index) => (
            <option key={index} value={option.value}>
               {option.title}
            </option>
         ))}
      </select>
   )
}

export default Select
