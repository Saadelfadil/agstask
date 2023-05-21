import { useState } from 'react'
import Stepper from "./components/Stepper"
import Modal from "./components/Modal"
import Home from "./components/Home"
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen == true ? <Modal setIsOpen={setIsOpen}/> : <Home setIsOpen={setIsOpen}/>}
    </>
  )
}

export default App
