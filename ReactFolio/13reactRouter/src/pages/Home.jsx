import React from 'react'
import { Navigate } from 'react-router-dom'

function Home() {
  const isLoggedIn = true;
  
  if(!isLoggedIn) {
    return <Navigate to="/about" />;
  }
  return (
    <div className=' '>
      <h2 className='text-center text-3xl'>Home Page</h2>

    </div>
  )
}

export default Home