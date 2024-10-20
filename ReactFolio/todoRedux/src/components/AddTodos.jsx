import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodos() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    const addTodoHandler =(e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <form onSubmit={addTodoHandler} className="form">
            <input 
            type="text" 
            placeholder="Enter a Todo..." 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />
            <button type="submit" className="submitBtn">Add Todo</button>

        </form>
    )

}
export default AddTodos