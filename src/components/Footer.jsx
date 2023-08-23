import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, Twitter, Instagram } from 'react-feather';
import { logo_white } from '../assets'

const Footer = () => {
  return (
    <div className='pt-20 pb-10 bg-black text-white'>
      <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 font-semibold text-lg ml-16'>
        <div className='mt-16 md:mt-0'>
          <span>FOR ARTISTS</span>
          <div className='mt-6 flex flex-col gap-2'>
            <Link to='/why'>Why Qrates?</Link>
            <Link to='/why/crowdfunding'>Crowdfunding</Link>
            <Link to='/why/make-and-sell'>Make & Sell</Link>
            <Link to='/services/design'>Our Services</Link>
            <Link to='/articles'>Artist Toolkit</Link>
            {/* //! The link below is not right. The real link is some share program but ehh M not gonna make that one */}
            <Link to='/'>Referral Program</Link>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <span>FOR FANS</span>
          <div className='mt-6 flex flex-col gap-2'>
            <Link to='/discover'>Discover</Link>
            <Link to='/projects'>Records</Link>
            <Link to='/stories'>Stories</Link>
            <Link to='/lists'>Lists</Link>
            <Link to='/artists'>Artist & Labels</Link>
          </div>
        </div>
        <div className='mt-16 md:mt-0'>
          <span>OUR COMPANY</span>
          <div className='mt-6 flex flex-col gap-2'>
            <Link to='/about'>About Qrates</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/partners'>Partners</Link>
          </div>         
        </div>
        <div className='mt-16 md:mt-0'>
          <span>HELP</span>
          <div className='mt-6 flex flex-col gap-2'>
            {/* //! Again wrong links below */}
            <Link to='/'>Support Center</Link>
            <Link to='/contact'>Careers</Link>
            <Link to='/'>Partners</Link>
            <Link to='/'>Partners</Link>
          </div>   
        </div>
      </div>

      {/* My Social Media Handles */}
      <div className='flex flex-row justify-center items-center gap-6 my-12'>
        <Link to='https://github.com/SamstyleGhost'><GitHub /></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><Instagram /></Link>
        <Link to='https://twitter.com/Samstyleghost'><Twitter /></Link>
      </div>

      {/* Logo and other stuff */}
      <div className='flex flex-col items-center'>
        <div className='flex flex-row pt-12 gap-12 justify-center'>
        <Link to='/'><img src={logo_white} alt="github_logo" width='225' height='225'/></Link>
          <div className='flex flex-col items-left md:items-start font-bold text-7xl mb-12'>
            <span>QRATES</span>
            <span className='footertextoutline'>MUSIC IN</span>
            <span className='footertextoutline'>YOUR HANDS</span>
          </div>
        </div>       
        <div className='flex justify-between mx-8 font-medium text-xs mt-10 md:w-1/2'>
          <Link to='/terms'>Terms of Service</Link>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/legal'>Legal Information</Link>
        </div>    
      </div>
    </div>
  )
}

export default Footer