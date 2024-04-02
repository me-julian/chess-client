import { useState } from 'react'
import Board from './Board'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="main-title">Chess Client</h1>
            <Board />
            <a
                href="https://github.com/me-julian/chess-client"
                className="link link--grey"
                target="_blank"
                rel="noreferrer"
            >
                Click here to go to the project repository
            </a>
        </>
    )
}

export default App
