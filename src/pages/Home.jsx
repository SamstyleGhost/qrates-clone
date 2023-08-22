import React, { useState } from 'react';
import { artist_1, bg_1, bg_2, bg_3, bg_4, bg_5, side_pic_1, side_pic_2 } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Motto, CustomButton } from '../components';
import { useWindowWidth } from '../utils';

const Home = () => {

  const windowWidth = useWindowWidth();
  const [background, setBackground] = useState(bg_2);
  const [side_pic, setSide_pic] = useState(side_pic_1);

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
          <Link to='/stories'><img src={artist_1} alt='artist_cover' height='100%' className='object-contain rotate-6 border-2 border-black'/></Link>
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
      <div className='entire text-white flex flex-col justify-between' style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover'}}>
        <div className='max-w-1/2'>
          <div className='border-2 border-white text-center w-[110px] font-semibold mx-8 my-10 p-1'>
            FOR FANS
          </div>
          <div className='flex flex-col px-8 font-bold text-6xl py-12'>
            <NavLink onMouseEnter={() => {setBackground(bg_5)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/discover'>DISCOVER</NavLink>
            <NavLink onMouseEnter={() => {setBackground(bg_2)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/projects'>RECORDS & CASETTES</NavLink>
            <NavLink onMouseEnter={() => {setBackground(bg_3)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/stories'>STORIES</NavLink>
            <NavLink onMouseEnter={() => {setBackground(bg_4)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/lists'>LISTS</NavLink>
          </div>
        </div>
        <div className='px-8 py-4 relative bottom-2'>
          <span className='font-semibold text-lg'>The latest from the Qrates community</span>
        </div>    
      </div>
      <div className='entire bg-[#FFF804] flex flex-col md:flex-row-reverse'>
        <div className='w-11/12 md:w-5/6 overflow-hidden mt-8 md:mt-0 mx-auto'>
          <img src={side_pic_2} alt='side_pic' className='border-2 border-black md:w-full md:h-full object-cover'/>
        </div>
        <div className='flex flex-col md:justify-between md:max-w-1/2'>
          <div>
            <div className='border-2 border-black text-center w-[110px] font-semibold mx-8 my-10 p-1'>
              FOR FANS
            </div>
            <div className='mx-8 flex flex-col gap-2'>
              <div className='font-bold text-4xl w-1/2'>
                <span>Limited edition, unlimited inspiration.</span>
              </div>
              <div className='font-[600] text-xl w-3/4'>
              <span>Discover new records, cassettes, special releases, and one-offs directly supporting artists and labels in the process.</span>
              </div>
            </div>
          </div>
          <div className='m-8 flex flex-col gap-2 sm:flex-row '>
            <CustomButton 
              url='/projects'
              text='BROWSE MUSIC'
              isFilled
            />
            <CustomButton 
              url='/artists'
              text='SEE ARTISTS ON QRATES'
            />
          </div>
        </div>
      </div>
      <div className='entire bg-[#dcdcd4] flex flex-col md:flex-row'>
        <div className='w-11/12 md:w-5/6 overflow-hidden mt-8 md:mt-0 mx-auto'>
          <img src={side_pic_1} alt='side_pic' className='border-2 border-black md:w-full md:h-full object-cover'/>
        </div>
        <div className='flex flex-col md:justify-between max-w-1/2'>
          <div>
            <div className='border-2 border-black text-center w-[140px] font-semibold mx-8 my-10 p-1'>
              FOR ARTISTS
            </div>
            <div className='mx-8 flex flex-col gap-2'>
              <div className='font-bold text-4xl w-7/12'>
                <span>Your music on vinyl and cassette, direct to your fans.</span>
              </div>
              <div className='font-[600] text-xl w-3/4'>
              <span>Create beautiful physical copies of your next release on vinyl and cassette. We make the process easy, so you can focus on the music.</span>
              </div>
            </div>
          </div>
          <div className='m-8 flex flex-col gap-2 sm:flex-row '>
            <CustomButton 
              url='/why'
              text='LEARN MORE'
              isFilled
            />
            <CustomButton 
              url='/why/crowdfunding'
              text='COMPARE PROJECT TYPE'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home