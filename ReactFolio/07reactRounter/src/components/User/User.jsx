import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    let { userid} = useParams()
  return (
    <div className='text-center p-6 text-white text-3xl bg-gray-700'>User : { userid}</div>
  )
}

export default User