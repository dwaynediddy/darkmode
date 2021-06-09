import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/theme'
import { GlobalStyles } from './constants/global'
import { useDarkMode } from './constants/useDarkMode'

import Board from './components/Board'
import Card from './components/Card'
import Form from './components/Form'


function App() {
  const [theme, toggleTheme] = useDarkMode('light')
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const [text, setText] = useState('Light mode')

  return (
    <ThemeProvider theme={themeMode}>
          <button onClick={toggleTheme}>{text}</button>
          <h1>Dwaynes Trello Board</h1>
        <main className="trello">
        <Board id="Board-1" className="board">
            <Card id="card" className="card" draggable="false">
              <p>To-Do</p>
              <p>Add to Todo:</p>
            </Card>
            <Card id="card-1" className="card" draggable="true">
              <Form />
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
      <tip/>
    </ThemeProvider>

  )
}

export default App;
