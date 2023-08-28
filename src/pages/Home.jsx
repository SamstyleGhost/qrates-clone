import React, { useState } from 'react';
import { artist_1, bg_1, bg_2, bg_3, bg_4, bg_5, side_pic_1, side_pic_2, artist_2, artist_3, artist_4, artist_5, artist_6, artist_7, artist_8, artist_9 } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { Motto, CustomButton, VinylList } from '../components';
import { useWindowWidth } from '../utils';

const Home = () => {

  const windowWidth = useWindowWidth();
  const [background, setBackground] = useState(bg_1);

  return (
    <div className='flex flex-col w-full mt-8'>
      {/* Section 1 */}
      <div className='flex w-full md:flex-row flex-col items-center md:justify-between md:px-8'>
        <div className='flex flex-col'>  
          <div className='flex flex-col items-center md:items-start font-bold text-6xl mb-8'>
            <span>QRATES</span>
            <span className='textoutline'>MUSIC IN</span>
            <span className='textoutline text-center'>YOUR HANDS</span>
          </div>
          {windowWidth > 990 && (
            <div><Motto /></div>
          )}
        </div>
        <div className='w-5/6 height-[600px] max-w-3xl mt-8 flex gap-4 items-center md:translate-x-[-75px]'>
          <Link to='/stories'><img src={artist_1} alt='artist_cover' height='100%' className='object-contain rotate-6 border-4 border-black'/></Link>
          <div className='relative top-[100px] md:top-[200px] font-semibold text-sm vertical'>
            <span><NavLink to='/stories' className='underline'>Artist</NavLink> IS ON QRATES</span>
          </div>
        </div>
      {windowWidth < 990 && (
        <div><Motto /></div>
      )}
      </div>
      <div className='flex justify-center md:flex-start gap-2 px-8 my-8 md:self-start'>
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

      {/* Section 2 */}
      <div className='md:h-screen text-white flex flex-col justify-between' style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover'}}>
        <div className='max-w-1/2'>
          <div className='border-2 border-white text-center w-[110px] font-semibold mx-8 my-10 p-1'>
            FOR FANS
          </div>
          <div className='flex flex-col px-8 font-bold text-6xl py-12'>
            <div>
              <NavLink onMouseEnter={() => {setBackground(bg_5)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/discover'>DISCOVER</NavLink>
            </div>
            <div>
              <NavLink onMouseEnter={() => {setBackground(bg_2)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/projects'>RECORDS & CASETTES</NavLink>
            </div>
            <div>
              <NavLink onMouseEnter={() => {setBackground(bg_3)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/stories'>STORIES</NavLink>
            </div>
            <div>
              <NavLink onMouseEnter={() => {setBackground(bg_4)}} onMouseLeave={() => setBackground(bg_1)} className='hover:underline' to='/lists'>LISTS</NavLink>
            </div>
          </div>
        </div>
        <div className='px-8 py-4 relative bottom-2'>
          <span className='font-semibold text-lg'>The latest from the Qrates community</span>
        </div>    
      </div>

      {/* Section 3 */}
      <div className='md:h-screen bg-[#FFF804] flex flex-col md:flex-row-reverse'>
        <div className='w-11/12 md:w-1/2 overflow-hidden mt-8 md:mt-0 mx-auto'>
          <img src={side_pic_2} alt='side_pic' className='border-2 border-black md:w-full md:h-full object-cover'/>
        </div>
        <div className='flex flex-col md:justify-between md:w-1/2'>
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
          <div className='m-8 flex flex-col justify-center md:flex-start gap-2 sm:flex-row md:self-start'>
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

      {/* Section 4 */}
      <div className='md:h-screen bg-[#dcdcd4] flex flex-col md:flex-row'>
        <div className='w-11/12 md:w-1/2 overflow-hidden mt-8 md:mt-0 mx-auto'>
          <img src={side_pic_1} alt='side_pic' className='border-2 border-black md:w-full md:h-full object-cover'/>
        </div>
        <div className='flex flex-col md:justify-between md:w-1/2'>
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
          <div className='m-8 flex flex-col justify-center md:flex-start gap-2 sm:flex-row md:self-start'>
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

      {/* Section 5 */}
      <div className='bg-black text-white flex flex-col gap-8 items-center'>
        <div className='border-2 border-white text-center w-[180px] font-medium mx-8 mt-28 p-1'>
          QRATES STUDIO
        </div>  
        <div className='font-bold text-4xl flex flex-col items-center'>
          <span>Make it real with</span>
          <span>Qrates Studios</span>
        </div>
        <div className='font-semibold text-lg text-center w-1/2 my-8'>
          Design the look and feel of your vinyl and cassette and use the profit calculator to immediately see how much your project will cost, and how much you'll earn.
        </div>
        <div className='w-full'>
          <VinylList />
        </div>
        <div className='pb-36 mt-24'>
          <NavLink to='/projects/start' className='bg-[#FFF804] text-black font-semibold px-24 py-6 rounded-full text-center'>
            TRY IT NOW
          </NavLink>
        </div>
      </div>

      {/* Section 6 */}
      <div className='bg-black grid gap-1 grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2'>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_2} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_3} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_4} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_5} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_6} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_7} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_8} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
        <Link to='https://www.instagram.com/samstyleghost/'><img src={artist_9} alt='grid_img' className='hover:scale-105 rounded-md transition ease-in-out duration-300'/></Link>
      </div>
    </div>
  )
}

export default Home