import React from 'react';
import { ImageCarousel, Vinyl } from '../components';
import {  vinyl_1 } from '../assets';
import { NavLink } from 'react-router-dom';
import { imagesArray, storiesArray } from '../constants';

const Discover = () => {

  return (
    <div>
      {/* Section 1 */}
      <div className='mb-4 md:mb-0'>
        <ImageCarousel 
          images={imagesArray}
        />
      </div>

      {/* Section 2  */}
      <div className='bg-[#dba134] pt-4 px-8 border-2 border-black'>     
        <div className='border-2 border-black text-center w-[225px] text-sm font-semibold p-1 bg-white'>
          PROJECT OF THE WEEK
        </div>
        <div className='flex flex-col md:flex-col-reverse mt-16 md:mt-4'>
          <div className='md:mt-16 flex justify-center'>
            <Vinyl 
              vinyl_img={vinyl_1}
            />
          </div>
          <div className='flex flex-col w-1/2 mt-16 md:mt-4'>
            <span className='font-bold text-3xl'>The Midst of Things</span>
            <span className='font-semibold text-3xl'>MMYYKK</span>
            <span className='font-medium text-lg'>Soul, Electronic, HipHop/Rap, R&B, Jazz</span>
          </div>
        </div>
        <div className='font-semibold my-16 underline md:relative md:text-right'>
          <span><NavLink to='../projects'>EXPLORE THE PROJECT</NavLink></span>
        </div>
      </div>

      {/* Section 4 */}
      <div className='mt-16'>
        <span className='text-5xl font-bold ml-8'>Stories</span>
        <div className='w-full ml-8 mt-4 flex gap-16 font-semibold text-xl overflow-x-auto'>
          {storiesArray.map((item, index) => (
            <div 
            key={index}
            >
              {item.view}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover