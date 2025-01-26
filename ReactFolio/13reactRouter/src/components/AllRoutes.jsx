import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Users from '../pages/Users'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import SingleUser from '../pages/SingleUser'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <>
      <Routes>
        {/* Public Route  */}
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        {/* Private Route  */}
        <Route element={<PrivateRoute/>}>
          
          <Route path='/users' element={<Users />} />
          <Route path='/users/:user_id' element={<SingleUser />} />
        </Route>
        {/* <Route
        path="/"
        element = {
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        />
        <Route path="/about" element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
          
          } />
        <Route path="/contact" element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
          } 
          /> */}
        {/* <Route path="/users" element={<Users />} /> */}
        {/* <Route 
        path='/users' 
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        } 
        />
        <Route
          path="users/:user_id" 
          element={
            <PrivateRoute>
              <SingleUser />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </>
  )
}

export default AllRoutes