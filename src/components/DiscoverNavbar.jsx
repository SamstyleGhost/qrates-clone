import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DiscoverNavbar = () => {
  return (
    <div className='w-full'>
      <div className='px-8 pt-12 flex flex-col md:flex-row justify-between bg-black text-white'>
        <NavLink style={({isActive}) => { return isActive ? { textDecorationLine: 'none'} : { WebkitTextStroke: '2px white', color: 'black' }}} className='font-bold text-5xl mb-12' to='/discover'>Discover</NavLink>
        <NavLink style={({isActive}) => { return isActive ? { textDecorationLine: 'none'} : { WebkitTextStroke: '2px white', color: 'black' }}} className='font-bold text-5xl mb-12' to='/stories'>Stories</NavLink>
        <NavLink style={({isActive}) => { return isActive ? { textDecorationLine: 'none'} : { WebkitTextStroke: '2px white', color: 'black' }}} className='font-bold text-5xl mb-12' to='/lists'>Lists</NavLink>
        <NavLink style={({isActive}) => { return isActive ? { textDecorationLine: 'none'} : { WebkitTextStroke: '2px white', color: 'black' }}} className='font-bold text-5xl mb-12' to='/artists'>Artists & Labels</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default DiscoverNavbar