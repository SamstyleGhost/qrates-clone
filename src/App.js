import React from 'react'
import { Navbar, Footer, DiscoverNavbar } from './components'
import { Route, Routes } from 'react-router-dom'
import { Home, Discover, Login, Records, Stories, Lists, Artists } from './pages';

const App = () => {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<DiscoverNavbar />}>
          <Route path='/discover' element={<Discover />} />
          <Route path='/lists' element={<Lists />}/>
        {/* //TODO The stories route should be a dynamic route where there is an artist param */}
          <Route path='/artists' element={<Artists />}/>
          <Route path='/stories' element={<Stories />}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/projects'>
          <Route index element={<Records />} /> 
          <Route path='start' element={<Discover />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
