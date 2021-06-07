import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/theme'
import { GlobalStyles } from './constants/global'

import Board from './components/Board'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState('light')
  const [text, setText] = useState('Light mode')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setText('Press for Light mode')
    } else {
      setTheme('light')
      setText('Press for Dark mode')
    }
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <button onClick={toggleTheme}>{text}</button>
          <h1>Dwaynes Trello Board</h1>
        <main className="trello">
        <Board id="Board-1" className="board">
            <Card id="card-1" className="card" draggable="false">
              <p>To-Do</p>
            </Card>
            <Card id="card-1" className="card" draggable="true">
              <p>Card one</p>
            </Card>
          </Board>

          <Board id="Board-2" className="board">
            <Card id="card-1" className="card" draggable="false">
              <p>Doing</p>
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>Card two</p>
            </Card>
          </Board>

          <Board id="Board-3" className="board">
            <Card id="card-1" className="card" draggable="false">
              <p>Done</p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
              <p>Card three</p>
            </Card>
          </Board>
      <GlobalStyles />
      </main>
    </ThemeProvider>

  )
}

export default App;
