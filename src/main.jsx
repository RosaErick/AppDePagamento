import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import UserList from './components/UserList';

ReactDOM.render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
  document.getElementById('root')
)
