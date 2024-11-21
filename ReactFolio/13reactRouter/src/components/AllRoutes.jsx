import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Users from '../pages/Users'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default AllRoutes