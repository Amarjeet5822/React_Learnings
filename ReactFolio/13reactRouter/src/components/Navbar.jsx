import React from 'react'
import { Link } from 'react-router-dom'

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
    m




    </>
  )
}

export default Navbar