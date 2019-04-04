import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import history from './history'
import './index.css'
import App from './App'


ReactDOM.render(<Router history={history}><App /></Router>, document.getElementById('root'))
