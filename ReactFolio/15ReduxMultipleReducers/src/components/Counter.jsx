import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const count = useSelector(state=> state.count);
  const dispatch = useDispatch()
  return (
    <div className='rounded-md p-4 shadow-sm dark:bg-gray-600 dark:text-white mb-6'>
      <div className='mb-2 text-2xl' >
        Counter
      </div>
      <div>
        <p>Counter: {count}</p>
      </div>
      <div className='flex gap-2 mt-2'>
        <button className='px-2 py-1 rounded-md bg-blue-400 dark:bg-gray-700'  onClick={()=> dispatch({type:"Increment"})} >Increment(+)</button>
        <button className='px-2 py-1 rounded-md bg-blue-400 dark:bg-gray-700' onClick={()=> dispatch({type:"Decrement"})}>Decrement(-)</button>
      </div>
    </div>
  )
}

export default Counter