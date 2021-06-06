import { func, string } from 'prop-types'
import styled from 'styled-components'
import Moon from '../images/moon.png'
import Sun from '../images/sun.png'


const Toggle = ({ theme, toggleTheme }) => {
    const isLight = (theme === 'light')
    return (
        <button onClick={toggleTheme}>
            <Sun />
            <Moon />
        </button>

    )
}

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle