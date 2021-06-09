import React, { useState } from 'react'

const Form = () => {
    const [todo, setTodo] = useState('')

    const handleTodoChange = e => {
        setTodo(e.target.value)
    }

    const addTodo = e => {
        e.preventDefault()
        
        setTodo('')
    }



    return (
        <>
            <form onSubmit={addTodo}>
                <label>
                <input type="text" value={todo} onChange={handleTodoChange}/>
                <button type="submit">Add</button>
                </label>
            </form>
            {/* if dark mode changes text to white and cant see it */}
            <h5>{todo}</h5>
        </>
    )
}

export default Form
