import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../constants/theme'

import Card from '../components/Card'
import Form from '../components/Form'


const DarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [ text, setText] = useState('Light Mode')

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const toggleTheme = () => {
    if (theme === 'light' ) {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
      setText('Light Mode')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
      setText('Dark Mode')
    }
  }
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  
  return (
  <ThemeProvider theme={themeMode}>
          <button onClick={toggleTheme}>{text}</button>
          <h1>Dwaynes Trello Board</h1>
          <Card />
          <Form />
    </ThemeProvider>
  )
}

export default DarkMode



