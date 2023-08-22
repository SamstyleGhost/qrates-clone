import React from 'react'
import { Navbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Home, Discover, Login, Records, Vinyl, Stories } from './pages';

const App = () => {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects'>
          <Route index element={<Records />} /> 
          <Route path='start' element={<Vinyl />} />
        </Route>
        {/* //TODO The stories route should be a dynamic route where there is an artist param */}
        <Route path='/stories' element={<Stories />}/>
      </Routes>
    </div>
  )
}

export default App
