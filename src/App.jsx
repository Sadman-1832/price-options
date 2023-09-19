import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyUi from './components/DaisyUi/DaisyUi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-4xl font-serif font-bold'>Hello World!</h1>
      <PriceOptions></PriceOptions>

    </>
  )
}

export default App
