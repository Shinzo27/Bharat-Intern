import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from 'react'

export const Context = createContext()

const AppWrapper = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: null,
    email: null,
    token: null
  })

  const login = (username, email, token) => {
    setAuth({
      isAuthenticated: true,
      username: username,
      email: email,
      token: token
    })
  }

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      username: null,
      email: null,
      token: null
    })
  }

  return (
    <Context.Provider value={{ auth, login, logout }}>
      <App/>
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
)
