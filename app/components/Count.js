import React, { useEffect, useState } from 'react'




export default function Count() {
    const [todoList, setTodoList] = useState([])
    const [newTodo, setNewTodo] = useState("")
    const[lastItems, setlasItem] = useState(0)

    useEffect (() => {
        localStorage.setItem("todos", todoList)
    }, [todoList])

    useEffect(() => {
        setlasItem = todoList
        
    }, [todoList])

        const [color, setColor] = useState(0);
        useEffect(() => {
          if(lastItems == color) { setColor('red') }
        }, [todoList]); 


    const addTodo = () => {
        if(!newTodo.trim()) {
            alert("No empty todo")
            return;
        }
        setTodoList(todoList => [...todoList, newTodo])
        setNewTodo("")
    }

    const deleteTodo = (todoToDelete) => {
        const newTodoList = todoList.filter((todo) => todo !== todoToDelete)
        setTodoList(newTodoList)
    }

    return (
        <div className="App">
            <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
            <button onClick={addTodo}>Add</button>
        
            <h1>To do:</h1>
            <ul >
                {todoList.map((todo, i) => (
                    <div>
                        <li key={i} value={color} onChange={e => setColor(e.target.value)}>{todo}</li>
                        <button onClick={() => deleteTodo(todo)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}


