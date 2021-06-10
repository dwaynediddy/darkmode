import React, { useState } from 'react'

const modeButton = () => {
    const [text, setText] = useState('Light mode')

    const buttonTextHandler = e => {
        setText('Dark Mode')
    }

    return (
        <button onClick={buttonTextHandler}>{text}</button>
    )
}

export default modeButton

