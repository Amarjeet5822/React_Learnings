import { useState, useEffect } from 'react'
import { TodoForm, TodoItem} from './components/index'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
    const [ todos , setTodos ] = useState([])

    const addTodo = (todo) => {
        console.log("10 line in App.jsx", todo)
        setTodos(prev => [ {id:Date.now(),...todo} ,...prev])
    }
    const updateTodo = (id , todo) => {
        setTodos((prev)=> prev.map(currTodo=>(currTodo.id===id ? todo : currTodo)))
    }
    const deleteTodo = (id) => {
        setTodos((prev)=> prev.filter((todo)=> todo.id !==id))
    }
    const toggleComplete = (id) => {
        setTodos((prevTodos) => prevTodos.map((currTodo)=>(currTodo.id === id ? { ...currTodo, completed: !currTodo.completed }: currTodo)))
    }

    useEffect(()=> {
        
        const todos = JSON.parse(localStorage.getItem("todos"))
        // console.log("25 line in App.jsx", todos)
        if (todos && todos.length > 0) {
            setTodos(todos)
        }
    }, [])

    useEffect(()=> {
        // console.log("31 line in App.jsx", todos)
        localStorage.setItem("todos", JSON.stringify(todos))

    },[todos])


    return (
        <TodoProvider value={{todos, toggleComplete, updateTodo, deleteTodo, addTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            <div key={todo.id}
                                className="w-full"
                            >
                                <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
