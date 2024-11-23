import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Users from '../pages/Users'

function AllRoutes() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact/>} />
          < Route path="/users" element={<Users />} />
        </Routes>
    </div>
  )
}

export default AllRoutes