import React from 'react';
import { artist_1 } from '../assets';
import { NavLink } from 'react-router-dom';
import { Motto, CustomButton } from '../components';
import { useWindowWidth } from '../utils';

const Home = () => {

  const windowWidth = useWindowWidth();

  return (
    <div className='flex flex-col w-full mt-8'>
      <div className='flex w-full md:flex-row flex-col items-center md:justify-between md:px-8'>
        <div className='flex flex-col '>  
          <div className='flex flex-col items-center md:items-start font-bold text-6xl mb-8'>
            <span>QRATES</span>
            <span className='textoutline'>MUSIC IN</span>
            <span className='textoutline'>YOUR HANDS</span>
          </div>
          {windowWidth > 990 && (
            <div><Motto /></div>
          )}
        </div>
        <div className='w-5/6 height-[600px] max-w-3xl mt-8 flex gap-4 items-center md:translate-x-[-75px]'>
          <img src={artist_1} alt='artist_cover' height='100%' className='object-contain rotate-6 border-2 border-black'/>
          <div className='relative top-[200px] font-semibold text-sm vertical'>
            <span><NavLink to='/stories' className='underline'>Artist</NavLink> IS ON QRATES</span>
          </div>
        </div>
      {windowWidth < 990 && (
        <div><Motto /></div>
      )}
      </div>
      <div className='flex flex-start gap-2 px-8 my-8'>
        <CustomButton 
          url='/discover'
          text='DISCOVER MUSIC'
          isFilled
        />
        {/* //TODO Again, there is an arrow right icon which needs to be in the text */}
        <CustomButton 
          url='/projects/start'
          text='MAKE YOUR OWN'
        />
      </div>
      <div>
        lorem ipsum dolor sit amet, consectetur
      </div>
    </div>
  )
}

export default Home