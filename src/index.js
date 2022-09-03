import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'        //utilizaremos o DOM somente aqui
import App from './App'

ReactDOM.render(
    <App/>,
    document.getElementById('root')           //achamos isso no 'index.html' onde tinha essa id = 'root'
)
    