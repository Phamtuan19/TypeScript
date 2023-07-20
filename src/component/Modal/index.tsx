interface TypeModal {
   open: boolean
   onClose?: React.Dispatch<React.SetStateAction<boolean>>
   w?: string
   h?: string
   children: JSX.Element | JSX.Element[]
}

function Modal(props: TypeModal) {
   const { open, w, h, onClose, children } = props

   const width = w ? `w-[${w}px]` : "w-[500px]"
   const height = h ? `h-[${h}px]` : "h-[500px]"

   const handleClickOutSize = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
   ) => {
      onClose && onClose(false)
   }

   if (open) {
      return (
         <div
            className={`fixed top-0 left-0 z-[999] w-full h-full transition-[opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms] bg-modalThem`}
            onClick={handleClickOutSize}
         >
            <div
               className={`absolute z-[99999] bg-white p-4 rounded-md shadow-modal top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${width} ${height}`}
               onClick={(e) => e.stopPropagation()}
            >
               {children}
            </div>
         </div>
      )
   }
   return <></>
}

export default Modal
