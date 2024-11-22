import { useState } from 'react'
import './assets/HomePage'
import './assets/Header'
import './App.css'
import HomePage from './assets/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
      <HomePage/>      
    </>
  )
}

export default App
