import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [text, setText] = useState('Dark mode')
  
  const toggleTheme = () => {
    if (theme === 'light' ) {
      window.localStorage.setItem('theme', 'dark', 'text', 'Dark mode')
      setTheme('dark')
      setText('Press for Light mode')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
      setText('Press for Dark mode')
    }
    setText('Light mode')
  }

  
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  
  return [theme, toggleTheme]
}



