


import React from 'react'
import useLocalStorage from './useLocalStorage'

import './theme.css'

function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme','dark')
    
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme)
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className='container' >
            <p>Hello</p>
            <button onClick={handleToggleTheme}>Chan</button>
        </div>
    </div>
  )
}

export default LightDarkMode