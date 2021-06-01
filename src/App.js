import React, { useState } from 'react'
import './App.css';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './constants/theme'
import { GlobalStyles } from './constants/global'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles />
      <button onClick={toggleTheme}>toggle theme</button>
      <h1>Its a light theme</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
