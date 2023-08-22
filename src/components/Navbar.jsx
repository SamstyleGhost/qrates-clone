import React, { useState } from 'react';
import { logo } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, ShoppingCart } from 'react-feather';
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
    <div className={`flex justify-between m-4 font-semibold px-3 text-lg`} style={navbarBorderStyle}>
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
        <div className='cursor-pointer' onClick={() => { setToggleMenu(!toggleMenu) }}>  
        <Menu />
        </div>
      </div>
      
      {toggleMenu && windowWidth < 990 && (
        <div className='w-full h-full absolute top-1/4 z-10'>
          <div className='flex flex-col'>
          {navLinks.map((navLink) => (
            <Link to={navLink.url}>{navLink.title}</Link>
          ))}
          </div>
        </div>
      )}     
      
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