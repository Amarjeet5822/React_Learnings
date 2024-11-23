import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import ThemeSwitcher from './components/ThemeSwitcher';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';

function App() {
  const theme = useSelector(state => state.theme);

  return (
    <div className={`${theme!=="light"? "dark" : "" }` }>
      <div className='flex flex-col gap-4 max-w-screen-lg m-auto my-10 p-6 rounded-md dark:bg-gray-700' >
        <h1 className=' text-3xl pl-4 pb-0 rounded-md shadow-sm font-medium dark:text-white '>React-Redux ( Global State Management ) </h1>
        <ThemeSwitcher />
        <Counter />
        <UserProfile />
      </div>
    </div>
  )
}

export default App
