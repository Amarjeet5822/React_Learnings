import React from 'react'
import { Link, NavLink } from 'react-router'

const listOfNavbar =[
  {
    to: "/",
    displayText:"Home",
  }, 
  {
    to:"/about",
    displayText:"About",
  },
  {
    to: "/contact",
    displayText: "Contact",
  },
  {
    to: "/users",
    displayText:"Users"
  }
]
function Navbar() {
  const defaltActive = { color: "red"}
  const linkActive = { color: 'black'}
  return (
    <div className='flex justify-around items-center bg-gray-200 py-3 w-10/12 m-auto'>
      {
        listOfNavbar.map((item)=> (
          <NavLink
          // style={({isActive})=>(isActive ? defaltActive:linkActive)}
          className={({isActive})=> isActive? "text-red-500" : "text-black"}
          to={item.to} 
          key={item.to} 
          >{item.displayText}</NavLink>
        ))
      }
    </div>
  )
}

export default Navbar