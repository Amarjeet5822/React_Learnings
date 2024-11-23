import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log("Navigating to contact page")
    navigate("/contact")
  }
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={clickHandler}>Go to Contact Page</button>
    </div>
  )
}

export default About