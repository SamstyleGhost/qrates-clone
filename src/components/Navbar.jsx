import React, { useState } from 'react';
import { logo } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, ShoppingCart } from 'react-feather';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='flex justify-between m-4 font-semibold px-3'>
      <div className='flex gap-4'>
      <Link to='/'><img src={logo} alt="github_logo" width='50' height='50'/></Link>
        <div className='navbar-div'>           
          <NavLink to='/projects'>Records & Casettes</NavLink>
          <NavLink to='/discover'>Discover</NavLink>
          {/* //TODO Create two more NavLinks ForArtists and OurCompany that are dropdown menus */}
        </div>
        <div className='flex items-center ml-1 gap-4 absolute top-7 right-12 md:static'>
          <Search />
          <ShoppingCart />
        </div>
      </div>
      <div className='md:hidden block absolute top-7 right-1'>
        <Menu />
      </div>
      <div className='navbar-div'>
        <Link to='/login'>Log In</Link>
        <Link to='/projects/start'>Make Your Own</Link> 
      </div>
    </div>
  )
}

export default Navbar