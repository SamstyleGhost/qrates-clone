import React, { useState } from 'react';
import { logo } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, ShoppingCart, X } from 'react-feather';
import { navLinks } from '../constants';
import { useWindowWidth } from '../utils';
import { CustomButton } from '../components';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
   
  const windowWidth = useWindowWidth();

  const navbarBorderStyle = toggleMenu &&  windowWidth < 990 ? {
    borderBottom: '2px solid black',
    paddingBottom: '10px',
  } : {}

  return (
    <div className={`${toggleMenu ? 'fixed' : 'static'} flex justify-between md:m-4 m-0 font-semibold px-3 text-lg`} style={navbarBorderStyle}>
      <div className='flex gap-4 m-4 md:m-0'>
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
        {toggleMenu 
          ? <div className='cursor-pointer border-2 border-red-500' onClick={() => { setToggleMenu(false) }}><X /></div> 
          : <div className='cursor-pointer border-2 border-red-500' onClick={() => { setToggleMenu(true) }}><Menu /></div>
        }
        {toggleMenu && (
          <ul className='z-90 p-3 w-full fixed right-0 top-0 h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md text-black bg-white'>
            <li className='text-2xl my-4'>
              <div className='cursor-pointer' onClick={() => { setToggleMenu(false) }}><X /></div>
            </li>
            {navLinks.map((navLink) => (
            <Link to={navLink.url}>{navLink.title}</Link>
            ))}
          </ul>
        )}

      </div> 
      
      <div className='navbar-div'>
        <Link to='/login'>Log In</Link>
        <CustomButton 
          url='/projects/start'
          text='Make Your Own'
          isFilled
        />
      </div>
    </div>
  )
}

export default Navbar