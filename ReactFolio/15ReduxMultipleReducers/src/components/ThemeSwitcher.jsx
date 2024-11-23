import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ThemeSwitcher() {
  const [stateTheme, setStateTheme] = useState("light")
  const theme = useSelector(state=> state.theme);
  const dispatch = useDispatch();

  const ligthTheme = () => {
    setStateTheme("light")
    dispatch({type:"light"})
  }
  const darkTheme = () => {
    setStateTheme("dark")
    dispatch({type:"dark"})
  }
  return (
    <div className='rounded-md shadow-sm p-4 dark:bg-gray-600 dark:text-white mb-6 '>
      <div>
        <p className='mb-2 text-2xl'>Theme Switcher</p>
      </div>
      <div>
        <p>Current Theme: {theme}</p>
      </div>
      <div className='flex gap-2 mt-2'>
        <button className='px-2 py-1 rounded-md bg-blue-400 dark:bg-gray-700' onClick={ligthTheme}>Light Theme</button>
        <button className='px-2 py-1 rounded-md bg-blue-400 dark:bg-gray-700' onClick={darkTheme}>Dark Theme</button>
      </div>
    </div>
  )
}

export default ThemeSwitcher