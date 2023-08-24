import React from 'react';
import { vinyl_disk } from '../assets';

const Vinyl = ({ vinyl_img }) => {
  return (
    <div className='w-1/2 grid grid-cols-5 grid-rows-3'>
      <div className='inline row-start-1 row-end-4 col-start-1 col-end-4 z-20'>
        <img src={vinyl_img} alt='vinyl' className='object-cover shadow-2xl shadow-black drop-shadow-2xl'/>
      </div>
      <div className='inline-block row-start-1 row-end-4 col-start-3 col-end-6'>
        <img src={vinyl_disk} alt='vinyl_disk' className='object-cover rounded-full shadow-inner opacity-80 ring-2 ring-black'/>
      </div>
      <div className='inline-block row-start-2 row-end-3 col-start-4 col-end-5 z-10'>
        <img src={vinyl_img} alt='vinyl_bg' className='object-cover rounded-full shadow-inner animate-spin-slow'/>
      </div>
    </div>
  )
}

export default Vinyl