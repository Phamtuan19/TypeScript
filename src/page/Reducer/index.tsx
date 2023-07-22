import * as React from "react"

const initialTodo = 0

// action
const UP_ACTION = "up"
const DOWN_ACTION = "down"

const todoReducer = (state: number, action: string) => {
   switch (action) {
      case UP_ACTION:
         return state + 1
      case DOWN_ACTION:
         return state - 1
      default:
         throw new Error("Invalid action")
   }
}

function Reducer() {
    const [count, dispatch] = React.useReducer(todoReducer, initialTodo)

    return (
        <div className="flex items-center flex-col">
            <h1 className="text-9xl fw-bold">{count}</h1>
            <div className="flex gap-3">
                <button onClick={() => dispatch(UP_ACTION)}>UP</button>
                <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
            </div>
        </div>
    )
}

export default Reducer
