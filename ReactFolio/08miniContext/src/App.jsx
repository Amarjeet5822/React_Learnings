import UserContextProviderComponent from  './context/UserContextProvider'
import './App.css'
import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProviderComponent>    
    <h1> Mini Context with Chai aur React</h1>
    <Login />
    <Profile />
    </UserContextProviderComponent>
    
  )
}

export default App
