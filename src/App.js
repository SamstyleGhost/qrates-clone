import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home, Discover, Login, Records, Vinyl } from './pages';

const App = () => {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects' element={<Records />}>
          <Route path='/projects/start' element={<Vinyl />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
