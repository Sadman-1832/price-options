import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import DaisyUi from './components/DaisyUi/DaisyUi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DaisyUi></DaisyUi> */}
    <Navbar></Navbar>
     <h1 className='text-4xl font-serif font-bold'>Hello World!</h1>

     
    </>
  )
}

export default App
