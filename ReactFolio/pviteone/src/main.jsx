import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'

const reactElement = (
    <a href='https://google.com' target='_blanck'>Click to visit me</a>
)

ReactDom.createRoot(document.getElementById('root')).render(
    reactElement
)
    