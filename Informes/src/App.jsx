import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import NuevoInforme from './views/NuevoInforme'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Informe" element={<NuevoInforme/>}/>
     </Routes>
      
    </>
  )
}

export default App
