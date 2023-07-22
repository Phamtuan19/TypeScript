import React from "react"

interface TypeProps {
   title: string
   onclick: () => void
}

function Button(props: TypeProps) {
   const { title, onclick } = props

   console.log("re-render")

   return <button onClick={onclick}>{title}</button>
}

export default React.memo(Button)
