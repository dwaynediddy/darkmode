import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/theme'
import { GlobalStyles } from './constants/global'

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
      <>
      <GlobalStyles />
      <button onClick={toggleTheme}>{text}</button>
      <h1>Dwaynes Trello Board</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
