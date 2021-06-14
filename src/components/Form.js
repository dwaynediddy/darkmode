import React, { useState } from 'react'
import Board from './Board'
import Card from './Card'
import { GlobalStyles } from '../constants/global'

const Form = () => {
    const [todo, setTodo] = useState('')

    const handleTodoChange = e => {
        setTodo(e.target.value)
    }

    const addTodo = e => {
        
        e.preventDefault()
        
        const newTodo = setTodo('')
        console.log(newTodo)
        if(newTodo !== '') {
            let newTodos = [...todo, newTodos]
            setTodo({newTodos})

        }
        
    }


    return (
        <>
        {/* need on submit to create a new card with the submitted input */}
            <h5>{todo}</h5>
            <main className="trello">
        <Board id="Board-1" className="board">
            <Card id="card" className="card" draggable="false">
              <p>To-Do</p>
              <p>Add to Todo:</p>
            </Card>
            <Card id="card-1" className="card" draggable="true">
                <form onSubmit={addTodo}>
                    <label>
                    <input type="text" value={todo} onChange={handleTodoChange}/>
                    <button type="submit">Add</button>
                    </label>
                </form>
            </Card>
          </Board>

          <Board id="Board-2" className="board">
            <Card id="card" className="card" draggable="false">
              <p>Doing</p>
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>

          <Board id="Board-3" className="board">
            <Card id="card" className="card" draggable="false">
              <p>Done</p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
              <p>Card three</p>
            </Card>
          </Board>
      <GlobalStyles />
      </main>
        </>
    )
}

export default Form