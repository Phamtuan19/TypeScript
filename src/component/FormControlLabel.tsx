interface TypeLabel {
   sx?: string
   title: string
   htmlFor?: string
}

function FormControlLabel(props: TypeLabel) {
   const { sx, title, htmlFor } = props

   return (
      <label
         className={`${sx} font-[600] text-sm mb-1 block text-slate-500`}
         htmlFor={htmlFor}
      >
         {title}
      </label>
   )
}

export default FormControlLabel
