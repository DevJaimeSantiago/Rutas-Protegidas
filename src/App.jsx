import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          {/* <Outlet /> Para mostrar las paginas anidadas */}
          <Outlet />
        </div>
    </>
  )
}

export default App