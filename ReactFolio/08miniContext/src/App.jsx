import UserContextProvider from  './context/UserContextProvider'
import './App.css'
import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>    
    <h1> Mini Context with Chai aur React</h1>
    <Login />
    <Profile />
    </UserContextProvider>
    
  )
}

export default App
