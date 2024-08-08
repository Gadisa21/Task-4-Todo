import { useState } from "react"
import TodoList from "./TodoList"

interface todos {
    todo:string
}

function AddToDo() {

    const [inputVal,setInputVal]=useState("")
    const [todos,setTodos]=useState<todos[]>([])

    const addTodo = () => {
        if (inputVal.trim()) {
          setTodos([...todos, { todo: inputVal }]);
          setInputVal(""); // Clear the input field
        }
      }

  return (
    <>
    <div className="text-center" >
    <input type="text" placeholder="Add Todo" value={inputVal} 
    onChange={(e)=>setInputVal(e.target.value)}/>
    <button type="button" className="btn btn-primary" onClick={addTodo}>Add</button>
    </div>
  <TodoList todo={todos} setTodo={setTodos} />
    </>
  )
}

export default AddToDo