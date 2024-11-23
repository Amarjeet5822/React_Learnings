import { Route, Routes } from "react-router"

import Navbar from "./components/Navbar"
import AllRoutes from "./components/AllRoutes"

function App() {

  return (
    <>
      <h1 className='w-10/12 m-auto text-center text-2xl bg-gray-400 py-5' >React Router Query Params and useSearchParams hook</h1>
      <div  className='flex flex-col  bg-gray-200 py-3 w-10/12 m-auto'>
        <Navbar />
        <AllRoutes />
      </div>
    </>
  )
}

export default App
