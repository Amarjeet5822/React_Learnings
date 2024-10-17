import { useEffect, useState } from 'react'
import './App.css'
import ThemeProvider from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
    // actual theme change
    useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])
  return (
    <ThemeProvider value={{lightTheme, darkTheme, themeMode}}>
    <h1 className='p-4 text-3xl bg-pink-600'>Chai aur Theme Converter</h1>
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                < ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
               <Card />
            </div>
        </div>
    </div>

    </ThemeProvider>
  )
}

export default App
