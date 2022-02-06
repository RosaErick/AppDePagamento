import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import GlobalStyle from './components/GlobalStyle';
import UserList from './components/UserList';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <UserList />
  </React.StrictMode>,
  document.getElementById('root')
)
