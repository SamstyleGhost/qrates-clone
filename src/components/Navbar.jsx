import React from 'react';
import { logo } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-between m-4 font-semibold px-3'>
      <div className='navbar-div'>   
        <Link to='/'><img src={logo} alt="github_logo" width='50' height='50'/></Link>
        <Link to='/projects'>Records & Casettes</Link>
        <Link to='/discover'>Discover</Link>
      </div>
      <div className='navbar-div'>
        <Link to='/login'>Log In</Link>
        <Link to='/projects/start'>Make Your Own</Link>
      </div>
    </div>
  )
}

export default Navbar