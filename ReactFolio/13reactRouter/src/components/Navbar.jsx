import React from 'react'
import { NavLink } from 'react-router-dom'

const listOfLinks = [
  { 
    to:"/",
    displayText: "Home",
  },
  {
    to:"/contact",
    displayText: "Contact",
  },
  {
    to: "/about",
    displayText: "About",
  },
  {
    to: "/users",
    displayText: "Users",
  },
  {
    to: "/login",
    displayText: "Login",
  },
]
function Navbar() {
  const defaultStyle = { color: "black"}
  const activeStyle = { color : "red"}

  return (
    <>
    {/* < div className = 'flex items-center bg-gray-400 p-2 text-2xl ' >
      {/* One Approach for few links.
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Link to="/login">Login</Link> */}
      {/* { // Another Approach for large list of links
        listOfLinks.map(link => (
          <Link 
          key={link.to} 
          to={link.to} > 
          { link.displayText } 
          </Link>
        ))
      }
    </div > */}
    {/* The Extended features of link is NavLink */}
    <div className='flex justify-around items-center text-2xl bg-gray-300 m-auto mb-2 py-2 '>
      {
        listOfLinks.map(link => (
          <NavLink 
            style={({isActive}) => (isActive ? activeStyle: defaultStyle) }
            key={link.to}
            to = {link.to} >
            {link.displayText}
            </ NavLink>
        ))
      }
    </div>




    </>
  )
}

export default Navbar