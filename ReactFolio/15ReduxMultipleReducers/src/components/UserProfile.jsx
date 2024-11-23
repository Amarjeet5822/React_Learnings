import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function UserProfile() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    age: 0
  })

  const formSumitHandler = (event) => {
    event.preventDefault()
    dispatch({type:"UpdateUser", payload:formData})
  }
  const changeHandler = (event) => {
    console.log("event.target ", event.target)
    console.log("event.target.name ", event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    })
  }
  return (
    <div className='rounded-md  shadow-sm p-4 dark:bg-gray-600 dark:text-white'>
      <div className='mb-10'>
        <p className='mb-2 text-2xl'>Current User Info:</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
      <div>
        <form onSubmit={formSumitHandler}>
          <label htmlFor="name">Name: <br />
            <input className='w-full dark:bg-gray-700 dark:text-white dark:outline-none pl-1 rounded-md mt-1' type="text"
            name="name"
            onChange={changeHandler}
            value={formData.name} />
          </label><br />
          <label htmlFor="email">Email: <br />
            <input className='w-full dark:bg-gray-700 dark:text-white dark:outline-none pl-1 rounded-md mt-1' type="email"
            name= "email" 
            onChange={changeHandler}
            value={formData.email}  />
          </label><br />
          <label htmlFor="age">Age: <br />
            <input className='w-full dark:bg-gray-700 dark:text-white dark:outline-none pl-1 rounded-md mt-1' type="number"
            name="age" 
            onChange={changeHandler}
            value={formData.age} />
          </label><br />
          <div className='flex gap-2 mt-4'>
          <button className='px-2 py-1 rounded-md bg-green-400' type="submit">Updat User</button>
          <button className='px-2 py-1 rounded-md bg-red-400' type="button" onClick={()=> dispatch({type: "ResetUser"})}>Reset User</button>
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile