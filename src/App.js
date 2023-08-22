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
        {/* //TODO The lists url here renders the discover component because Lists & then Artists is not created yet and also check for the exact routing that is happening */}
        <Route path='/lists' element={<Discover />}/>
        <Route path='/artists' element={<Discover />}/>
      </Routes>
    </div>
  )
}

export default App
