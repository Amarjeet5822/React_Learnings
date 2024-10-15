import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
    const [ AmarN, nameCall] = useState('change Name UseState : Satyam')
  let [counter, setCount] = useState(0) // useState analyse the UI and update counter where he found . Every counter value is change. 

//   let counter = 15
  const AddCnt = () => {
    if (counter<20){
        setCount(prevCounter=> prevCounter+1)
        setCount(prevCounter=> prevCounter+1)
    } 
  }
  const RemoveCnt = () => {
    if (counter>1){
        setCount(prevCounter=> prevCounter-1)
        setCount(prevCounter=> prevCounter-1)
    } 
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2> Counter : {counter} </h2>

      <button onClick={AddCnt}>Add Counter : {counter} </button>
      <h3> {AmarN}</h3>
      <br />
      <button onClick={RemoveCnt}>Remove Counter : {counter} </button>
      <h3>{AmarN}</h3>
      <p>This is a paragraph {counter} and name is coming using useState := {AmarN}</p>
    </>
  )
}

export default App
